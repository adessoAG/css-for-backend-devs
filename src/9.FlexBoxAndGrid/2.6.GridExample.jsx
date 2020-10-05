import React from 'react';
import { Heading, Link, Text } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered">
      <Heading className="underline" fontSize="h2">Aufgabe</Heading>
      <Text>Layout mit Hilfe von CSS Grid verändern: Erstellen Sie ein 2-spaltiges Layout mit Seitenmenü links neben dem Content und mit einer Titelbar.</Text>
      <Link target="_blank" href="https://github.com/adessoAG/css-for-backend-devs-aufgaben" className="text-centered">zum Beispiel</Link>
    </div>
  );
}
export default SubHeading;
