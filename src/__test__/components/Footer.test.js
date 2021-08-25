import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('Probando el componente <Footer />', () => {
  const footer = mount(<Footer />);
  test('Renderizado del componente', () => {
    expect(footer.length).toEqual(1);
  });
  test('Renderizado del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('Comprobar UI del footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
