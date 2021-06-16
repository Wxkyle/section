import React from "react";
import { createPattern, registerPattern } from ".";
import { useContext } from "react";
import ReactMagicStylingContext from "../ReactMagicStylingContext";

export const carouselPattern = createPattern(
  "carouselPattern",
  (children: any) => {
    let score = 100; //0-100
    let priority = 10; //1-10 (where 1 is higher)
    // children: [
    //   {
    //       "type": "string",
    //       "isImage": true
    //       "child": "user"
    //   },
    //   {
    //       "type": "object",
    //       "isImage": false
    //       "child": "{first_name: undefined}"
    //   },
    //   {
    //       "type": "object",
    //       "isImage": false
    //       "child": "{last_name: undefined}"
    //   }
    // ]

    if (!children.isArray) {
      return { score: 0, priority };
    }
    if (children[0].node.startsWith("[")) {
      return { score: 100, priority };
    }

    //Failure cases
    return { score, priority };
  },
  (children: any[]) => {
    const styleValues = useContext(ReactMagicStylingContext);
    console.log("stylevalues", styleValues);

    return (
      <div
        style={{
          height: "30%",
          width: "30%",
          display: "flex",
          paddingLeft: styleValues.spacing.base * 3,
          paddingRight: styleValues.spacing.base * 3,
          paddingTop: styleValues.spacing.base * 3,
          paddingBottom: styleValues.spacing.base * 3,
          flexDirection: "column",
        }}
      >
        {children.map((child) => (
          <input
            style={{}}
            placeholder={
              child.type === "string" ? child.node : Object.keys(child.node)[0]
            }
          />
        ))}
      </div>
    );
  }
);

registerPattern(carouselPattern);
