import React from 'react';
import { Image, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">

            <Image src="flex/align-self.svg"></Image>
            <CodePane style={{ width: '60%' }} language="css" theme={lightTheme}>
                {`.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
