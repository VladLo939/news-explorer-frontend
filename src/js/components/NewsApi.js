export default class NewsApi{
  constructor(newsApiUrl, from, to, apiKey){
    this.newsApiUrl = newsApiUrl;
    this.from = from;
    this.to = to;
    this.apiKey = apiKey
  }

  getNews(topic){
    return fetch(
      `${this.newsApiUrl}?q=${topic}&from=${this.from}&to=${this.to}&sortBy=date&language=ru&pageSize=9&apiKey=${this.apiKey}`,
    ).then((res) => {
      return res.json();
    })
  }

}