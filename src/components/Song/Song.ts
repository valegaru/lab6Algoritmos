export enum AttributeSong {
	'image' = 'image',
	'utitle' = 'utitle',
	'autor' = 'autor',
	'album' = 'album',
	'date_added' = 'date_added',
	'duration' = 'duration',
}

export default class Song extends HTMLElement {
	image?: string;
	utitle?: string;
	autor?: string;
	album?: string;
	date_added?: string;
	duration?: string;

	static get observedAttributes() {
		const attrs: Record<AttributeSong, null> = {
			image: null,
			utitle: null,
			autor: null,
			album: null,
			date_added: null,
			duration: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propname: AttributeSong, oldValue: string | undefined, newValue: string | undefined) {
		switch (propname) {
			default:
				this[propname] = newValue;
				break;
		}
	}
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `<section>
  <image
   src='${this.image}'></image>
  <b></b><p>${this.utitle}</p>
<p>${this.autor}</p>
<p>Album:${this.album}</p>
<p>Date added: ${this.date_added}</p>
<p>duration:${this.duration}</p>
  </section>
`;
		}
	}
}

customElements.define('my-song', Song);
