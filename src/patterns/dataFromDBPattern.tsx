import React from "react";
import { createPattern, registerPattern } from ".";
import { useContext } from "react";
import ReactMagicStylingContext from "../ReactMagicStylingContext";

export const dataFromDBPattern = createPattern(
  "dataFromDBPattern",
  (children: any) => {
    let score = 100; //0-100
    let priority = 10; //1-10 (where 1 is higher)
    // children: [
    //   {
    //       "type": "string",
    //       "isImage": true
    //       "node": "myFancyPic.png"
    //   },
    //   {
    //       "type": "string",
    //       "isImage": false
    //       "node": "The picture description"
    //   }
    // ]
    if (
      !children.some(
        (child: any) => child.type === "string" && child.node.startsWith(".")
      )
    ) {
      return { score: 0, priority };
    } else if (
      children[0].node.startsWith(".") ||
      children[0].type !== "string"
    ) {
      return { score: 0, priority };
    }

    return { score, priority };
  },
  (children: any[]) => {
    const styleValues = useContext(ReactMagicStylingContext);
    console.log("stylevalues", styleValues);

    return (
      <div
        style={{
          paddingLeft: styleValues.spacing.base * 6,
          paddingRight: styleValues.spacing.base * 6,
          paddingTop: styleValues.spacing.base * 8,
          paddingBottom: styleValues.spacing.base * 8,
          flexDirection: "column",
        }}
      >
        {children.map((child) => (
          <div>{child.node}</div>
        ))}
      </div>
    );
  }
);

registerPattern(dataFromDBPattern);
