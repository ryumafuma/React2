import React from 'react';

const QuoteCard = ({ simpsons }) => {

  return (

    <div className="simpsons">
      <img src={simpsons.image} alt={simpsons.character} />
      <p>{simpsons.quote}</p>
      <h1>{simpsons.characterDirection}</h1>
    </div>
  );
}
export default QuoteCard;