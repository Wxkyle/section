import React from "react";
import { createPattern, registerPattern } from ".";

export const pictureAndLabelPattern = createPattern(
  "pictureAndLabelPattern",
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
    if (!children.some((child: any) => child.isImage)) {
      return { score: 0, priority };
    }

    if (children[0].isImage && children[1].type !== "string") {
      score -= 90;
    } else if (children[1].isImage && children[0].type !== "string") {
      score -= 90;
    }

    //Failure cases - we return a 0 score
    //!child[0].isImage
    //child[1] is not a string
    return { score, priority };
  },
  (children: any[]) => (
    <div>
      {children[0].isImage ? (
        <img src={children[0].node} />
      ) : (
        <div style={{}}>{children[0].node}</div>
      )}
      {children[1].isImage ? (
        <img src={children[1].node} />
      ) : (
        <div style={{}}>{children[1].node}</div>
      )}
    </div>
  )
);

registerPattern(pictureAndLabelPattern);
