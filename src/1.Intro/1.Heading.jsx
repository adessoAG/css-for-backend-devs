import React from 'react';
import { Heading, Link } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>HTML und CSS</Heading>
      <Heading fontSize="text">für Einsteiger und Umsteiger<br />(Update 2020)</Heading>
      <Link style={{ textAlign: 'center' }} className="hori-centered" href="html-css-basics.surge.sh">html-css-basics.surge.sh</Link>
    </div>
  );
}
export default SubHeading;
