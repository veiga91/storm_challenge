import React from 'react';
import { Title, Items } from './styled';

const Series = ({ series }) => {
  return (
    <>
      <Title>
        Series:
      </Title>  
      {
        series.items.map(serie => (
          <Items id={serie.name}>
            {serie.name}
          </Items>
        ))
      }
    </>
  );
};

export default Series;
