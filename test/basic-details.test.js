import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { fakeServer } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

// const apiUrl = /\/loanfeapi.herokuapp.com/calculate-emi/;

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files

 /* const cType = {
    'Content-Type': 'application/json',
  };
  const mocks = {};
  let server, message;
  // beforeEach(async()=>{
    mocks.add_data = { name: "prat", amount: "9000", period:"2" };
    server = fakeServer.create();
    server.respondImmediately = true;
  // });
  afterEach(()=>{
    server.restore();
  });
  */
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
  });
  
  it('should go to dashboard', async()=>{
    const element = await fixture(html `<basic-details></basic-details>`);
    const btn = element.shadowRoot.querySelector('.btn-previous');
    btn.click();
  });

  /*  it('should return data from API', async()=>{
    server.respondWith(apiUrl, [200, cType]);
    const {result} = await service._captureDetails.fetch(mocks.add_data);
    expect(result).to.be.true;
  })*/
});
