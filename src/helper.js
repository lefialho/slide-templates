export const slides = {
  template01(img, texts) {
    const $slide = document.querySelector('[data-slide="slide"]');
    $slide.innerHTML = `
      <section class="template1" data-slide="template01">
        <figure class="slide-image">
          <img src="${img}" alt="">
        </figure>
        <div class="slide-content" data-slide="slide-content">
          <div class="slide-thumb" data-slide="thumb"></div>
          <ul class="slide-list" data-slide="list">
            ${slideTexts(texts)}
          </ul>
          <nav class="slide-nav">
            <button class="slide-prev" data-slide="prev">
              <figure class="arrow arrow-left">
                ${arrowIcon()}
              </figure>
            </button>
            <button class="slide-next" data-slide="next">
              <figure class="arrow arrow-right">
                ${arrowIcon()}
              </figure>
            </button>
          </nav>
        </div>
      </section>`;
  },
  template02(data) {
    const $slide = document.querySelector('[data-slide="slide"]');
    $slide.innerHTML = `
      <section class="template2" data-slide="template02">
        <div class="slide-content" data-slide="slide-content">
          <div class="slide-thumb" data-slide="thumb"></div>
          <ul class="slide-list" data-slide="list">
            ${slideImageAndTexts(data)}
          </ul>
          <nav class="slide-nav">
            <button class="slide-prev" data-slide="prev">
              <figure class="arrow arrow-left">
                ${arrowIcon()}
              </figure>
            </button>
            <button class="slide-next" data-slide="next">
              <figure class="arrow arrow-right">
                ${arrowIcon()}
              </figure>
            </button>
          </nav>
        </div>
      </section>`;
  },
  template03(img, texts) {
    const $slide = document.querySelector('[data-slide="slide"]');
    $slide.innerHTML = `
      <section class="template3" data-slide="template03">
        <figure class="slide-image">
          <img src="${img}" alt="">
        </figure>
        <div class="slide-content" data-slide="slide-content">
          <div class="slide-thumb" data-slide="thumb"></div>
          <ul class="slide-list" data-slide="list">
            ${slideTexts(texts)}
          </ul>
          <nav class="slide-nav">
            <button class="slide-prev" data-slide="prev">
              <figure class="arrow arrow-left">
                ${arrowIcon()}
              </figure>
            </button>
            <button class="slide-next" data-slide="next">
              <figure class="arrow arrow-right">
                ${arrowIcon()}
              </figure>
            </button>
          </nav>
        </div>
      </section>`;
  },
  template04(data) {
    const $slide = document.querySelector('[data-slide="slide"]');
    $slide.innerHTML = `
      <section class="template4" data-slide="template04">
        <div class="slide-content" data-slide="slide-content">
          <div class="slide-thumb" data-slide="thumb"></div>
          <ul class="slide-list" data-slide="list">
            ${slideImageAndTextsHorizontal(data)}
          </ul>
          <nav class="slide-nav">
            <button class="slide-prev" data-slide="prev">
              <figure class="arrow arrow-left">
                ${arrowIcon()}
              </figure>
            </button>
            <button class="slide-next" data-slide="next">
              <figure class="arrow arrow-right">
                ${arrowIcon()}
              </figure>
            </button>
          </nav>
        </div>
    </section>`;
  }
}

function slideTexts(texts) {
  return texts.map(text => `
    <li class="slide-list-item">
      <div>
        <h1 class="slide-list-title">${text.title}</h1>
        <p class="slide-list-text">${text.text}</p>
      </div>
    </li>`).join('');
};

function slideImageAndTexts(data) {
  return data.map(item => `
    <li class="slide-list-item">
      <figure class="slide-image">
        <img src="${item.img}" alt="${item.alt}">
      </figure>
      <div class="slide-list-content">
        <h1 class="slide-list-title">${item.title}</h1>
        <p class="slide-list-text">${item.text}</p>
      </div>
    </li>`).join('');
};

function slideImageAndTextsHorizontal(data) {
  return data.map(item => `
    <li class="slide-list-item">
      <figure class="slide-image">
        <img src="${item.img}" alt="${item.alt}">
      </figure>
      <div class="slide-list-content">
        <h1 class="slide-list-title">${item.title}</h1>
        <p class="slide-list-text">${item.text}</p>
      </div>
    </li>`).join('');
};

function arrowIcon() {
  return `
    <svg class="icon" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 6L9 12L15 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}