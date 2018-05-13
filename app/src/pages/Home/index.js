/* eslint-disable */
import React from 'react';
import autobind from 'autobind-decorator';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Collections from '../../Components/CardRow';
import Categories from '../../Components/CardGrid';
import HomeBanner from './HomeBanner';
import Section from './Section';
import MainBody from './MainBody';

@inject(stores => {
  return stores.homeStore.tojs();
})
@observer
class Home extends React.Component {
  static propTypes = {
    Footer: PropTypes.node.isRequired,
  }
  render() {
    const { homeBanner, homeCategories, homeCollections } = this.props;
    return (
      <div>
        <HomeBanner content={homeBanner.content} />
        <MainBody>
          <Section name="Collections">
            <Collections content={homeCollections.content} />
          </Section>
          <Section name="Categories">
            <Categories content={homeCategories.content} />
          </Section>
          {this.props.Footer}
        </MainBody>
      </div>
    );
  }
}

export default autobind(Home);
