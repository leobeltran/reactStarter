import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Avatar from '../src/avatar';

Feature('Avatar','should show a picture and an email', ()=>{
  Scenario('user visits page for the first time',()=>{

      const wrapper = mount(<Avatar/>);

      Given('should have a temporary picture',()=>{
      	expect(wrapper.find('img')).to.exist
      })
      And('should have email and foto properties',()=>{

        wrapper.setProps({ email:''})
      	expect(wrapper.props().email).to.exist
        wrapper.setProps({ src:''})
      	expect(wrapper.props().src).to.exist
      })
  })
})
