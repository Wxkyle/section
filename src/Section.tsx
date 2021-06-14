import "./App.css";
import React, { FunctionComponent, ReactNode } from "react";

export interface ISectionProps {}

function Section(props: any) {
  const { left, right, center, top, bottom, testSquare } = props;

  console.log("PROPS", { left, right, center, top, bottom });
  /*
    all of these will be true false values
    left - justify-start
    right - justify-end
    top - align-start
    bottom - align-end
    center - will be default
    
    */

  const positionsArr = [];


  var { positionStr }: { positionStr: string; } 
    = useAnchorPositions(top, bottom, left, right);
  
  

  // let position = [];

  // if (left && right){
  //   position.push("column align-stretch")
  // } else if (left) {
  //   position.push("justify-start");
  // } else if (right) {
  //   position.push("justify-end");
  // } else {
  //   position.push("justify-center");
  // }

  // if (top && bottom){
  //   position.push("align-stretch")
  // } else if (top && left && right){
  //   position.push("justify-start")
  // } else if (bottom && left && right){
  //   position.push("justify-end")
  // } else if (left && right){
  //   position.push("justify-center")
  // }  else if (top) {
  //   position.push("align-start");
  // } else if (bottom) {
  //   position.push("align-end");
  // } else {
  //   position.push("align-center");
  // }

  // if (center) {
  //   position.push("justify-center align-center")
  // }
  

  const childrenWithTypes = Array.isArray(props.children)
    ? props.children?.map?.((child:ReactNode) => {
        return {
          type: typeof child,
          isImage:
            typeof child === "string" &&
            (child.endsWith(".png") ||
              child.endsWith(".jpg") ||
              child.endsWith(".jpeg") ||
              child.endsWith(".svg")),
          child,
        };
      })
    : [{ type: typeof props.children, child: props.children }];
  console.log(
    "file: Section.tsx ~ line 15 ~ Section ~ childrenWithTypes",
    childrenWithTypes
  );

  positionsArr.push('section');
  if(testSquare){
    positionsArr.push('section-with-test-square');
  }

  positionsArr.push(positionStr);

  return (
    <div className={positionsArr.join(' ')}>
      {
        testSquare ? <div className="square"></div> : null
      }
    </div>
  );
}

export default Section;


const positions: any = {
  tl: `justify-start align-start`,
  tc: `align-start justify-center`,
  tr: `justify-end align-start`,
  cl: `justify-start align-center`,
  cc: `justify-center align-center`,
  cr: `justify-end align-center`,
  bl: `justify-start align-end`,
  bc: `justify-center align-end`,
  br: `justify-end align-end`,
  tbl: `justify-start align-stretch`,
  tbc: `justify-center align-stretch`,
  tbr: `justify-end align-stretch`,
  tlr: `justify-start align-stretch column`,
  clr: `justify-center align-stretch column`,
  blr: `justify-end align-stretch column`,
};

function useAnchorPositions(top: any, bottom: any, left: any, right: any) {

  let positionStr: string = '';

  if (top && bottom)
    positionStr += 'tb';
  else if (top)
    positionStr += 't';
  else if (bottom)
    positionStr += 'b';
  else
    positionStr += 'c';

  if (left && right)
    positionStr += 'lr';
  else if (left)
    positionStr += 'l';
  else if (right)
    positionStr += 'r';
  else
    positionStr += 'c';
  return { positionStr: positions[positionStr] };
}

function createPattern(scoreFn: any, buildFn: any) {
  return {
    getScore: scoreFn,
    buildComponents: buildFn,
  };
}

const headerAndTextPattern = createPattern(
  (children: any) => {
    let score = 100; //0-100
    let priority = 10; //1-10 (where 1 is higher)
    // children: [
    //   {
    //       "type": "string",
    //       "child": "Details"
    //   },
    //   {
    //       "type": "string",
    //       "child": "These are words that go here"
    //   }
    // ]

    //Both start with a capital letter
    if (children.length !== 2 || children.filter((child: any) => child.type === 'string') !== 2) {
      return { score: 0, priority };
    }
    const firstChildFirstLetter = children[0].child[0];
    const secondChildFirstLetter = children[1].child[0];
    const isFirstChildFirstLetterUppercase = firstChildFirstLetter === firstChildFirstLetter.toUpperCase();
    const isSecondChildFirstLetterUppercase = secondChildFirstLetter === secondChildFirstLetter.toUpperCase();

    if (!isFirstChildFirstLetterUppercase) {
      score -= 30;
    }
    if (!isSecondChildFirstLetterUppercase) {
      score -= 30;
    }
    if (children[0].length >= children[1].length) {
      score -= 20;
    }

    return { score, priority };
  },
  () => null,
);

const pictureAndLabelPattern = createPattern(
  (children: any) => {
    let score = 100; //0-100
    let priority = 10; //1-10 (where 1 is higher)
    // children: [
    //   {
    //       "type": "string",
    //       "isImage": true
    //       "child": "myFancyPic.png"
    //   },
    //   {
    //       "type": "string",
    //       "isImage": false
    //       "child": "The picture description"
    //   }
    // ]

    if (!children[0].child.isImage) {
      score = 0
    } else if (typeof children[1].child !== 'string') { 
      score = 0
    }
    if (!(children.child).endsWith('.png')){
      score -= 50
    }

    //Failure cases - we return a 0 score
    //!child[0].isImage
    //child[1] is not a string

    return { score, priority };
  },
  () => {
    //Can we build a dynamic text sizing component using layoutEffects and refs?
  },
);

const userFirstLastNamePattern = createPattern(
  (children: any) => {
    let score = 100; //0-100
    let priority = 10; //1-10 (where 1 is higher)
    // children: [
    //   {
    //       "type": "string",
    //       "isImage": true
    //       "child": "myFancyPic.png"
    //   },
    //   {
    //       "type": "string",
    //       "isImage": false
    //       "child": "The picture description"
    //   }
    // ]

    if (!children[0].child.isImage) {
      score = 0
    } else if (typeof children[1].child !== 'string') { 
      score = 0
    }
    if (!(children.child).endsWith('.png')){
      score -= 50
    }

    //Failure cases 

    return { score, priority };
  },
  () => {
    //Can we build a dynamic text sizing component using layoutEffects and refs?
  },
);
