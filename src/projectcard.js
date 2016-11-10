import React from 'react';

export default function ProjectCard(props) {
  return (
    <div
      className={props.className}
    >
      {props.title && <h1> {props.title} </h1> }
      {props.description && <h2>{props.description} </h2> }
    </div>

  )
}
