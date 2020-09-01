import React from 'react';
import { Image, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">

            <Image src="flex/flex-grow.svg"></Image>
            <CodePane style={{ width: '60%' }} language="css" theme={lightTheme}>
                {`.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
