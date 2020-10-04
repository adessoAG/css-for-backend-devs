import React from 'react';
import { Heading, Text } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered">
      <Heading>Magic Words</Heading>
      <Heading fontSize="text">grid-template</Heading>
      <Text className="text-centered">Definiert die Anordnung der einzelnen Seitenbestandteile ("Areas").</Text>

      <Heading fontSize="text">grid-area</Heading>
      <Text className="text-centered">Macht ein Element zu einer Grid-Area, die über das Template angeordnet werden kann.</Text>

    </div>

  );
}
export default SubHeading;
