import React from 'react';
import { Heading, UnorderedList, ListItem, Text, Link } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>CSS Pseudo Elemente</Heading>
            <Text>statt einzelen Zustände ermöglichen Sie das gestalten eines einzelnen Teils von einem Element</Text>
            <UnorderedList>
                <ListItem><Link href="https://developer.mozilla.org/de/docs/Web/CSS/::after" target="_blank">::after</Link></ListItem>
                <ListItem><Link href="https://developer.mozilla.org/de/docs/Web/CSS/::before" target="_blank">::before</Link></ListItem>
                <ListItem><Link href="https://developer.mozilla.org/de/docs/Web/CSS/::first-letter" target="_blank">::first-letter</Link></ListItem>
                <ListItem><Link href="https://developer.mozilla.org/de/docs/Web/CSS/::first-line" target="_blank">::first-line</Link></ListItem>
                <ListItem><Link href="https://developer.mozilla.org/de/docs/Web/CSS/::selection" target="_blank">::selection</Link></ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
