import React from 'react';
import { CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered-image">
            <CodePane language="css" theme={lightTheme}>
                {`.icon--color-disabled {
    opacity: 0.5; /* only IE11 */
}

@supports (filter: grayscale(100%) opacity(50%)) {
    .icon--color-disabled {
        opacity: 1;
        filter: grayscale(100%) opacity(50%);
    }
}`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
