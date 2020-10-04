import React from 'react';
import { Heading, Table, TableRow, TableCell, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
  return (
    <div>
      <Heading fontSize="h2">Vor- und Nachteile von CSS-Grid</Heading>

      <Table>
        <TableRow>
          <TableCell>
            Vorteile:
              <UnorderedList>
              <ListItem>Schnelle Ergebnisse</ListItem>
              <ListItem>Geringer Aufwand</ListItem>
              <ListItem>keine Floating-Magic (keine aufwändigen Berechnungen)</ListItem>
              <ListItem>Layouting über Variablenbezeichnungen</ListItem>
              <ListItem>Eigene „Maßeinheit“ zur verhältnismäßigen Höhen-/Breitendefinition</ListItem>
            </UnorderedList>
          </TableCell>
          <TableCell className="vertical-align-top">
            Nachteile:
              <UnorderedList>
              <ListItem>Anpassungen zur Nutzung unter IE11 nötig (mögliche Lösung: Auto-Prefixer)</ListItem>
              <ListItem>Nicht alle Funktionen im IE11 nutzbar</ListItem>
            </UnorderedList>
          </TableCell>
        </TableRow>
      </Table>

    </div>

  );
}
export default SubHeading;
