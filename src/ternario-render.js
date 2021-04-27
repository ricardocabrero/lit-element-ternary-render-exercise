import { html, LitElement, css } from 'lit-element';

class TernarioRender extends LitElement {
    
    static get properties() {
        return {
            value: { type: Boolean },
            text: { type: String },
            textLang: { type: String },
        }
    }

    static get styles() {
        return css`
        :host {
            font-family: Arial, Helvetica, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        p {
            font-size: 14px;
            max-width: 600px;
            line-height: 16px;
        }
        img {
            width: 375px;
            margin-top: 20px;
            height: auto; 
            display: block;
        }
        `
    }

    constructor() {
        super();
        this.value = true;
    }

    handleClick() {
        this.value = !this.value;
    }

    render() {
        this.value 
        ? (this.text = '¡Hola, buenos días!', this.textLang = 'EN') 
        : (this.text = 'Hello, good mornig!', this.textLang = 'ES');
        
        return html`
        <p><strong>Ejercicio:</strong> definir una propiedad type Boolean y dos propiedades tipo String.
        Mediante un botón hacer un "toggle" de la propiedad booleana para mostrar dos textos distintos en cada
        una de las propiedades tipo String mediante un condicional ternario.
        </p>
        <p class="text">${this.text}</p>
        <button @click=${this.handleClick}>${this.textLang}</button>
        <img src="./src/img/screen01.png">
        `
    }
}

customElements.define('ternario-render', TernarioRender);