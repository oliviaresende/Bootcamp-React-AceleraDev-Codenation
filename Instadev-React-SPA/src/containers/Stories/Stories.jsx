import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false)
  const [story, setStory] = useState()
  const [user, setUser] = useState()

  const handleOpen = (story, user) => {
    setStory(story)
    setUser(user)
    setShowStory(true)
  }

  return (
    <>
      <section className="stories" data-testid="stories">
        <div className="container">
          {
            stories.map(story => {
              const user = getUserHandler(story.userId)
              return (
                !user ?
                  ''
                  :
                  (<button
                    className={"user__thumb user__thumb--hasNew"}
                    onClick={() => handleOpen(story, user)}
                    key={user.id}
                  >
                    <div className="user__thumb__wrapper">
                      <img
                        src={user.avatar}
                        alt={user.name}
                      />
                    </div>
                  </button>)
              )
            }
            )
          }

        </div>
      </section>

      {
        showStory &&
        (
          <Story story={story} user={user} handleClose={() => setShowStory(false)} />
        )}
    </>
  );
};
export default Stories;
