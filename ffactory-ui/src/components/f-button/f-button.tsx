import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'f-button',
  styleUrl: 'f-button.css',
  shadow: true,
})
export class FButton {

  render() {
    return (
      <Host>
        <button></button>
      </Host>
    );
  }

}
