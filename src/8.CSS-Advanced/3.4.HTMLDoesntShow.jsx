import React from 'react';
import { Heading, Text } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>HTML sieht nicht aus!</Heading>
            <Heading fontSize="h3">HTML markiert Bedeutung, mehr nicht.</Heading>
            <Text>Wenn HTML nach etwas Bestimmtem aussieht, dann nur durch CSS. Jeder Browser führt ein Browser-Stylesheet mit sich.</Text>
        </div>
    );
}
export default SubHeading;
