import React from 'react';
import { mount } from 'enzyme';
import { StoreConnector } from 'hadron-react-components';
import PreferencesPlugin from './plugin';

describe('Preferences [Plugin]', () => {
  let component;

  beforeEach((done) => {
    component = mount(<PreferencesPlugin />);
    done();
  });

  afterEach((done) => {
    component = null;
    done();
  });

  it('should contain a <StoreConnector /> with a store prop', function() {
    expect(component.find(StoreConnector).first().props('store')).to.be.an('object');
  });
});
