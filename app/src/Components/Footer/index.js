import React from 'react';
import autobind from 'autobind-decorator';
import FlatButton from 'material-ui/FlatButton';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  footer: {
    background: 'black',
    color: 'white',
    paddingTop: '4vh',
    textAlign: 'center',
  },
  newsLetter: {
    textAlign: 'center',
  },
  newsHeader: {
    fontSize: '5vw',
  },
  newsBody: {
    marginTop:'1.5vh',
    fontSize: '3vw',
    maxWidth: '65vw',
    display: 'inline-block',
  },
  divider: {
    marginTop:'4vh',
    marginBottom: '4vh',
    width: '65vw',
    display: 'inline-block',
    borderBottom: '2px solid white',
  },
  subscribe: {
    border: '1px solid white',
  },
  CopyRights: {
    marginTop:'4vh',
    paddingBottom: '4vh',
    fontSize: '3vw',
  },
  flexRows: {
    marginTop:'4vh',
    marginBottom: '4vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  flowingSections: {
    '@media (max-width: 600px)': {
      marginBottom: '4vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    '@media (min-width: 601px)': {
      marginTop:'4vh',
      marginBottom: '4vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

  },
  sectionWidth: {
    width: '25vw',
    marginTop:'4vh',
  },
  sectionHeight: {
    height: '3vh',
    fontSize: '3vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

class Footer extends React.PureComponent {
  render() {
    return (
      <div className={css(styles.footer)}>
        <NewsLetter />
        <SubscribeButton />
        <div className={css(styles.flowingSections)}>
          <About />
          <SupportRelated />
          <Accounts />
          <Social />
        </div>
        <CopyRights />
      </div>
    );
  }
}

const NewsLetter = () => {
  return (
    <div className={css(styles.newsLetter)}>
      <div className={css(styles.newsHeader)}>
        Join Our Newsletter
      </div>
      <div className={css(styles.newsBody)}>
        Stay in the know with the new collections and seasonal sales.
        Sign up now and receive 15% off your next purchase.
        <div className={css(styles.divider)} />
      </div>
    </div>
  );
};

const SubscribeButton = () => {
  return (
    <FlatButton className={css(styles.subscribe)}>
      Subscribe
    </FlatButton>
  );
};
const About = () => {
  return (
    <div className={css(styles.sectionWidth)}>
      <div className={css(styles.sectionHeight)}>About us</div>
      <div className={css(styles.sectionHeight)}>Contact us</div>
      <div className={css(styles.sectionHeight)}>Press</div>
    </div>
  );
};
const SupportRelated = () => {
  return (
    <div className={css(styles.sectionWidth)}>
      <div className={css(styles.sectionHeight)}>Returns</div>
      <div className={css(styles.sectionHeight)}>Shipping Policy</div>
      <div className={css(styles.sectionHeight)}>Affiliate Program</div>
    </div>
  );
};
const Accounts = () => {
  return (
    <div className={css(styles.sectionWidth)}>
      <div className={css(styles.sectionHeight)}>My Account</div>
      <div className={css(styles.sectionHeight)}>My Cart</div>
      <div className={css(styles.sectionHeight)}>Checkout</div>
      <div className={css(styles.sectionHeight)}>Register</div>
    </div>
  );
};
const Social = () => {
  return (
    <div className={css(styles.sectionWidth)}>
      <div className={css(styles.sectionHeight)}>
        <i className="fa fa-facebook" />
        <i className="fa fa-youtube" />
      </div>
      <div className={css(styles.sectionHeight)}>
        <i className="fa fa-twitter" />
        <i className="fa fa-instagram" />
      </div>
      <div className={css(styles.sectionHeight)}>
        <i className="fa fa-pinterest" />
        <i className="fa fa-envelope" />
      </div>
    </div>
  );
};
const CopyRights = () => {
  return (
    <div className={css(styles.CopyRights)}>
    All rights reserved.
    </div>
  );
};

export default autobind(Footer);
