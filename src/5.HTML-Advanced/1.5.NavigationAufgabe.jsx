import React from 'react';
import { Heading, Text, Link } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered">
      <Heading className="underline" fontSize="h2">Aufgabe</Heading>
      <Text>Ergänzen Sie Unterseiten und eine Navigation</Text>
      <Link target="_blank" href="https://github.com/adessoAG/css-for-backend-devs-aufgaben" className="text-centered">zum Beispiel</Link>
    </div>
  );
}
export default SubHeading;
