import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';


describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  
  it('should access basic details', async()=>{
    const e = await fixture(html `<basic-details></basic-details>`);
    expect(e).to.be.accessible();
  });

  it('should convert num to word', async () =>{
    const element = await fixture(html` <basic-details></basic-details> `);
    const spy = Sinon.spy(element, '_numToWord');
    const amount = element.shadowRoot.querySelector('lion-input-amount');
    amount.modelValue = 1000;
    element._numToWord();
    expect(spy).to.have.calledOnce;
  });

  it('should capture on button click', async()=>{
    const element = await fixture(html` <basic-details></basic-details> `);
    const amount = element.shadowRoot.querySelector('lion-input-amount');
    amount.modelValue = 1000;
    const spy = Sinon.spy(element, '_captureDetails');
    const btn = element.shadowRoot.querySelector('.btn-next');
    btn.click();  
    element._captureDetails();
    expect(spy).to.have.been.called;
  })
});
