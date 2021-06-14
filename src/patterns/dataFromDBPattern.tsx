import React from "react";
import { createPattern, registerPattern } from ".";

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
    if (!children.some(
      (child: any) => child.type === "string" && child.node.startsWith(".")
    )) {
      return { score: 0, priority };
    } else if (children[0].node.startsWith(".") ||
      children[0].type !== "string") {
      return { score: 0, priority };
    }

    return { score, priority };
  },
  (children: any[]) => (
    <div>
      {children.map(child => <div>{child.node}</div>)}
    </div>
  )
);

registerPattern(dataFromDBPattern);
