import React from "react";
import { Tab, Tabs } from 'react-bootstrap';
import Layout from "../components/layout";
import { connect } from "react-redux";
import {authenticateUser, updateUser as updateUserRedux} from "../state/actions";
import Accordion from '../components/Accordion/accordion';
import ProcessFeed from '../components/ListProcesses/ProcessFeed';
import {updateUser, getUserbyUsername} from '../graphql_utils/utils';
import { Auth } from 'aws-amplify';

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    //initial state
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      processes: {
        items: [],
        nextToken: null
      },
      username: "",
      update: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
      },
      oldPass: "",
      newPass: "",
      repPass: "",
      verification_code: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
    this.handlePasswordCode = this.handlePasswordCode.bind(this);
    this.submitPassword = this.submitPassword.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
    this.submitPhoneNumber = this.submitPhoneNumber.bind(this);
    this.showVerification = this.showVerification.bind(this);
    this.submitVerify = this.submitVerify.bind(this);
  }

  componentDidMount() {
    // load data of user and set to state
    const { first_name, last_name, email, phone_number, processes, username } = this.props.user;
    this.setState({first_name, last_name, email, phone_number, processes, username});
    this.setState({
      update: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
        username: username
      }
    })
  }

  handleChange = (event) => {
    let update = Object.assign({}, this.state.update);
    update[event.target.name] = event.target.value;
    this.setState({ update });
  }

  handlePasswordCode = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // amplify to change password
  submitPassword = () => {
    if(this.state.newPass === this.state.repPass) {
      Auth.currentAuthenticatedUser()
        .then(user => {
          return Auth.changePassword(user, this.state.oldPass, this.state.newPass);
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
    else {
      alert("Passwords dont match");
      return;
    }
  }

  submitName = () => {
    if ((this.state.update.first_name !== this.state.first_name) ||
        (this.state.update.last_name !== this.state.last_name)) {
      updateUser({
        // update data saved in dynamodb
        id: this.props.user.id,
        first_name: this.state.update.first_name,
        last_name: this.state.update.last_name
      });
      // update data in cognito
      this.props.updateUser({
        first_name: this.state.update.first_name,
        last_name: this.state.update.last_name,
        email: this.state.email,
        phone_number: this.state.phone_number,
        processes: this.state.processes,
        username: this.state.username
      });
      getUserbyUsername(this.state.username).then(res => {
        console.log(res);
        const user = res.data.getUser;
        this.props.authenticateUser(user);
      });
    }
  }

  showVerification = () => {
    var x = document.getElementById("verify");
    x.style.display = "block";
  }

  submitVerify = () => {
    // To verify attribute with the code
    Auth.verifyCurrentUserAttributeSubmit("email", this.state.verification_code)
    .then(() => {
         console.log('email verified');
         //update data saved in dynamodb
         updateUser({
           id: this.props.user.id,
           email: this.state.update.email
         });
         // update data in cognito
         this.props.updateUser({
           first_name: this.state.first_name,
           last_name: this.state.last_name,
           email: this.state.update.email,
           phone_number: this.state.phone_number,
           processes: this.state.processes,
           username: this.state.username
         });
         // update data in redux
         getUserbyUsername(this.state.username).then(res => {
           console.log(res);
           const user = res.data.getUser;
           this.props.authenticateUser(user);
         });
    }).catch(e => {
         console.log('failed with error', e);
    });
  }

  submitEmail = () => {
    if (this.state.update.email !== this.state.email) {
      //update amplify
      Auth.currentAuthenticatedUser().then(user => {
        Auth.updateUserAttributes(user, {
          email: this.state.update.email
        }).then(res => {
          // alert("Check your email for Verification code");
          this.showVerification();
        });
      });
    }
  }

  submitPhoneNumber = () => {
    if (this.state.update.phone_number !== this.state.phone_number) {
      //update amplify
      Auth.currentAuthenticatedUser().then(user => {
        Auth.updateUserAttributes(user, {
          phone_number: this.state.update.phone_number
        }).then(res => {
          // update data saved in dynamodb
          console.log(res)
          updateUser({
            id: this.props.user.id,
            phone_number: this.state.update.phone_number
          });
          // update data in cognito
          this.props.updateUser({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone_number: this.state.update.phone_number,
            processes: this.state.processes,
            username: this.state.username
          });
          getUserbyUsername(this.state.username).then(res => {
            console.log(res);
            const user = res.data.getUser;
            this.props.authenticateUser(user);
          });
        }).catch(err => alert("phone number is not in the correct format"));
      });
    }
  }

  render() {
    const { first_name, last_name, email, phone_number } = this.props.user;

    return (
      <Layout>
        <Tabs defaultActiveKey="projects" transitions={false} style={{width:100 + "%"}}>
          <Tab eventKey="projects" title="Projects">
            <h2 className="text-center">Processes</h2>
            {this.props.user.processes ? <ProcessFeed processes={this.props.user.processes.items}/> : null}
          </Tab>
          <Tab eventKey="settings" title="Settings">
            <h2 className="text-center">General Account Settings</h2>
            <div id="account-settings" className="container">
              <Accordion>
                <div label="Name" change={`${first_name} ${last_name}`}>
                  <form>
                    First Name:
                    <input className="col input-text" type="text" name="first_name" defaultValue={first_name} onChange={this.handleChange}/>
                    Last Name:
                    <input className="col input-text" type="text" name="last_name" defaultValue={last_name} onChange={this.handleChange}/>
                  </form>
                  <input className="submit" value="Submit Changes" type="button" onClick={this.submitName}/>
                </div>
                <div label="E-Mail" change={email}>
                  <form>
                    E-Mail:
                    <input className="col input-text" type="email" name="email" defaultValue={email} onChange={this.handleChange}/>
                  </form>
                  <input className="submit" value="Submit Changes" type="button" onClick={this.submitEmail}/>
                  <div id="verify" style={{display: "none"}}>
                    <form>
                      Enter Code:
                      <input className="col input-text" type="text" name="verification_code" onChange={this.handlePasswordCode}></input>
                    </form>
                    <input className="submit" value="Submit" type="button" onClick={this.submitVerify}></input>
                  </div>
                </div>
                <div label="Password" change="**********">
                  <form>
                    Current Password:
                    <input className="col input-text" type="password" name="oldPass" defaultValue="" onChange={this.handlePasswordCode}/>
                    New Password:
                    <input className="col input-text" type="password" name="newPass" defaultValue="" onChange={this.handlePasswordCode}/>
                    Confirm Password:
                    <input className="col input-text" type="password" name="repPass" defaultValue="" onChange={this.handlePasswordCode}/>
                  </form>
                  <input className="submit" value="Submit Changes" type="button" onClick={this.submitPassword}/>
                </div>
                <div label="Phone Number" change={phone_number}>
                  <form>
                    Phone Number:
                    <input className="col input-text" type="tel" name="phone_number" defaultValue={phone_number} onChange={this.handleChange}/>
                  </form>
                  <input className="submit" value="Submit Changes" type="button" onClick={this.submitPhoneNumber}/>
                </div>
              </Accordion>
            </div>
          </Tab>
        </Tabs>
      </Layout>
    );
  }
}

const mapStateToProps = ({state}) => ({
  isAuthenticated: state.isAuthenticated,
  user: state.user
})
const mapDispatchToProps = dispatch => ({
  authenticateUser: (auth) => dispatch(authenticateUser(auth)),
  updateUser: (user) => dispatch(updateUserRedux(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
