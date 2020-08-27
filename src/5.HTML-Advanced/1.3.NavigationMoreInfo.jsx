import React from 'react';
import { Text } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Text>Das <code>nav</code>-Element gibt der Liste einen Sinn über die reine Liste hinaus. Es ist dadurch eine spezielle Liste von Links. In einem Screenreader kann das angesagt werden.</Text>
            <Text>Für den Entwickler wird der Code dadurch lesbarer.</Text>
        </div>
    );
}
export default SubHeading;
