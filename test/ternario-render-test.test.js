import { html, fixture, expect, assert } from '@open-wc/testing';
import '../src/ternario-render';

describe('ternario render component', () => {

  let el;

  beforeEach( async () => {
    el = await fixture(html`<ternario-render></ternario-render>`);
  });

  it('propertie value is type of Boolean', async () => {
    //const el = await fixture(html`<ternario-render></ternario-render>`);
    assert.typeOf(el.value, 'boolean');
  });

  it('propertie text is type of String', async () => {
    assert.typeOf(el.text, 'string');
  });

  it('propertie "textLang" is length 2', async () => {
    expect(el).have.property('textLang').with.lengthOf(2);
  });

  it('text paragraph is "Hola, buenos días"', async () => {
    const p = el.shadowRoot.querySelector('.text');
    expect(p.textContent).to.equal('¡Hola, buenos días!');
  });

  it('propertie textLang is "ES" after button clicked', async () => {
    el.shadowRoot.querySelector('button').click();
    await el.updateComplete;
    expect(el.textLang).to.equal('ES');
  });

  it('propertie text is "Hello, good mornig!" after button clicked', async () => {
    el.shadowRoot.querySelector('button').click();
    await el.updateComplete;
    expect(el.text).to.equal('Hello, good mornig!');
  });

});
