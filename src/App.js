
import React from 'react';
import './App.css';
import "./patterns";
import "./patterns/dataFromDBPattern";
import "./patterns/formPattern";
import "./patterns/headerAndTextPattern";
import "./patterns/picturePattern";
import Section from './Section';
import ReactMagicStylingContext from "./ReactMagicStylingContext";

function App() {
  return <ReactMagicStylingContext.Provider 
        value={{ colors: { 
          primary: "blue", secondary: "red", separatorGray: '#bbb' },
          spacing: { base: 2 } 
        }}                                      
        >
          <div>
    {/* <TestSquareSections/> */}
    <div style={{height: '100px'}}/>
    <Section>
        {/*This would give us a carousel because [] = sideways*/}
        {"Words on paper."}
        {"Words on paper."}
      </Section>
      <Section>
        {/*This would give us a carousel because [] = sideways*/}
        {["/images/unsplash1.jpg",
        "/images/unsplash1.jpg",
        "/images/unsplash1.jpg",
        "/images/unsplash1.jpg",
        "/images/unsplash1.jpg"]}
      </Section>
      <Section>
        {/*This would give us a list of photos because it's not in an array*/}
        {"/images/unsplash1.jpg"}
        {"/images/unsplash1.jpg"}
        {"/images/unsplash1.jpg"}

      </Section>
    <Section>
        {"LaPierre Mountain Bike"}
        {"Orem, UT"}
        {"* 5.0 (3)"}
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
  </div></ReactMagicStylingContext.Provider>
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