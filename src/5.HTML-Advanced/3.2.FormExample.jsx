import React from 'react';
import { CodePane, Link } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <CodePane language="html" theme={lightTheme}>
                {`<div class="form">
    <label for="id-1">Label für das Formularelement</label>
    <input type="text" id="id-1" placeholder="Platzhaltertext">
</div>
<div class="form">
    <label for="id-2">Label für das Formularelement</label>
    <input type="email" id="id-2" placeholder="email@domain.de">
</div>`}
            </CodePane>
            <br />
            <Link target="_blank" fontSize="monospace" href="https://codepen.io/jensgro/full/MYgLeq">Alle formular Elemente</Link>
        </div>
    );
}
export default SubHeading;
