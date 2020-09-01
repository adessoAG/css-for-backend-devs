import React from 'react';
import { Image, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">

            <Image src="flex/01-container.svg"></Image>
            <CodePane style={{ width: '60%' }} language="css" theme={lightTheme}>
                {`.container {
  display: flex; /* or inline-flex */
}`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
