import React from 'react';

export function ValueTitle(props) {
  return (
    <div className="values" id={props.id}>
      <h1>{props.word}</h1>
    </div>
  );
}

export function ValueDetails(props) {
  return (
    <div className={`values ${props.className}`} id={props.id}>
      {props.valueDetails ?
        (<p>{props.valueDetails}</p>) :
        (<img src={props.imgSrc} className="values-img" role="presentation"/>)
      }
    </div>
  )
}
