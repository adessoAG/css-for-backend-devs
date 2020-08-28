import React from 'react';
import { Heading, Text, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div>
            <Heading>Semantisches HTML</Heading>
            <Text>Wenn für einen Inhalt ein passendes HTML-Element existiert, nutzen Sie es. DIV und SPAN sind nur Not-elemente. Auch WAI-ARIA sollte nur als Ausnahme eingesetzt werden.</Text>
            <CodePane language="html" theme={lightTheme}>
                {`
                <!-- So ist es korrekt -->
                <button type="submit"> Formular abschicken </button>
                <!-- Bitte nicht so!!!! -->
                <span>Formular abschicken</span>
                <!-- Bitte nicht so!!!! -->
                <a href="#">Formular abschicken</a>
                <!-- So ist es auch nicht besser!!!! -->
                <a href="#" class="btn" aria-role="button">Formular abschicken</a>
                `}
            </CodePane>
        </div>
    );
}
export default SubHeading;
