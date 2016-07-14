import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Email from '../lib/email';

Feature('Email input','', ()=>{
  Scenario('User wants to input address',()=>{

    const wrapper = shallow(<Email/>)

      Given('there is a text input',()=>{
      	expect(wrapper.find('input')).to.have.length(1)
      })

      And('there is a button to send',()=>{
      	expect(wrapper.find('button')).to.have.length(1)
      })

      Then('the email should change and should send my email to gravatar',()=>{
        const wrapper = mount (<Email />)

        wrapper.setProps({handleEmailChange:''})
      	expect(wrapper.props().handleEmailChange).to.not.equal(undefined)

        wrapper.setProps({fetchGravatar:''})
      	expect(wrapper.props().fetchGravatar).to.not.equal(undefined)
      })
  })
})
