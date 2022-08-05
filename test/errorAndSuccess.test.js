import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block
  it('should access success screen', async()=>{
    const e = await fixture(html `<loan-success></loan-success>`);
    expect(e).to.be.accessible();
  });

  it('should go to home on button click', async ()=>{
    const element = await fixture(html `<loan-success></loan-success>`);
    const btn = element.shadowRoot.querySelector('lion-button');
    btn.click();
  });
});

describe('error screen', () => {
  // Write test cases inside this block
  it('should access error screen', ()=>{
    const e = fixture(html `<loan-error></loan-error>`);
    expect(e).to.be.accessible();
  });

  it('should go to home on button click', async ()=>{
    const element = await fixture(html `<loan-error></loan-error>`);
    const btn = element.shadowRoot.querySelector('lion-button');
    btn.click();
  });
});
