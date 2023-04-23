import React from 'react';
import { Link } from 'react-router-dom';

function PodcastList(props) {
  return (
    <ul>
      {props.podcasts.map(podcast => (
        <li key={podcast.id}>
          <Link to={`/podcasts/${podcast.id}`}>
            <img src={podcast.image} alt={podcast.title} />
            <h3>{podcast.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PodcastList;