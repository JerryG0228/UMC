import React from 'react';
import ItemBox from '../components/ItemBox';
import { programs } from '../tvDummy';

export default function TV() {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {programs.results.map((program) => {
          return (
            <ItemBox
              title={program.name}
              poster_path={program.poster_path}
              vote_average={program.vote_average}
              overview={program.overview}
            />
          );
        })}
      </div>
    </div>
  );
}
