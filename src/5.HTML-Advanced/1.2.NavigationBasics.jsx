import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered-image">
            <Heading>Basics</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`
                <nav class="main-nav">
                <ul class="main-nav__list">
                  <li><a href="#">Projektbegleitung und Coaching</a></li>
                  <li><a href="#">Training und Know How-Transfer</a></li>
                  <li><a href="#">Audit und Review</a></li>
                  <li><a href="#">Werkzeuge und Entwicklungsprozesse</a></li>
                  <li><a href="#">Organisation und Prozesse</a></li>
                </ul>
              </nav>
              `}
            </CodePane>
        </div>
    );
}
export default SubHeading;
