import React from "react";

//https://reactjs.org/docs/context.html

interface IReactMagicStylingContext {
  colors: { primary: string; secondary: string; separatorGray: any };
  spacing: {
    base: number;
  };
}

export default React.createContext<IReactMagicStylingContext>({
  colors: { primary: "", secondary: "", separatorGray: false },
  spacing: { base: 2 },
});
