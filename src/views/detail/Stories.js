import React from 'react';
import { Title, Items } from './styled';

const Stories = ({ stories }) => {
  return (
    <>
      <Title>
        Stories:
      </Title>  
      {
        stories.items.map(story => (
          <Items id={story.name}>
            {story.name}
          </Items>
        ))
      }
    </>
  );
};

export default Stories;
