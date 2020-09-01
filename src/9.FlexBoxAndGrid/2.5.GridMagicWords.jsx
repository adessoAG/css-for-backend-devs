import React from 'react';
import { Heading, Text } from 'spectacle';

function SubHeading() {
  return (
    <div>
      <Heading fontSize="h2">Magic Words</Heading>
      <Heading fontSize="text">grid-template</Heading>
      <Text className="text-centered">defines how your site will be arranged</Text>

      <Heading fontSize="text">grid-area</Heading>
      <Text className="text-centered">defines that an element is part of the grid layout</Text>

    </div>

  );
}
export default SubHeading;
