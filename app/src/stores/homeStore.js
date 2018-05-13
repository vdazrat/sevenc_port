import { observable, action, toJS } from 'mobx';
import HomeBanner from '../models/HomeBanner';
import HomeCategories from '../models/HomeCategories';
import HomeCollections from '../models/HomeCollections';

class HomeStore {
  @observable homeBanner = null
  @observable homeCategories = null
  @observable homeCollections = null

  @action('setting-up-model-banner')
  setupBanner() {
    this.homeBanner = new HomeBanner(this);
    this.homeBanner.fetch();
  }
  @action('setting-up-model-categories')
  setupCategories() {
    this.homeCategories = new HomeCategories(this);
    this.homeCategories.fetch();
  }
  @action('setting-up-model-collections')
  setupCollections() {
    this.homeCollections = new HomeCollections(this);
    this.homeCollections.fetch();
  }
  setupModels() {
    this.setupBanner();
    this.setupCategories();
    this.setupCollections();
  }
  tojs() {
    return {
      homeBanner: toJS(this.homeBanner),
      homeCategories: toJS(this.homeCategories),
      homeCollections: toJS(this.homeCollections),
    };
  }
}

const self = new HomeStore();
self.setupModels();

export default self;
