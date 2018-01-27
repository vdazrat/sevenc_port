import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  sView: {
    height:'92vh',
    overflowY:'scroll',
    WebkitOverflowScrolling: 'touch',
  },
});
const SView = (props) => {
  return (
    <div className={css(styles.sView)}>
      {props.children}
    </div>
  );
};
SView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SView;
