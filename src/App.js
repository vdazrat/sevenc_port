import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navigation from './Components/Navigation';
import FrontPage from './Components/Home/FrontPage';
import Collections from './Components/Home/Collections';
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
const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
      <Navigation />
      <FrontPage content={bannerContent} />
      <MainBody>
        <Section name="Collections">
          <Collections collections={collectionsContent} />
        </Section>
      </MainBody>
    </div>
  </MuiThemeProvider>
);

export default App;
