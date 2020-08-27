import React from 'react';
import { Heading, UnorderedList, ListItem, Text, Link } from 'spectacle';

function SubHeading() {
  return (
    <div>
      <Heading>Semantisches HTML</Heading>
      <UnorderedList>
        <ListItem>Semantischer Code gibt dem Inhalt eine Bedeutung</ListItem>
        <ListItem>Überschriften können von Screenreadern zur Navigation genutzt werden.</ListItem>
        <ListItem>Einige Elemente wie Checkboxen, Radiobuttons oder Buttons haben eingebaute Zustände (states) sowie eine eingebaute Zugänglichkeit für Tastaturen. Das müsste alles per JavaScript nachgebaut werden, wenn man die falschen Elemente nutzt.</ListItem>
        <ListItem>Frontend-Entwicklung ist ein Handwerk. Dazu gehört, die Frontendsprachen korrekt zu benutzen. Wer das ohne Not nicht tut, ist ein schlechter Handwerker.</ListItem>
      </UnorderedList>
      <Text fontSize="monospace">Der Artikel<Link fontSize="monospace" href="https://www.smashingmagazine.com/2019/02/buttons-interfaces/">"When Is A Button Not A Button?"</Link>zeigt sehr gut, welche Details in einem Element stecken können.</Text>
    </div>
  );
}
export default SubHeading;
