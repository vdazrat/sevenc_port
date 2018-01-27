import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ShoppingBasket from 'material-ui/svg-icons/action/shopping-basket';
import autobind from 'autobind-decorator';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBar: {
    background: 'white',
    height: '8vh',
  },
  title: {
    textAlign: 'center',
  },
});

class NavMobile extends React.PureComponent {
  state = { open: false }
  toggleDrawer() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div>
        <AppBar
          className={css(styles.appBar)}
          title={<div className={css(styles.title)}>Sevencherry</div>}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={<IconButton><ShoppingBasket /></IconButton>}
          onLeftIconButtonClick={() => { this.toggleDrawer(); }}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default autobind(NavMobile);
