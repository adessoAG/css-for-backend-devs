import React from 'react';
import { Text, Heading } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Float und clear</Heading>
            <Text>Dinge können nach links oder rechts gefloatet werden. Ausserdem kann man mit <code>float:none</code> ein Floating wieder beenden. Mehr Entscheidungen existeren nicht.</Text>
            <Text>Ein Float wird aus dem Dokumentenfluss gezogen, die nachfolgenden Elemente wissen nichts von seiner Existenz.</Text>
            <Text>Deshalb ist die Eigenschaft <code>clear</code> so wichtig. Durch sie beginnt der nachfolgende Inhalt wieder an der ersten Position der Leserichtung (bei uns links aussen).</Text>
            <Text>Es gibt <code>clear: both</code>, <code>clear: left</code> und <code>clear:right</code>.</Text>
        </div>
    );
}
export default SubHeading;
