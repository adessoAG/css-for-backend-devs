import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import './inline.css';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Block Elemente</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`
                <div>Hello World</div>
              `}
            </CodePane>
            <br />
            <div class="element">Hello world</div>
        </div>
    );
}
export default SubHeading;
