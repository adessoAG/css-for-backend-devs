import React from 'react';
import { Heading, Text } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">CSS Solved a Big Problem!</Heading>
            <Text>HTML wurde erstellt, um den Inhalt einer Webseite zu <mark>beschreiben</mark>.</Text>
            <Text>Tags wie font und color waren im HTML 3.2 hinzugefügt.</Text>
            <Text>Die Entwicklung großer Websites, auf denen jeder einzelnen Seite Schriftarten und Farbinformationen hinzugefügt wurden, wurde zu einem langen und teuren Prozess.</Text>
            <Text>Um dieses Problem zu lösen, hat das World Wide Web Consortium (W3C) CSS erstellt.</Text>
        </div>
    );
}
export default SubHeading;
