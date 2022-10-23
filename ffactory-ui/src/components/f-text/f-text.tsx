import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'f-text',
  styleUrl: 'f-text.css',
  shadow: true,
})
export class FText {

  render() {
    return (
      <Host>
        <span></span>
      </Host>
    );
  }

}
