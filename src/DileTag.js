import { html, css, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

export class DileTag extends LitElement {

  constructor() {
    super();
    this.label = '';
    this.icon = '';
    this.round = false;
    this.shadow = false;
    this.upper = false;
    this.allowClose = false;
  }

  static get properties() {
    return {
      label: { type: String },
      icon: { type: String },
      round: { type: Boolean },
      shadow: { type: Boolean },
      upper: { type: Boolean },
      allowClose: { type: Boolean, attribute: 'allow-close' }
    };
  }

  static get styles() {
    return css`
      div {
        display: inline-flex;
        align-items: center;
        background: var(--dile-tag-background, #ddd);
        padding: var(--dile-tag-padding, 0.5rem);
        margin: 0.1rem;
        color: var(--dile-tag-text-color, #000);
      }

      .round { border-radius: 0.5rem; }
      .shadow { box-shadow: 1px 1px 15px 3px rgba(221,221,221,1); }
      .upper { text-transform: uppercase; }

      img {
        display: inline-block;
        width: 2rem;
        min-width: 2rem;
        heigth: 2rem;
        border-radius: 100%;
        margin-right: var(--dile-tag-padding, 0.5rem);
      }

      button {
        border: 0;
        background: transparent;
        margin-left: var(--dile-tag-padding, 0.5rem);
      }

      button:hover {
        cursor: pointer;
      }
    `;
  }

  render() {
    return html`
      <div class=${classMap({ round: this.round, shadow: this.shadow })}>
        ${this.icon
          ? html`<img src="${this.icon}" alt="${this.label}">`
          : html``}
        <span class=${classMap({ upper: this.upper })}>${this.label}</span>
        ${this.allowClose
          ? html`<button type="button" @click="${this.onClose}">x</button>`
          : html``}
      </div>
    `;
  }

  onClose() {
    this.dispatchEvent(new CustomEvent('closed'));
  }

}
