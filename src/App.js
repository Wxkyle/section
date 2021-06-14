
import './App.css';
import Section from './Section.tsx';
import React, { FunctionComponent } from 'react';

function App() {


  return <div>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <Section testSquare top left></Section>
      <Section testSquare top></Section>
      <Section testSquare top right></Section>
      <Section testSquare left></Section>
      <Section testSquare></Section>
      <Section testSquare center></Section>
      <Section testSquare right></Section>
      <Section testSquare bottom left></Section>
      <Section testSquare bottom></Section>
      <Section testSquare bottom right></Section>
      <Section testSquare top bottom left></Section> {/* dir: row , just: start , align: stretch  */}
      <Section testSquare top bottom></Section> {/* dir: row , just: center , align: stretch  */}
      <Section testSquare top bottom right></Section> {/* dir: row , just: end , align: stretch  */}
      <Section testSquare top left right></Section> {/* dir: col , just: start , align: stretch  */}
      <Section testSquare left right></Section> {/* dir: col , just: center , align: stretch  */}
      <Section testSquare bottom left right></Section> {/* dir: col , just: end , align: stretch  */}
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
