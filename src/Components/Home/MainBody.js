import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  mainBody: {
    position: 'absolute',
    top: '100vh',
    background: 'white',

  },
});
const MainBody = (props) => {
  return (
    <div className={css(styles.mainBody)}>
      {props.children}
    </div>
  );
};
MainBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainBody;

