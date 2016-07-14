import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Avatar from '../lib/avatar';

Feature('Avatar','should show a picture and an email', ()=>{
  Scenario('user visits page for the first time',()=>{

      const wrapper = shallow(<Avatar/>);

      Given('should have a temporary picture',()=>{
      	expect(wrapper.find('img')).to.have.length(1)
      })
      And('should have email and foto properties',()=>{
      	expect(wrapper.props().email).to.be.defined
      	expect(wrapper.props().src).to.be.defined

      })
  })
})
