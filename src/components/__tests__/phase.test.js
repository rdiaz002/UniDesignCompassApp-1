import {configure, mount, shallow} from 'enzyme';
import React from "react"
import Phase from '../Compass/Phase';
import LogHandler from '../Compass/LogHandler'
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer"
configure({adapter:new Adapter()});
// jest.mock('../Compass/Phase')
let phaseWrapper=shallow(<Phase/>)


it('Phase Constructor called properly.', () => {
let spy=jest.spyOn(phaseWrapper.instance(),"constructor")
expect(spy).toHaveBeenCalledTimes(0);
});

it('ComponentDidMount clean',() =>{
  let spy=jest.spyOn(phaseWrapper.instance(),"componentDidMount")
  expect(spy).toHaveBeenCalledTimes(0);
});

it('updateTime clean',() =>{
  let spy=jest.spyOn(phaseWrapper.instance(),"updateTime")
  expect(spy).toHaveBeenCalledTimes(0);
});

it('TimeHandler clean',() =>{
  let spy=jest.spyOn(phaseWrapper.instance(),"timeHandler")
  expect(spy).toHaveBeenCalledTimes(0);
});

it('handleTextArea clean',() =>{
  let spy=jest.spyOn(phaseWrapper.instance(),"handleTextArea")
  expect(spy).toHaveBeenCalledTimes(0);
});

it('submitLog clean',() =>{
  let spy=jest.spyOn(phaseWrapper.instance(),"submitLog")
  expect(spy).toHaveBeenCalledTimes(0);
});

it('submitlog test',()=>{
  let spy=jest.spyOn(phaseWrapper.instance(),"submitLog")
  expect(spy).toHaveBeenCalledTimes(0);
  spy({time:"300"})
  expect(spy).toHaveBeenCalledTimes(1);
}

)

it('generateLog clean',() =>{
  let spy=jest.spyOn(phaseWrapper.instance(),"generateLog")
  expect(spy).toHaveBeenCalledTimes(0);
});

it('generateLog test',() =>{
  let spy=jest.spyOn(phaseWrapper.instance(),"generateLog")
  expect(spy).toHaveBeenCalledTimes(0);
  spy({id:"1",timestamp:"1",text:"This is a test"})
  expect(spy).toHaveBeenCalledTimes(1);
}); 


it('generateLogs clean',() =>{
  let spy=jest.spyOn(phaseWrapper.instance(),"generateLogs")
  expect(spy).toHaveBeenCalledTimes(0);
});

it('generateLogs test',() =>{
  let spy=jest.spyOn(phaseWrapper.instance(),"generateLogs")
  expect(spy).toHaveBeenCalledTimes(0);
  spy([0,1,2,3])
  expect(spy).toHaveBeenCalledTimes(1);

});