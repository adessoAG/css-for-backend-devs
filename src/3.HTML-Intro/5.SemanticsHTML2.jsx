import React from 'react';
import { Heading, Text, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div>
            <Heading>Semantisches HTML</Heading>
            <Text>Entgegen mancher Gerüchte gibt es keine Studienergebnisse, wonach eine Vielzahl verlinkter Überschriften schlecht für SEO wäre. Diesem Irrtum sass die Süddeutsche Zeitung leider lange auf.</Text>
            <CodePane language="html" theme={lightTheme}>
                {`
                <!-- DAS soll ernsthaft eine Überschrift sein.  -->
                <!-- Ich habe die URLs verkürzt oder entfernt.  -->
                <a href="#" class="entry-title" rel="bookmark" data-pagetype="STANDARD_ARTICLE" data-id="1.3789774" data-linktrack="onclick_platformtype_homepage_topthema">
                  <em>Trump verliert, Moore betet</em>
                  <div class="image">
                    <img src="600x338?v=1513149739" data-src="600x338?v=1513149739" class="  lazyloading" alt="Alabama GOP Senate Candidate Roy Moore Holds Election Night Victory Party">
                    <span data-href="#" class="imagelabel" data-linktrack="imagelabel.label.1.3789774" data-linktrack-options="{&quot;additionalNames&quot; : [&quot;imagelabel.video.1.3789774&quot;]}" data-pagetype="VIDEO" data-id="1.3789781">Video</span>
                  </div>
                </a>
                `}
            </CodePane>
        </div>
    );
}
export default SubHeading;
