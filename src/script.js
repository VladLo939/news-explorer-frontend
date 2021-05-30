import "./pages/index.css"
import Popup from "../src/js/components/popup"
import HeaderMobileMenu from "./js/components/HeaderMobile";
import ValidateForm from "./js/components/validateform";
import NewsApi from "./js/components/NewsApi";
import { from, to } from "./js/components/utils";
import Card from "./js/components/Card";
import NewsCardList from "./js/components/NewsCardList";


const registrationPopup = document.querySelector('#reg-popup');
const enterPopup = document.querySelector('.popup');
const authButton = document.querySelectorAll('.menu-nav__auth-button');
const enterButton = document.querySelector('#enter-button');
const regPopupButton = document.querySelector('#reg-button');
const mobileMenuButton = document.querySelector('.header__mobile-button');
const mobileMenu = document.querySelector('.header__mobile-menu');
const closeMobleMenu = document.querySelector('.close_mobile');
const searchFieldButton = document.querySelector('.search-field');
const searchResultCardList = document.querySelector('.search-result__cards-list');
const searchResult = document.querySelector('.search-result__cards');
const showMoreButton = document.querySelector('.search-result__more-button');
const registrationForm = document.forms.registration
const enterForm = document.forms.enter
const searchForm = document.forms.searchForm
//инпуты формы
const { search } = searchForm.elements
//значение интупа поиска
let topic = search.value;
const apiKey = 'a62edd64ddbb4c628079a3a347b0f434'
const newsApiUrl = 'https://nomoreparties.co/news/v2/everything'

const regPopupToggle = new Popup(registrationPopup);
const enterPopupToggle = new Popup(enterPopup)
const mobileMenuToggle = new HeaderMobileMenu(mobileMenu)
const regForm = new ValidateForm(registrationPopup)
const news = new NewsApi(newsApiUrl, from, to, apiKey)
const card = new Card()

//Открыть попап решистрации
authButton.forEach((element) => {
  element.addEventListener("click", () => {
    regPopupToggle.open()
  });
});

// Открыть попап авторизации
enterButton.addEventListener('click', function(){
  regPopupToggle.close()
  enterPopupToggle.open()
})

//открыть попап решистрации в попапе авторизации
regPopupButton.addEventListener('click', function(){
  enterPopupToggle.close()
  regPopupToggle.open()
})

//открыть мобильное меню
mobileMenuButton.addEventListener('click', function(){
  mobileMenuToggle.openMenu()
})

//закрыть мобильное меню
closeMobleMenu.addEventListener('click', function(){
  mobileMenuToggle.closeMenu()
})

//валидация формы регистрации
registrationForm.addEventListener('input', function(event){
  regForm.handlerInputForm(event)
  regForm.resetErrors
})

function getData(){
  news.getNews(topic)
    .then((res) => console.log(res))
}

//Показать и отрисоваьь карточки при нажалии на кнопку поиска
function showThreeCards(){
  topic = search.value
  news.getNews(topic)
  .then((res) => {
    const articles = res.articles
    localStorage.setItem("cards", JSON.stringify(articles));
      articles.slice(0,3).forEach(cardData => {
      const card = new Card(cardData.urlToImage, cardData.url, cardData.publishedAt, cardData.title, cardData.description, cardData.source.name)
      card.createCard(searchResultCardList)
    })
  })
}


function resetArticles(){
 const cards = document.querySelectorAll('.place-card')
 cards.forEach(card => card.remove())
}


let storedCards = JSON.parse(localStorage.getItem("cards"));

searchFieldButton.addEventListener('submit', (e) => {
  e.preventDefault()
  showThreeCards()
  resetArticles()
});

//выводит 3 элемента из массива
function showArray(array) {
  let currentIndex = 0;
  let currentLimit = 3;
  let result = []
  currentLimit += currentIndex;
  for (currentIndex; currentIndex < currentLimit && currentIndex < array.length; currentIndex++) {
   return result = array[currentIndex];
  };
}

showMoreButton.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(storedCards)
});

//загрузка предыдущего результата поиска при обновлении страницы
function loadPrevious(storedcards){
  if (storedcards === null){
    console.log('Нет данных')
  }
  else storedCards.slice(0, 3).forEach(cardData => {
    const card = new Card(cardData.urlToImage, cardData.url, cardData.publishedAt, cardData.title, cardData.description, cardData.source.name)
    card.createCard(searchResultCardList)
  })
}

window.onload = loadPrevious(storedCards)




/*.then((res) => {
  const initCards = res.forEach(cardData => {
    const card = new Card(cardData.urlToImage, cardData.url, cardData.publishedAt, cardData.title, cardData.description, cardData.source)
    cardElement = card.createCard();
    return cardElement;
  })
  const serverCardList = new CardList(searchResultCardList, initCards)
  serverCardList.render()
})*/



