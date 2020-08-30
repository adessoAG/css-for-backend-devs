import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import './inline.css';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Inline Elemente</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`
                <span>Hello World</span>
              `}
            </CodePane>
            <br />
            <span class="element">Hello world</span>
        </div>
    );
}
export default SubHeading;
