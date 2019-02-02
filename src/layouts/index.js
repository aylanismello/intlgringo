import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import base from './base.css';
import Container from '../components/container';
import Navigation from '../components/navigation';

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;

    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    const latestTravelStat = get(this, 'props.data.allContentfulAylanTravelStatus.edges')[0].node;
    
    const { summary, dateArrived, place } = latestTravelStat;

    return (
      <Container>
        <Navigation place={place} />
        {children()}
      </Container>
    );
  }
}

export default Template;

export const pageQuery = graphql`
  query TravelStatsQuery {
    allContentfulAylanTravelStatus(
      sort: { fields: [dateArrived], order: DESC }
    ) {
      edges {
        node {
          summary
          dateArrived
          place {
            city
            country {
              name
              flag
            }
          }
        }
      }
    }
  }
`;
