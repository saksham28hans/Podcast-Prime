import React, { useState } from 'react';

function EpisodePlayer(props) {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  }

  const handlePause = () => {
    setPlaying(false);
  }

  return (
    <div>
      <audio src={props.episode.audio} controls={true} onPlay={handlePlay} onPause={handlePause} />
      {playing ? <p>Playing</p> : <p>Paused</p>}
    </div>
  );
}

export default EpisodePlayer;