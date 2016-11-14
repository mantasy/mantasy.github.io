import React from 'react';
import creative from './assets/creative.png';

export function ProjectCard(props) {
  return (
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
    	<div class="flipper">
    		<div class="front">
    			-- front content -->
    		</div>
    		<div class="back">
    			-- back content -->
    		</div>
    	</div>
    </div>
  );
}
