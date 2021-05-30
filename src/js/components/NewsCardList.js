export default class NewsCardList{
  constructor(container, card){
    this.container = container;
    this.card = card;
    this.urlToImage = urlToImage;
    this.url = url;
    this.publishedAt = publishedAt;
    this.title = title;
    this.description = description;
    this.source.name = source.name;
  }

  addCard(){
    this.container.appendChild(this.card)
  }

  render(cards){
  cards.forEach((cardData) => {
        this.addCard(cardData.urlToImage, cardData.url, cardData.publishedAt, cardData.title, cardData.description, cardData.source.name)
    })
  }

}