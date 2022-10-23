import { newSpecPage } from '@stencil/core/testing';
import { FText } from '../f-text';

describe('f-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FText],
      html: `<f-text></f-text>`,
    });
    expect(page.root).toEqualHtml(`
      <f-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </f-text>
    `);
  });
});
