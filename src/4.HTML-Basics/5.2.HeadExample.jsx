import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import '../prism.css';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">Sehr wichtige Bestandteile des HEAD</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dokumententitel</title>
    
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
