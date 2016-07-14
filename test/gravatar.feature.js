import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import md5 from 'md5';

import Gravatar from '../lib/gravatar';
import Avatar from '../lib/avatar';
import EmailForm from '../lib/email';


Feature('Gravatar','', ()=>{
  Scenario('user loads page',()=>{
    const wrapper = mount(<Gravatar/>)

    Given('contains an <Avatar/> Componet',()=>{
    	expect(wrapper.find(Avatar)).to.exist
    })
    And('user should see an email form',()=>{
    	expect(wrapper.find(EmailForm)).to.exist
    })
    And('user should see a temp email',()=>{
    	expect(wrapper.state().email).to.equal('someone@example.com')
    })
    And('user should see temp image',()=>{
    	expect(wrapper.state().src).to.equal('http://placehold.it/200x200')
    })

    Scenario('user updates page',()=>{
      const wrapper = mount(<Gravatar/>)

      Given('should update the src state on clicking fetch',()=>{
        wrapper.setState({ email: 'markthethomas@gmail.com' });
        wrapper.find('button').simulate('click');
        expect(wrapper.state('email')).to.equal('markthethomas@gmail.com');
        expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('markthethomas@gmail.com')}?s=200`);
      })


    })
  })
})
