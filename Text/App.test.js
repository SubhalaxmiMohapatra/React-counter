import React from "react";
import {shallow} from "enzyme";
import { App } from './App'


it('should increment when clicking button' , () =>{
    const wrapper = shallow(<App/>);
    const total1 = wrapper.find('h2').text();

    expect(total1).toBe("0");

    const button = wrapper.find('button');
    button.simulate('click');

    const total2 = wrapper.find('h2').text();
    expect(total2).toBe("1");
});