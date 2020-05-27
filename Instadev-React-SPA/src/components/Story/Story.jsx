import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  const [metadata, setMetadata] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const updateProgress = useCallback(
    () => {
      if (metadata?.duration !== null && currentTime !== null) {
        const elapsedTime = ((currentTime / metadata.duration) * 100)

        return `${elapsedTime.toFixed(2)}%`
      }

      return '0%'
    }, [metadata, currentTime])
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link className="user__thumb" to={`/users/${user.username}`}>
              <img src={user.avatar} alt={user.name} />
            </Link>
            <Link className="user__name" to={`/users/${user.username}`}>{user.name}</Link>
          </div>
          <button className="story__close">
            <i className="fas fa-times" onClick={() => handleClose()} />
          </button>
        </header>
        <div className="story__progress">
          <div className="story__progress__elapsed" style={{ width: updateProgress() }} />
        </div>
      </div>
      <div className="container">
        <section className="story__video__wrapper">
          {
            story.videoUrl && (
              <video
                autoPlay
                className="video-player"
                loop
                playsInline
                onTimeUpdate={e => setCurrentTime(e.target.currentTime)}
                onLoadedMetadata={e => {
                  setMetadata({
                    videoHeight: e.target.videoHeight,
                    videoWidth: e.target.videoWidth,
                    duration: e.target.duration
                  })
                }}
                src={story.videoUrl}
              />
            )
          }

        </section>
      </div>
    </section>
  );
};

export default Story;
