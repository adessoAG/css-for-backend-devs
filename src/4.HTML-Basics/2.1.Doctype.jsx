import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered-image">
            <Heading>One Doctype to rule them all!</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`<!DOCTYPE html>`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
