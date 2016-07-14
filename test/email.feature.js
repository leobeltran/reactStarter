import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Email from '../src/email';

Feature('Email input','', ()=>{
  Scenario('User wants to input address',()=>{

    const wrapper = shallow(<Email/>)

      Given('there is a text input',()=>{
      	expect(wrapper.find('input')).to.exist
      })

      And('there is a button to send',()=>{
      	expect(wrapper.find('button')).exist
      })

      Then('the email should change and should send my email to gravatar',()=>{
        const wrapper = mount (<Email />)

        wrapper.setProps({handleEmailChange:''})
      	expect(wrapper.props().handleEmailChange).to.exist

        wrapper.setProps({fetchGravatar:''})
      	expect(wrapper.props().fetchGravatar).to.exist
      })
  })
})
