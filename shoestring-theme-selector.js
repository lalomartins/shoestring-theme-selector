/**
 * @license
 * Copyright 2032 Lalo Martins
 * SPDX-License-Identifier: BSD-3-Clause
 */
import {LitElement, css, html} from 'lit';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

/**
 * A web component for pagination that uses Shoelace buttons for consistent UI.
 *
 * @element shoestring-pagination
 *
 * @dependency sl-button
 * @dependency sl-icon-button
 * @dependency sl-visually-hidden
 *
 * @attr {Number} current - The current page
 * @attr {Number} total - Total number of items
 * @attr {Number} [page-size=10] - How many items are in a page
 * @attr {Number} [surrounding-pages=2] - How many pages to display before and after current at most
 * @attr {Boolean} hide-on-single-page - If set, and all items fit in one page, hide the element
 *
 * @fires page-change - Indicates when the page changes; value is in `event.detail.page`
 */
export class ThemeSelector extends LitElement {
  static properties = {
    isDark: {state: true},
  };

  static styles = css`
    :host {
      display: block;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.systemDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.origDarkMode =
      document.documentElement.classList.contains('sl-theme-dark');
    this.origLightMode =
      document.documentElement.classList.contains('sl-theme-light');
    document.documentElement.classList.delete('sl-theme-light');
    if (this.origDarkMode && this.origLightMode) {
      if (!this.systemDarkMode)
        document.documentElement.classList.delete('sl-theme-dark');
    } else if (!this.origDarkMode && !this.origLightMode) {
      if (this.systemDarkMode)
        document.documentElement.classList.add('sl-theme-dark');
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.origDarkMode)
      document.documentElement.classList.add('sl-theme-dark');
    else document.documentElement.classList.delete('sl-theme-dark');
    if (this.origLightMode)
      document.documentElement.classList.add('sl-theme-light');
    else document.documentElement.classList.delete('sl-theme-light');
  }

  _updateMode(event) {
    this.isDark = event.target.checked;
    if (this.isDark) {
      document.documentElement.classList.add('sl-theme-dark');
    } else {
      document.documentElement.classList.remove('sl-theme-dark');
    }
  }

  render() {
    return html`<sl-switch
      size="small"
      ?checked=${this.isDark}
      @sl-change=${this._updateMode}
    >
      <sl-icon name="moon"></sl-icon>
    </sl-switch>`;
  }
}
customElements.define('theme-selector', ThemeSelector);
