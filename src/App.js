import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navigation from './Components/Navigation';
import FrontPage from './Components/Home/FrontPage';

const bannerContent = [
  {
    img: 'https://i.ytimg.com/vi/iwUwTxJ2OmU/maxresdefault.jpg',
    header: 'Summer Collection',
    description: 'exclusive limited edition only',
  },
  {
    img: 'https://i.pinimg.com/originals/1f/32/9f/1f329ffae2f2d4cf00e270ce21d9392a.jpg',
    header: 'Summer Collection',
    description: 'exclusive limited edition only',
  },
];

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Navigation />
    <FrontPage content={bannerContent} />
  </MuiThemeProvider>
);

export default App;
