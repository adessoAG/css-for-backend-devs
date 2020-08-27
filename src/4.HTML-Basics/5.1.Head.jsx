import React from 'react';
import { Text, Link } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Text>Einige Elemente sind nur für den <code>HEAD</code> der Seite, werden also nie gezeigt oder nur an sehr speziellen Stellen (<code>title</code>).</Text>
            <Text>Andere Elemente sind <mark>ersetzte Elemente</mark>, da das HTML durch etwas anderes <mark>ersetzt</mark> wird (Formularelemente, Bilder, Video).</Text>
            <Link href="https://gethead.info/" target="_blank">Übersicht aller HEAD-Elemente</Link>
        </div>
    );
}
export default SubHeading;
