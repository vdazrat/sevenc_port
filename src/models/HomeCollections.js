import { observable, action } from 'mobx';

class HomeCollections {
  @observable content = []

  constructor(store) {
    this.store = store;
  }

  @action('fetch-model-HomeCollections')
  fetch() {
    this.content = [
      {
        img: 'https://thumbs.dreamstime.com/b/vogue-high-fashion-28134256.jpg',
        title: 'Summer seven cherry exclusive Collection',
        subtitle: 'Tribal exotic pieces of gems',
        id: 1,
      },
      {
        img: 'https://thumbs.dreamstime.com/b/autumn-winter-collection-lady-s-clothes-17856183.jpg',
        title: 'Winter is coming',
        subtitle: 'Exclusive GOT themed jewelley',
        id: 2,
      },
      {
        img: 'https://thumb1.shutterstock.com/display_pic_with_logo/120493/309307358/stock-photo-fringe-or-lace-tapes-and-silk-trimmings-with-gold-brass-scissors-and-old-sewing-machine-bobbins-309307358.jpg',
        title: 'Spring 2018',
        subtitle: 'Euro influences on NE',
        id: 3,
      },
    ];
  }
}

export default HomeCollections;
