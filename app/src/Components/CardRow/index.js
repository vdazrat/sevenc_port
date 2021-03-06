import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

class CardRow extends React.PureComponent {
  static propTypes = {
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  render() {
    return (
      <div>
        {
          this.props.content.map(v => {
            return <Collection content={v} key={`collection__${v.id}`} />;
          })
        }
      </div>
    );
  }
}

const cardStyles = {
  marginTop: '1vh',
  marginBottom: '1vh',
};
const Collection = ({ content }) => {
  return (
    <Card containerStyle={cardStyles}>
      <CardMedia
        overlay={
          <CardTitle
            title={content.title}
            titleStyle={{ fontSize:'5vw' }}
            subtitle={content.subtitle}
            subtitleStyle={{ fontSize: '3vw' }}
          />
        }
      >
        <img src={content.img} alt="" />
      </CardMedia>
    </Card>
  );
};
Collection.propTypes = {
  content: PropTypes.object.isRequired,
};

export default autobind(CardRow);
