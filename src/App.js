
import React from 'react';
import './App.css';
import "./patterns";
import "./patterns/dataFromDBPattern";
import "./patterns/formPattern";
import "./patterns/headerAndTextPattern";
import "./patterns/pictureAndLabelPattern";
import Section from './Section.tsx';

function App() {
  return <div>
    {/* <TestSquareSections/> */}
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
        {".profile_url"}
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


function TestSquareSections(){
  return <div style={{display: 'flex', flexWrap: 'wrap'}}>
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
}