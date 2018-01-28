import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { GridList, GridTile } from 'material-ui/GridList';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100vw',
  },
};

class Categories extends React.PureComponent {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={2}
          cellHeight={200}
          padding={1}
          style={styles.gridList}
        >
          {this.props.categories.map(category => {
            return (
              <GridTile
                key={`cat__${category.id}`}
                title={category.title}
                titlePosition="top"
                titleStyle={{ fontSize:'5vw' }}
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                subtitle={<span>{category.subtitle}</span>}
                subtitleStyle={{ fontSize: '3vw' }}
                cols={category.featured ? 2 : 1}
                rows={category.featured ? 2 : 1}
              >
                <img src={category.img} alt="" />
              </GridTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}

export default autobind(Categories);
