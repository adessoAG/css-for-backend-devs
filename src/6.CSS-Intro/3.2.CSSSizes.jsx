import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div>
            <Heading fontSize="h3">CSS Sizing Units</Heading>
            <CodePane style={{ width: '60%' }} language="css" theme={lightTheme}>
                {`<!-- Number -->
    opacity: 0.4;
    line-height: 1;

    <!-- Percentage -->
    width: 20%;

    <!-- Absolute Units px, mm, inch, pc, pt, px -->
    width: 20px;
    height: 300pt;

    <!-- Font Relative Units em, rem -->
    font-size: 1em;

    <!-- Viewport Relative Units vh, vw, vmin, vmax -->
    width: 20vw;

    <!-- Angle Units deg, rad, turn -->
    rotate(30deg);

    <!-- Timings Units s, ms -->
    animation-duration: 1s;`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
