import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  // Write test cases inside this block

  xit('should access loanemi-details', async()=>{
    var _data = {
      "interestRate": 10,
      "monthlyEMI": 2,
      "principal": 1000,
      "interest": 3,
      "totalAmount": 2000
    };
    const e = await fixture(html `<loanemi-details ._data=${_data}></loanemi-details>`);
    console.log(e);
  });

  xit('should check for method', async()=>{
    const e = await fixture(html `<loanemi-details></loanemi-details>`);
    const spy = Sinon.spy(e,'_toBasicDetails');
    const btn = e.shadowRoot.querySelector('lion-button')[0];
    btn.click();
    expect(spy.called).to.be.true;
  })
});




