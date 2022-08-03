import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  it("should access basic details", async()=>{
    const e = await fixture(html `<basic-details></basic-details>`);
    expect(e).to.be.accessible();
  })
});
