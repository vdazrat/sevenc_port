import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { StyleSheet, css } from 'aphrodite';
import { Carousel, SView } from './Carousel';

// This is the front banner page of the application, and may host
// Looks, Collections or other nodes.

const styles = StyleSheet.create({
  bannerContainer: {
    position: 'fixed',
    width: '100%',
    top: '8vh',
    height: '100vh',
  },
  frontPageContainer: {
    height: '100%',
  },
  carouselContent: {
    position: 'absolute',
    top: '60vh',
    width: '100%',
    textAlign: 'center',
    color: 'white',
  },
  carouselHeader: {
    fontSize: '8vw',
  },
  carouselDesc: {
    fontSize: '4vw',
  },
});


class FrontPage extends React.PureComponent {
  static propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
      img: PropTypes.string,
      header: PropTypes.string,
      description: PropTypes.string,
    })).isRequired,
  }
  render() {
    return (
      <div className={css(styles.bannerContainer)}>
        <Carousel>
          {this.props.content.map((v) => {
            return (
              <SView key={`banner__${v.id}`}>
                <div
                  className={css(styles.frontPageContainer)}
                  style={
                  {
                    background: `url(${v.img}) center center no-repeat`,
                  }}
                >
                  <div className={css(styles.carouselContent)}>
                    <div className={css(styles.carouselHeader)}>
                      {v.header}
                    </div>
                    <div className={css(styles.carouselDesc)}>
                      {v.description}
                    </div>
                  </div>
                </div>
              </SView>
            );
          })}
        </Carousel>
      </div>
    );
  }
}


export default autobind(FrontPage);
