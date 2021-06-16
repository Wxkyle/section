import "./App.css";
import React, { FunctionComponent, ReactNode } from "react";
import { useAnchorPositions } from "./useAnchorPositions";
import { patterns } from "./patterns";
import { useContext } from "react";
import ReactMagicStylingContext from "./ReactMagicStylingContext";

export interface ISectionProps {}

function Section(props: any) {
  const { left, right, center, top, bottom, testSquare, separatorGray } = props;

  const styleValues = useContext(ReactMagicStylingContext);
  console.log("stylevalues", styleValues);

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

  var { positionStr }: { positionStr: string } = useAnchorPositions(
    top,
    bottom,
    left,
    right
  );

  const childrenWithTypes = Array.isArray(props.children)
    ? props.children?.map?.((child: ReactNode) => {
        return {
          type: typeof child,
          isArray: Array.isArray(child),
          isImage:
            typeof child === "string" &&
            (child.endsWith(".png") ||
              child.endsWith(".jpg") ||
              child.endsWith(".jpeg") ||
              child.endsWith(".svg")),
          node: child,
        };
      })
    : typeof props.children !== "undefined"
    ? [{ type: typeof props.children, node: props.children }]
    : [];
  console.log("Section -> childrenWithTypes", childrenWithTypes);

  const scoredPatterns = childrenWithTypes.length
    ? patterns.map((pattern) => ({
        ...pattern.getScore(childrenWithTypes),
        ...pattern,
      }))
    : [];

  positionsArr.push("section");
  if (testSquare) {
    positionsArr.push("section-with-test-square");
  }

  positionsArr.push(positionStr);
  // style = { paddingLeft = styleValues.spacing.base * 6 };
  return (
    <div>
      <div className={positionsArr.join(" ")}>
        {testSquare ? <div className="square"></div> : null}
      </div>
      <div>
        {scoredPatterns.length > 0
          ? scoredPatterns
              .sort((a, b) => b.score - a.score)
              .filter((x, idx) => idx === 0)
              .map((res) => {
                return (
                  res.buildComponents(childrenWithTypes) || (
                    <div style={{ margin: 8 }}>
                      <div>{res.name}</div>
                      <div>score: {res.score}</div>
                      <div>priority: {res.priority}</div>
                    </div>
                  )
                );
              })
          : null}
      </div>
      {separatorGray ? (
        <div style={{ borderBottom: `2px solid ${separatorGray}` }}></div>
      ) : null}
    </div>
  );
}

export default Section;
