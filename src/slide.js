export class Slide {
	constructor(id) {
		this.slide = document.querySelector(`[data-slide=${id}]`);
		this.items = this.slide.querySelectorAll('[data-slide="list"] > *');
		this.thumb = this.slide.querySelector('[data-slide="thumb"]');
		this.init();
	}
	activeSlide(index) {
		this.active = index;
		this.items.forEach(item => item.classList.remove('active'));
		this.items[index].classList.add('active');
		this.thumbItems.forEach(item => item.classList.remove('active'));
		this.thumbItems[index].classList.add('active');
		this.autoSlide();
	}
	prev() {
		if (this.active > 0) {
			this.activeSlide(this.active - 1);
		} else {
			this.activeSlide(this.items.length - 1);
		}
	}
	next() {
		if (this.active < this.items.length - 1) {
			this.activeSlide(this.active + 1);
		} else {
			this.activeSlide(0);
		}
	}
	addNavigation() {
		const prevBtn = this.slide.querySelector('[data-slide="prev"]');
		const nextBtn = this.slide.querySelector('[data-slide="next"]');

		prevBtn.addEventListener('click', this.prev);
		nextBtn.addEventListener('click', this.next);
	}
	addThumbItens() {
		this.items.forEach(() => (this.thumb.innerHTML += '<div></div>'));
		this.thumbItems = [...this.thumb.children];
	}
	autoSlide() {
		clearTimeout(this.timeout);
		this.timeout = setTimeout(this.next, 5000);
	}
	init() {
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
		this.addThumbItens();
		this.activeSlide(0);
		this.addNavigation();
	}
}

