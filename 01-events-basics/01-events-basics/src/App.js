import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Popupreact() {
	return (
		<div>
			<h4>Popup - SCTP-02 REACT</h4>
			<Popup trigger=
				{<button> Click here to open popup </button>}
				position="right center">
				<div>React Modules</div>
        <ul>
          <li>Introduction</li>
          <li>Beginner</li>
          <li>Intermediate</li>
          <li>Advanced</li>
        </ul>
			</Popup>
		</div>
	)
};
