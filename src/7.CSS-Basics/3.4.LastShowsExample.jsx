import React from 'react';
import { CodePane, Heading } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">Welche Farbe sollte das Element nehmen?</Heading>
            <CodePane language="css" theme={lightTheme}>
                {`p {
	color: #000;
	background: #cecece;
	padding: 10px;
}`}
            </CodePane>
            <CodePane language="css" theme={lightTheme}>
                {`/* Code dazwischen */
p {
    color: #a20000;
}`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
