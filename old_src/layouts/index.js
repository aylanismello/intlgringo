import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import base from './base.css';
import Container from '../components/container';
import Navigation from '../components/navigation';
import styled from 'styled-components';

const FullPage = styled.div`
  /* padding-top: 8vh; */
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;

    // https://lodash.com/docs/#get
    // const latestTravelStat = get(this, 'props.data.allContentfulAylanTravelStatus.edges')[0].node;

    // const { summary, dateArrived, place } = latestTravelStat;

    return (
      <Container>
        {/* <Navigation place={place} /> */}
        balls
        <FullPage>{children()}</FullPage>
      </Container>
    );
  }
}

export default Template;

// export const pageQuery = graphql`
//   query TravelStatsQuery {
//     allContentfulAylanTravelStatus(
//       sort: { fields: [dateArrived], order: DESC }
//     ) {
//       edges {
//         node {
//           summary
//           dateArrived
//           place {
//             city
//             country {
//               name
//               flag
//             }
//           }
//         }
//       }
//     }
//   }
// `;
