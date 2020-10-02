import React from 'react';
import { Heading } from 'spectacle';
import './last.css';

function SubHeading() {
    return (
        <div className="relative">
            <Heading className="centered heading">Thank You</Heading>
            <div className="note note-1"><div className="sketchy">Animations</div></div>
            <div className="note note-2"><div className="sketchy">Stacking context</div></div>
            <div className="note note-3"><div className="sketchy">CSS Functions</div></div>
            <div className="note note-4"><div className="sketchy">Gradients</div></div>
            <div className="note note-5"><div className="sketchy">CSS Variables</div></div>
            <div className="note note-6"><div className="sketchy">Logical Properties</div></div>
        </div>
    );
}
export default SubHeading;
