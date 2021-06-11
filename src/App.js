
import './App.css';
import Section from './Section.tsx';
import React, { FunctionComponent } from 'react';

function App() {


  return <div>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <Section top left></Section>
      <Section top></Section>
      <Section top right></Section>
      <Section left></Section>
      <Section></Section>
      <Section center></Section>
      <Section right></Section>
      <Section bottom left></Section>
      <Section bottom></Section>
      <Section bottom right></Section>
      <Section top bottom left></Section> {/* dir: row , just: start , align: stretch  */}
      <Section top bottom></Section> {/* dir: row , just: center , align: stretch  */}
      <Section top bottom right></Section> {/* dir: row , just: end , align: stretch  */}
      <Section top left right></Section> {/* dir: col , just: start , align: stretch  */}
      <Section left right></Section> {/* dir: col , just: center , align: stretch  */}
      <Section bottom left right></Section> {/* dir: col , just: end , align: stretch  */}
    </div>
    <div style={{height: '100px'}}/>
    <Section>
        {"Details"}
        {"These are words that go here"}
      </Section>
      <Section>
        {"myFancyPic.png"}
        {"The picture description"}
      </Section>
      <Section>
        {"The picture description"}
        {"myFancyPic.png"}
      </Section>
      <Section>
        {"user"}
        {".first_name"}
        {".last_name"}
      </Section>
      <Section>
        {"user"}
        {{first_name: undefined}}
        {{last_name: undefined}}
      </Section>

  </div>
}



export default App;
