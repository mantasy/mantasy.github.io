import React from 'react';
import creative from './assets/creative.png';
export function ProjectCard(props) {
  return (
    // <div id={props.parentId} class={props.className}>
    //   <div id={props.childId} class="shadow" style={{ backgroundColor: "lightGreen" }}>
    //     front matter here!
    //     <div class="back face center" style={{ backgroundColor: "lightblue" }}>
    //       more information here!
    //     </div>
    //   </div>
    // </div>

    <div id={props.parentId}>
      <div id={props.childId} class="shadow">
        <div class="front face">
          <img src={creative} style={{ width: "100%", height: "100%", backgroundColor: "yellow"}}/>
        </div>
        <div class="back face center">
          <p>This is nice for exposing more information about an image.</p>
          <p>Any content can go here.</p>
        </div>
      </div>
    </div>

  );
}
