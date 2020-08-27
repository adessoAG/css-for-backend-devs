import React from 'react';
import { Heading, Text } from 'spectacle';

function SubHeading() {
    return (
        <>
            <Heading fontSize="h2">Nichts ist von Dauer</Heading>
            <Text fontSize="35px">Als der IE6 weit über 90% Marktanteil hatte, konnte sich niemand einen Bruch des Browsermonopols von Microsoft vorstellen.</Text>
            <Text fontSize="35px">Es ist deshalb sehr kurzsichtig, sich nur auf Chrome zu konzentrieren und alle anderen links liegen zu lassen.</Text>
            <Text fontSize="35px">Der IE ist in großen Firmennetzwerken und Behörden noch länger von Bedeutung. Auch für Screenreadernutzer wird er weiterhin wichtig bleiben. Und: <mark>der IE wird nicht weiterentwickelt.</mark></Text>
        </>
    );
}
export default SubHeading;
