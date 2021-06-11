import React, { FunctionComponent } from 'react';

export interface ISectionProps {}

const Section: FunctionComponent<ISectionProps> = function Section(props) {
  // 1) Loop over the props.children
  // 2) Give them to the different patterns
  //  Get a score back from each pattern
  //  Show the best match
  // 3) Use the pattern build the right components around each child

  const childrenWithTypes = Array.isArray(props.children)
    ? props.children?.map?.((child) => {
        return {
          type: typeof child,
          isImage:
            typeof child === 'string' &&
            (child.endsWith('.png') || child.endsWith('.jpg') || child.endsWith('.jpeg') || child.endsWith('.svg')),
          child,
        };
      })
    : [{ type: typeof props.children, child: props.children }];
  console.log('file: Section.tsx ~ line 15 ~ Section ~ childrenWithTypes', childrenWithTypes);

  return <div className="section"></div>;
};

export default Section;

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
