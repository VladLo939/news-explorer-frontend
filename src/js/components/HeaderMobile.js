export default class HeaderMobileMenu{
  constructor(menu){
    this.menu = menu;
  }

  openMenu(){
    this.menu.classList.add('header__mobile-menu_is-opened')
  }

  closeMenu(){
    this.menu.classList.remove('header__mobile-menu_is-opened')
  }

}