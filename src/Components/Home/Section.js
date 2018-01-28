import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
  header: {
    height: '10vh',
    textAlign: 'center',
    marginTop: '10vh',
    marginBottom: '4vh',
  },
  body: {
    display: 'inline-block',
    fontSize: '8vw',
    borderBottom: '1px solid red',
  },
});
const SectionHeader = ({ name }) => {
  return (
    <div className={css(style.header)}>
      <div className={css(style.body)}>
        {name}
      </div>
    </div>
  );
};
SectionHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

const Section = (props) => {
  return (
    <div>
      <SectionHeader name={props.name} />
      {props.children}
    </div>
  );
};
Section.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
