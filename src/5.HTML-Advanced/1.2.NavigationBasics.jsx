import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Basics</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`<nav>
    <ul>
        <li>
          <a href="./p1.html">Seite1</a>
        </li>
        <li>
          <a href="./p2.html">Seite2</a>
        </li>
        <li>
          <a href="./p3.html">Seite3</a>
        </li>
    </ul>
</nav>`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
