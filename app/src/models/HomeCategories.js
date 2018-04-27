import { observable, action } from 'mobx';

class HomeCategories {
  @observable content = []

  constructor(store) {
    this.store = store;
  }

  @action('fetch-model-HomeCategories')
  fetch() {
    this.content = [
      {
        img: 'https://www.moma.org/d/assets/W1siZiIsIjIwMTcvMDkvMTUvODN0bXlrZmJ1Zl9tb21hX2l0ZW1zX21vZ2lfMS5qcGciXSxbInAiLCJjb252ZXJ0IiwiLXJlc2l6ZSAxMDI0eDEwMjRcdTAwM2UiXV0/moma_items_mogi_1.jpg?sha=93fc7685a9fc5a27',
        title: 'Earrings',
        subtitle: 'Tribal exotic pieces of gems',
        featured: true,
        id:1,
      },
      {
        img: 'https://thumb1.shutterstock.com/display_pic_with_logo/2693941/569938747/stock-photo-fashion-woman-in-trendy-spring-summer-dress-stylish-wavy-hairstyle-fashion-sunglasses-summer-569938747.jpg',
        title: 'Hats',
        subtitle: 'Tribal exotic pieces of gems',
        id:2,
      },
      {
        img: 'http://meow.blabbercat.com/images/res/article/steps-to-level-up-your-fashion-game-630.jpg',
        title: 'Neclaces',
        subtitle: 'Tribal exotic pieces of gems',
        id:3,
      },
      {
        img: 'https://static.pexels.com/photos/285171/pexels-photo-285171.jpeg',
        title: 'Bracelets',
        subtitle: 'Tribal exotic pieces of gems',
        featured: true,
        id:4,
      },
      {
        img: 'https://www.ieseg.fr/wp-content/uploads/2012/03/img-une-fashion-business.jpg',
        title: 'Beaded',
        subtitle: 'Tribal exotic pieces of gems',
        id:5,
      },
      {
        img: 'https://i2.wp.com/www.vervemagazine.in/wp-content/uploads/2014/01/Helena-Bajaj-Larsen-Khadi.jpg?fit=1020%2C660',
        title: 'Metallic',
        subtitle: 'Tribal exotic pieces of gems',
        id:6,
      },
    ];
  }
}

export default HomeCategories;
