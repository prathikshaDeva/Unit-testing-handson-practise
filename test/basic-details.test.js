import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
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
    await element.shadowRoot.querySelector('#amount').setAttribute('modelValue', 199999);
    setTimeout(() => {
      change
    }, 1000);
    expect(element._numToWord).to.be.string;


    // const listener = oneEvent(element, 'keyup');
    // element.shadowRoot.querySelector('#amount').keyup();
    // const { detail } = await listener;
    // expect(detail).to.equal('expected value');


  });

  it('should capture on button click', async()=>{
    const element = await fixture(html` <basic-details></basic-details> `);
    // const clickButton = () => element.shadowRoot.querySelector('.btn-prev-nxt-parent.btn-next').click();
    // setTimeout(clickButton);
    // const clickButton = element.shadowRoot.querySelector('.btn-prev-nxt-parent.btn-next').addEventListener('click', onClick, false);
    // element.shadowRoot.querySelector('.btn-prev-nxt-parent.btn-next').onclick = () => { 
    //   //...
    // };

    const clickButton = () => {
      element.shadowRoot.querySelector('.btn-prev-nxt-parent.btn-next').addEventListener("click", function() {
        expect(element._captureDetails()).to.be.accessible();
      });
    };

  })
});
