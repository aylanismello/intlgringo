import React from 'react';
import styled from 'styled-components';
import MainContent from '../layouts/main_content';
import Base from '../layouts/base';
import PostPreviews from '../components/post_previews';

const AylanPic = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 15px;
  position: relative;
  /* padding: 5px 20px; */
  /* padding: 0 30px; */
`;

const AylanEmoji = styled.div`
  /* font-size: 7rem;
  position: absolute;
  bottom: -90px;
  right: 50px; */
`;

const AylanDescription = styled.div``;

const AylanBio = styled.div`
  /* http://grid.malven.co/ */
  display: grid;
  grid-template-columns: 40% auto;
  grid-template-rows: auto;
  grid-gap: 50px;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoint.mobileM}) {
    grid-template-columns: auto;
    justify-items: center;
  }
`;

const AylanStats = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 40% 40%;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  padding: 1rem 2rem;

  @media (min-width: ${props => props.theme.breakpoint.mobileL}) {
    grid-template-columns: 22% 22% 22% 22%;
  }
`;

const AylanStatImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;

const AylanStatStyle = styled.div`
  position: relative;
`;

const AylanStatTxt = styled.div`
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  font-family: ${props => props.theme.fontHeader};
  filter: blur(0.5px);
`;

const AylanStat = ({ src, thing, num }) => (
  <AylanStatStyle className="AylanStatStyle">
    <AylanStatImg src={src} className="AylanStatImg" />
    <AylanStatTxt className="AylanStatTxt">
      {num} {thing}
    </AylanStatTxt>
  </AylanStatStyle>
);

class Index extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <Base location={location}>
        <div className="Index">
          <MainContent className="PageContent">
            <AylanBio className="AylanBio">
              {/* <div className="AylanPicContainer"> */}
              <AylanPic
                src="https://res.cloudinary.com/burncartel/image/upload/c_scale,q_65,w_600/v1561276078/aylan_1_pai.jpg"
                className="AylanPic"
              />

              <AylanDescription className="AylanDescription">
                Hi. My name is Aylan Mello and I travel the world so{' '}
                <span style={{ fontStyle: 'italic' }}>
                  {' '}
                  you don’t have to.{' '}
                </span>
                <br />
                <br />
                Or maybe… I will be the final push. That last push you needed to
                quit your office job and join the Digital Nomads and Backpackers
                I find myself amongst these days.
                <br />
                <br />
                So welcome to Internationally Gringo - where you fit in
                everywhere and nowhere. And since you asked -
                <a
                  href="https://super.abril.com.br/mundo-estranho/por-que-estrangeiro-e-chamado-de-gringo/"
                  target="_blank"
                >
                  {' '}
                  “gringo” is Brazilian slang for foreigner.{' '}
                </a>
              </AylanDescription>
              {/* <AylanEmoji className="AylanEmoji">
                👋
              </AylanEmoji> */}
              {/* </div> */}
            </AylanBio>

            <AylanStats className="AylanStats">
              {[1, 2, 3, 4].map(num => {
                return (
                  <AylanStat
                    src="https://res.cloudinary.com/burncartel/image/upload/v1560928220/bc_weekly_95_cover.jpg"
                    thing="cities"
                    num={num}
                  />
                );
              })}
            </AylanStats>

            <PostPreviews
              className="PostPreviews"
              data={[
                'Traveling spontaneously in an archipelago (thoughts on adjusting to the Philippines)',
                '6 months in Southeast Asia, but Vietnam still shocks',
                'The Good, the Bad, and the South of Thailand',
                'Traveling spontaneously in an archipelago (thoughts on adjusting to the Philippines)',
                '6 months in Southeast Asia, but Vietnam still shocks',
                'The Good, the Bad, and the South of Thailand',
                'Traveling spontaneously in an archipelago (thoughts on adjusting to the Philippines)',
                '6 months in Southeast Asia, but Vietnam still shocks',
                'The Good, the Bad, and the South of Thailand'
              ]}
            />
          </MainContent>
        </div>
      </Base>
    );
  }
}

export default Index;
