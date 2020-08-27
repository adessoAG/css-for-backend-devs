import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h2"><code>display</code> (Auswahl)</Heading>
            <CodePane language="css" theme={lightTheme}>
                {`display: none;      
display: inline;        
display: block;     
display: contents;      
display: list-item;     
display: inline-block;      
display: flex;      
display: inline-flex;       
display: grid;      
display: inline-grid;       
display: inline-table;      
display: table;
display: table-cell;
display: table-column;
display: table-column-group;
display: table-footer-group;
display: table-header-group;
display: table-row;
display: table-row-group;`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
