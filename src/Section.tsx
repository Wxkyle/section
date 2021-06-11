import "./App.css";
import React, { FunctionComponent, ReactNode } from "react";

export interface ISectionProps {}

function Section(props: any) {
  const { left, right, center, top, bottom } = props;

  console.log("PROPS", { left, right, center, top, bottom });
  /*
    all of these will be true false values
    left - justify-start
    right - justify-end
    top - align-start
    bottom - align-end
    center - will be default
    
    */



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
  }

  let positionStr:string = ''
  
    if (top && bottom) positionStr += 'tb'
    else if (top)  positionStr += 't'
    else if (bottom)  positionStr += 'b'
    else  positionStr += 'c'

    if (left && right)positionStr += 'lr'
    else if (left) positionStr += 'l'
    else if (right) positionStr += 'r'
    else positionStr += 'c'
  
  

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
  

  // const childrenWithTypes = Array.isArray(props.children)
  //   ? props.children?.map?.((child:ReactNode) => {
  //       return {
  //         type: typeof child,
  //         isImage:
  //           typeof child === "string" &&
  //           (child.endsWith(".png") ||
  //             child.endsWith(".jpg") ||
  //             child.endsWith(".jpeg") ||
  //             child.endsWith(".svg")),
  //         child,
  //       };
  //     })
  //   : [{ type: typeof props.children, child: props.children }];
  // console.log(
  //   "file: Section.tsx ~ line 15 ~ Section ~ childrenWithTypes",
  //   childrenWithTypes
  // );

  // if(top && bottom){
  //   position.push("")
  // }

  let finalPosition = positions[positionStr];

  return (
    <div className={finalPosition + " section"}>
      <div className="square"></div>
    </div>
  );
}

export default Section;
