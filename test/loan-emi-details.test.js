import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  // Write test cases inside this block

  it('should access loanemi-details', async()=>{
    // const e = await fixture(html `<loanemi-details ._data=${_data}></loanemi-details>`);
    // console.log(e._data);
    // expect(e).to.be.accessible();
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
});




