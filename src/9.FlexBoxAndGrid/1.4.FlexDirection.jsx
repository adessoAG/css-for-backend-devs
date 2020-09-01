import React from 'react';
import { Image, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">

            <Image src="flex/flex-direction.svg"></Image>
            <CodePane style={{ width: '60%' }} language="css" theme={lightTheme}>
                {`.container {
  flex-direction: row | row-reverse | column | column-reverse;
}`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
