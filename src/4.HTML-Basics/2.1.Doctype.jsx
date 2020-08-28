import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">One Doctype to rule'em all!</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`<!DOCTYPE html>`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
