import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Carousel extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  render() {
    return (
      <AutoPlaySwipeableViews>
        {this.props.children}
      </AutoPlaySwipeableViews>
    );
  }
}


export default autobind(Carousel);
