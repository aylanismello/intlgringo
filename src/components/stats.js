import React from 'react';
import moment from 'moment';
import styles from './stats.module.css';

// https://stackoverflow.com/questions/25150570/get-hours-difference-between-two-dates-in-moment-js
function getNumDaysAbroad() {
  const europe = moment.duration(moment('2018-3-18').diff(moment('2018-2-6'))).asDays();
  const latAm = moment.duration(moment('2018-9-6').diff(moment('2018-5-12'))).asDays();
  const asiaBeyond = moment.duration(moment(new Date()).diff(moment('2018-11-27'))).asDays();

  return Math.ceil(europe + latAm + asiaBeyond);
}


const Stat = ({ num, thing, emoji }) => (
  <div className={styles.statsItem}>
    <div className={styles.statsNum}> {num} </div>
    <div className={styles.statsThing}> {thing} </div>
    <div className={styles.statsEmoji}> {emoji} </div>
  </div>
);

export default ({ numCities, numCountries }) => (
  <div className={styles.stats}>
    <Stat num={numCities} thing="cities" emoji="🏙" />
    <Stat num={numCountries} thing="countries" emoji="✈️" />
    <Stat num={getNumDaysAbroad()} thing="days traveling" emoji="⏳" />
    {/* <div className={styles.statsItem}>{numCities} cities 🏙 </div>
    <div className={styles.statsItem}> {numCountries} countries ✈️ </div>
    <div className={styles.statsItem}> 116 days traveling ⏳ </div> */}
  </div>
);
