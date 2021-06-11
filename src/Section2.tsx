import "./App.css";

function Section2(props: any) {
  const { left, right, center, top, bottom } = props;

  /*
    all of these will be true false values
    left - justify-start
    right - justify-end
    top - align-start
    bottom - align-end
    center - will be default
    
    */

  let position = [];

  if (left) {
    position.push("justify-start");
  } else if (right) {
    position.push("justify-end");
  } else {
    position.push("justify-center");
  }

  if (top) {
    position.push("align-start");
  } else if (bottom) {
    position.push("align-end");
  } else {
    position.push("align-center");
  }

  let finalPosition = position.join(" ");

  return (
    <div className={finalPosition + " section"}>
      <div className="square"></div>
    </div>
  );
}

export default Section2;
