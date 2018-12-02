import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Hero from '../components/hero';
import ArticlePreview from '../components/article-preview';


const Soundtrack = ({ name, uri}) => (
  <div className="Soundtrack">
  <h3>{name}</h3>
    <iframe
      src={`https://open.spotify.com/embed/playlist/${uri.split(':').reverse()[0]}`}
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
  </div>
);

class Soundtracks extends React.Component {
  render() {

    // store this in contentful, query, etc
    const playlists = [{ name: 'Thailand 🇹🇭', uri: 'spotify:user:fauxq:playlist:4OQ9EdApKBrfeYugsKfgyJ' }]
    
    return (
      <div>
        {playlists.map(playlist => (
          <Soundtrack name={playlist.name} uri={playlist.uri} />
        ))}
      </div>
    );
  }
}

export default Soundtracks;
