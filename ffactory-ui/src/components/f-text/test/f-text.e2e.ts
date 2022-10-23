import { newE2EPage } from '@stencil/core/testing';

describe('f-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<f-text></f-text>');

    const element = await page.find('f-text');
    expect(element).toHaveClass('hydrated');
  });
});
