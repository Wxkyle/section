import React from "react";
import { createPattern, registerPattern } from ".";
import { useContext } from "react";
import ReactMagicStylingContext from "../ReactMagicStylingContext";

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

export const headerAndTextPattern = createPattern(
  "headerAndTextPattern",
  (children: any) => {
    let score = 100; //0-100
    let priority = 10; //1-10 (where 1 is higher)

    //Both start with a capital letter
    if (
      children.length !== 2 ||
      !children.every((child: any) => child.type === "string")
    ) {
      return { score: 0, priority };
    }

    if (children.isImage) {
      return { score: 0, priority };
    }
    const firstChildFirstLetter = children[0].node[0];
    const secondChildFirstLetter = children[1].node[0];
    const isFirstChildFirstLetterUppercase =
      firstChildFirstLetter === firstChildFirstLetter.toUpperCase();
    const isSecondChildFirstLetterUppercase =
      secondChildFirstLetter === secondChildFirstLetter.toUpperCase();

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

  (children: any[]) => {
    //Put the context hook here
    const styleValues = useContext(ReactMagicStylingContext);
    console.log("stylevalues", styleValues);
    //
    return (
      <div
        style={{
          paddingLeft: styleValues.spacing.base * 6,
          paddingRight: styleValues.spacing.base * 6,
          paddingTop: styleValues.spacing.base * 8,
          paddingBottom: styleValues.spacing.base * 8,
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            paddingBottom: styleValues.spacing.base * 3,
          }}
        >
          {children[0].node}
        </div>
        <div>{children[1].node}</div>
      </div>
    );
  }
);

registerPattern(headerAndTextPattern);
