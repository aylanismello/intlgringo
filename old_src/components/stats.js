import React from 'react';
import moment from 'moment';
import styles from './stats.module.css';

const formattedMoment = (dateString) => moment(dateString, 'YYYY-MM-DD');

// https://stackoverflow.com/questions/25150570/get-hours-difference-between-two-dates-in-moment-js
function getNumDaysAbroad() {
  const europe = moment.duration(formattedMoment('2018-3-18').diff(formattedMoment('2018-2-6'))).asDays();
  const latAm = moment.duration(formattedMoment('2018-9-6').diff(formattedMoment('2018-5-12'))).asDays();
  const asiaBeyond = moment.duration(formattedMoment(new Date()).diff(formattedMoment('2018-11-27'))).asDays();

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
  </div>
);
