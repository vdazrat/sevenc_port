import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navigation from './Components/Navigation';
import FrontPage from './Components/Home/FrontPage';
import Collections from './Components/Home/Collections';
import Categories from './Components/Home/Categories';
import Section from './Components/Home/Section';
import MainBody from './Components/Home/MainBody';

const bannerContent = [
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
const collectionsContent = [
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
const categoriesContent = [
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
const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div style={{ height: '100%' }}>
      <Navigation />
      <FrontPage content={bannerContent} />
      <MainBody>
        <Section name="Collections">
          <Collections collections={collectionsContent} />
        </Section>
        <Section name="Categories">
          <Categories categories={categoriesContent} />
        </Section>
      </MainBody>
    </div>
  </MuiThemeProvider>
);

export default App;
