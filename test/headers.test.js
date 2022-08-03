import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block
  it('should access header', async()=>{
    const e = await fixture(html `<loan-header></loan-header>`);
    expect(e).to.be.accessible();
  });
});
