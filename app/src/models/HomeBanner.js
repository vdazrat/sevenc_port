import { observable, action } from 'mobx';

class HomeBanner {
  @observable content = []

  constructor(store) {
    this.store = store;
  }

  @action('fetch-model-HomeBanner')
  fetch() {
    this.content = [
      {
        img: 'https://i.ytimg.com/vi/iwUwTxJ2OmU/maxresdefault.jpg',
        header: 'Summer Collection',
        description: 'exclusive limited edition only',
        id: 1,
      },
      {
        img: 'https://i.pinimg.com/originals/1f/32/9f/1f329ffae2f2d4cf00e270ce21d9392a.jpg',
        header: 'Summer Collection',
        description: 'exclusive limited edition only',
        id: 2,
      },
    ];
  }
}

export default HomeBanner;
