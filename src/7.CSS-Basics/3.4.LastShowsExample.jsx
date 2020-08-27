import React from 'react';
import { CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered-image">
            <CodePane language="css" theme={lightTheme}>
                {`p {
	color: #000;
	background-color: #cecece;
	padding: 10px;
}`}
            </CodePane>
            <CodePane language="css" theme={lightTheme}>
                {`/* ... Code dazwischen ... */
p {
    color: #a20000;
}`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
