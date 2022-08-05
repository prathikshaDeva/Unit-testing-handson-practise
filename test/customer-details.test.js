import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block
  it("should access customer details", async()=>{
    const e = await fixture(html `<customer-details></customer-details>`);
    expect(e).to.be.accessible();
  });

  it('should submit', async()=>{
    const element = await fixture(html `<customer-details></customer-details>`);
    const btn = element.shadowRoot.querySelector('#nextbtn');
    btn.click();
  });

});


