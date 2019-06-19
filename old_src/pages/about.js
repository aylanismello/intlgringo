import React from 'react';
import get from 'lodash/get';


class About extends React.Component {
  render() {
    return <div>
        <h3> Who </h3>
        <span>
          My name's Aylan Mello. I code computers, produce beats, learn
          languages, and more relevantly, travel.
        </span>
        <h3> What </h3>
        <span>
          I started traveling in February of 2018, and, despite period
          breaks, I plan to continue contiguously until I get burned out.
          Not sure when that'll be though.
        </span>
        <h3> How </h3>
        <span>
          <a href="https://www.investopedia.com/terms/a/arbitrage.asp">
            Arbitrage
          </a> and desire. I'm not loaded or particularly skilled, I'm just lucky enough to have been born in a relatively wealthy country
          and use that as a starting point to continually travel economically, while picking up freelance work or part time jobs on the way.
        </span>
        <h3> Why </h3>
        <span>
          Good question. Nothing I'd rather be doing right now, I suppose.
        </span>
        <h3> Where </h3>
        <span>
          Hopefully somewhere interesting! You could keep track of where I am by checking out the flag posted in the banenr of the home page.
        </span>
      </div>;
  }
}

export default About;
