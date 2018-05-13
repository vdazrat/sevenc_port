import React from 'react';
import autobind from 'autobind-decorator';
import PropTypes from 'prop-types';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navigation from '../Components/Navigation';

class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div style={{ height: '100%' }}>
          <Navigation />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default autobind(Layout);
