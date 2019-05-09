import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import {  ButtonGroup } from 'react-bootstrap';
import Timer from 'react-compound-timer';
import "../bootstrap.css"
import PropTypes from "prop-types"
import LogHandler from "./LogHandler"
import {getPhase, createLogs} from "../../graphql_utils/utils"

class Phase extends Component {

    state = {
        logs: [],
        newLog : "",
        time: 0,
        title: "",
        description: "",
        generateLogs:[]
    }

    componentDidMount(){
        getPhase(this.props.phaseid).then((res) => {
            const Phase = res.data.getPhase
            this.setState({
                time : Phase.duration,
                logs : Phase.logs.items,
                title: Phase.title,
                description: Phase.description
            })
        })
    }

    adjustTime = (time) => {
        this.setState({ time })
    }

    timeHandler = (timerState,pause,newTime,start) => {
        const {props} = this;

        props.compassButtonHandler(props.phase);
        if(timerState === "PLAYING") {
            pause(); 
            // this.setState({newTime})
        } else {
            start()
        }
    }

    handleTextArea = (e) => {
        this.setState({newLog : e.target.value})
    }

    submitLog = (e) => {
        const {newLog} = this.state
        const now = new Date();
        const timestamp = now.getTime() + (now.getTimezoneOffset() * 60000)
        createLogs(this.props.phaseid,timestamp,newLog)
        .then((res) => {
            const logs = this.state.logs
            logs.push(res.data.createLog)
            this.setState({newLog: "", logs})
        })

    }

    generateLog = (log) => (
        <tbody key={log.id}>
            <tr>
                <style>{'td{background-color:rgba(50,115,220,0.3);color:grey}'}</style>
                <td >{log.text}</td>
                <td>{log.timestamp}</td>
            </tr>
        </tbody>
    )

    generateLogs = () => {
        const logs = this.state.logs
        logs.sort((a, b) => {
            return a.timestamp - b.timestamp;
        })
        return logs.map(log => this.generateLog(log))
    }

    render() {
        const { props } = this;
        return (
            <Timer
                initialTime={this.state.time}
                startImmediately={false}
                // onStart={() => console.log('Start')}
                // onResume={() => console.log('Resume')}
                // onPause={() => { console.log("Pause") }}
                // onStop={() => console.log('Stop')}
                // onReset={() => console.log('Reset')}
            >
                {({ start, resume, pause, stop, reset, getTimerState, getTime }) => (
                    <div className="d-flex flex-column" >
                        <ButtonGroup size="lg">
                            <Button
                                key={props.phase.key}
                                onClick={() => {
                                    this.timeHandler(getTimerState(), () => {pause()}, getTime(),() => {start()});
                                }}
                                block
                                className='text-left col-10'
                                variant={(props.currentPhase === props.phase.key) ? "success" : "outline-warning"}

                            >
                                {props.phase.name}
                            </Button>
                            <Button
                                className='col-2'
                                variant={(props.currentPhase === props.phase.key) ? "danger" : "outline-primary"}
                                onClick={() => {
                                    this.timeHandler(getTimerState(), () => {pause()}, getTime(),() => {start()});
                                }}
                            >
                                {(props.currentPhase === props.phase.key) ? null : (stop())}
                                <Timer.Hours />:
                                <Timer.Minutes />:
                                <Timer.Seconds />
                            </Button>
                        </ButtonGroup>
                        {
                            (props.currentPhase === props.phase.key) ? (
                                <LogHandler
                                    currentPhase={props.currentPhase}
                                    phase={props.phase}
                                    previous={props.previous}
                                    next={props.next}
                                    nextButtonHandler={props.nextButtonHandler}
                                    previousButtonHandler={props.previousButtonHandler}
                                    handleTextArea={this.handleTextArea}
                                    submitLog={this.submitLog}
                                    log={this.state.newLog}
                                    logs={this.generateLogs()}
                                />

                            ) : ( <div> </div> )
                        }
                    </div>
                )}
            </Timer>
        )
    }
}


export default Phase;

Phase.propTypes = {
    currentPhase :  PropTypes.number,
    phase : PropTypes.object,
    index: PropTypes.string,
    previous: PropTypes.bool,
    next: PropTypes.bool,
    compassButtonHandler: PropTypes.func,
    nextButtonHandler: PropTypes.func,
    previousButtonHandler: PropTypes.func,
}