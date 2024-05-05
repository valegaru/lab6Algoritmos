import { Song } from './types/songs';
import Firebase from './services/firebase';

import { Songs } from './components/export';
import { AttributeSong } from './components/Song/Song';

const formData: Omit<Song, 'id'> = {
	image: '',
	title: '',
	autor: '',
	album: '',
	duration: '',
	date_added: '',
};
class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	submitForm() {
		console.log(formData);
		Firebase.addSong(formData);
	}

	changeImage(e: any) {
		formData.image = e?.target?.value;
	}

	changeTitle(e: any) {
		formData.title = e?.target?.value;
	}

	changeAutor(e: any) {
		formData.autor = e?.target?.value;
	}

	changeAlbum(e: any) {
		formData.album = e?.target?.value;
	}

	changeDate(e: any) {
		formData.date_added = e?.target?.value;
	}

	changeDuration(e: any) {
		formData.duration = e?.target?.value;
	}

	async render() {
		const title = this.ownerDocument.createElement('h1');
		title.innerText = 'Añade la canción';
		this.shadowRoot?.appendChild(title);

		const pImage = this.ownerDocument.createElement('input');
		pImage.placeholder = 'url';
		pImage.addEventListener('change', this.changeImage);
		this.shadowRoot?.appendChild(pImage);

		const ptitle = this.ownerDocument.createElement('input');
		ptitle.placeholder = 'titulo';
		ptitle.addEventListener('change', this.changeTitle);
		this.shadowRoot?.appendChild(ptitle);

		const pautor = this.ownerDocument.createElement('input');
		pautor.placeholder = 'autor';
		pautor.addEventListener('change', this.changeAutor);
		this.shadowRoot?.appendChild(pautor);

		const palbum = this.ownerDocument.createElement('input');
		palbum.placeholder = 'album';
		palbum.addEventListener('change', this.changeAlbum);
		this.shadowRoot?.appendChild(palbum);

		const pdate = this.ownerDocument.createElement('input');
		pdate.placeholder = 'date';
		pdate.addEventListener('change', this.changeDate);
		this.shadowRoot?.appendChild(pdate);

		const pduration = this.ownerDocument.createElement('input');
		pduration.placeholder = 'duration';
		pduration.addEventListener('change', this.changeDuration);
		this.shadowRoot?.appendChild(pduration);

		const save = this.ownerDocument.createElement('button');
		save.innerText = 'Guardar';
		save.addEventListener('click', this.submitForm);
		this.shadowRoot?.appendChild(save);

		const songs = await Firebase.getSongs();
		songs.forEach((p: Song) => {
			const card = this.ownerDocument.createElement('my-song') as Songs;
			card.setAttribute(AttributeSong.image, p.image);
			card.setAttribute(AttributeSong.utitle, p.title);
			card.setAttribute(AttributeSong.autor, p.autor);
			card.setAttribute(AttributeSong.album, p.album);
			card.setAttribute(AttributeSong.date_added, p.date_added);
			card.setAttribute(AttributeSong.duration, p.duration);
			this.shadowRoot?.appendChild(card);
		});
	}
}

customElements.define('app-container', AppContainer);
