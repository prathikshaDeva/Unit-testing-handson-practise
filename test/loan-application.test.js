import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
  it('should access Loan app', async()=>{
    const e = await fixture(html `<loan-application></loan-application>`);
    expect(e).to.be.accessible();
  });

  it('should increment the count', async()=>{
    const e = await fixture(html `<loan-application .counter=${3}></loan-application>`);
    e.__increment();  
    expect(e.counter).to.equal(4);
  })


})
