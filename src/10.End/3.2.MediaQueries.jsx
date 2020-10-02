import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">Media Queries</Heading>
            <CodePane language="css" theme={lightTheme}>
                {`@media ( min-width : 575px ) {
    article {
        width : 550px ;
        margin-left : auto ;
        margin-right : auto ;
    }
}`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
