import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered-image">
            <Heading>Es wird niemals gleiche und perfekte Browser geben!</Heading>
            <UnorderedList>
                <ListItem>Ein Browser beherrscht ein Feature <mark>nicht</mark>.</ListItem>
                <ListItem>Es gibt einen <mark>Browser-Bug</mark>.</ListItem>
                <ListItem>Ein Browser beherrscht <mark>alle Teile</mark> eines Features.</ListItem>
                <ListItem>Ein Browser beherrscht <mark>nur Teile</mark> eines Features.</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
