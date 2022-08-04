import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block
  it('should access header', async()=>{
    const e = await fixture(html `<loan-header></loan-header>`);
    expect(e).to.be.accessible();
  });


  it('should select en-GB', async()=>{
    const e = await fixture(html `<loan-header></loan-header>`);
    const spy = Sinon.spy(e, 'localeChanged');
    const btn = e.shadowRoot.querySelector('#en-GB');
    btn.setAttribute('class', 'btn-cursor');
    btn.click();
    e.localeChanged({target :{id : 'en-GB'}});
    expect(spy).to.have.been.called;
  });

  it('should select nl-NL', async()=>{
    const e = await fixture(html `<loan-header></loan-header>`);
    const spy = Sinon.spy(e, 'localeChanged');
    const btn = e.shadowRoot.querySelector('#nl-NL');
    btn.setAttribute('class', 'btn-cursor');
    btn.click();
    e.localeChanged({target :{id : 'nl-NL'}});
    expect(spy).to.have.been.called;
  });

});
