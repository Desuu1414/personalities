import { useState } from 'react';
import { bandList } from './Data.tsx';
import './index.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < bandList.length - 1;
  const hasPrev = index > 0;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handlePrevClick() {
    setIndex(hasPrev ? index - 1 : bandList.length - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const band = bandList[index];

  return (
    <>
      <h1>SHERWIN SANTOS</h1>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Back
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>{band.name}</h2>
      <h3>
        ({index + 1} of {bandList.length})
      </h3>
      <div className="details-button-container">
     <button onClick={handleMoreClick} className="details-button">
     {showMore ? 'Hide' : 'Show'} details
       </button>
      </div>
      {showMore && <p>{band.description}</p>}
      <img 
        className="band"
        src={band.url} 
        alt={`Image of ${band.name}`}
      />
    </>
  );
}
