export default class Card{
  constructor(urlToImage, url, publishedAt, title, description, source){
    this.urlToImage = urlToImage;
    this.url = url;
    this.publishedAt = publishedAt;
    this.title = title;
    this.description = description;
    this.source = source;
  }

  createCard(element){
    element.insertAdjacentHTML('beforeend', `<div class="place-card">
    <div class="place-card__image-container">
      <img class="place-card__image" src="${this.urlToImage}" alt="картинка">
      <button class="icon place-card__bookmark-icon"></button>
    </div>
    <a class="link place-card__link" href="${this.url}">
    <div class="place-card__description">
      <p class="place-card__date">${this.publishedAt}</p>
      <h3 class="place-card__title">${this.title}</h3>
      <p class="place-card__subtitle">${this.description}</p>
      <p class="place-card__source">${this.source}</p>
    </div>
    </a>
    </div>`)

    const cardImage = document.querySelector('.place-card__image')
    const cardUrl = document.querySelector('.place-card__link')
    const cardDate = document.querySelector('.place-card__date')
    const cardTitle = document.querySelector('.place-card__title')
    const cardSubtitle = document.querySelector('.place-card__subtitle')
    const cardSource = document.querySelector('.place-card__source')

    /*cardImage.style.backgroundImage = `url(${this.urlToImage})`;
    cardUrl.href = `http://${this.url}`;
    cardDate.textContent = this.publishedAt;
    cardTitle.textContent = this.title;
    cardSubtitle.textContent =  this.description;
    cardSource.textContent = this.source;*/

  }

}