### Context

Context is a way to do a useState that can be access anywhere

Add a styling context to the application

1. Create a new file `ReactMagicStylingContext.tsx`
2. Place this code in it:

```
    import React from "react";

    //https://reactjs.org/docs/context.html

    interface IReactMagicStylingContext {
        colors: { primary: string; secondary: string };
        spacing: {
            base: number,
        }
    }

    export const ReactMagicStylingContext = React.createContext<IReactMagicStylingContext>(
        { colors: { primary: "", secondary: "" } } //try putting null here instead
    );
```

3. Import ReactMagicStylingContext in App.js
4. Each context has a `.Provider` that serves as a top level pointer to the "store"
   Wrapp the whole app in <ReactMagicStylingContext.Provider> ... </ReactMagicStylingContext.Provider>
5. Add a value to it with a default primary color and secondary color:

```
 <ReactMagicStylingContext.Provider value={{ colors: { primary: "COLOR HERE", secondary: "COLOR HERE" } }}> ... </ReactMagicStylingContext.Provider>
```

The first part of context is done. Now every component can ask for this context and get whatever you put on value! Let's see how that's done

1. In Section import ReactMagicStylingContext
2. import useContext from react
3. place the hook in the start of the Section component:
   `const styleValues = useContext(ReactMagicStylingContext);` \* Note: We have to pass in which context we want. We will want more than one.
4. Log out `styleValues` and you should see the values you put on the Provider in the first part
   `styleValues.color.primary`
   `styleValues.color.secondary`
   `styleValues.spacing.base`
5. Change the values in the Provider
6. Use the values to change the color of the testSquare to match primary
7. Place the same code from this part in headerAndTextPattern together with styleValues in there. Step 3 goes in the second function

### Implement patterns

#### Update Section to use some sort of default padding ---

1. on the left and right
   Padding should be context.spacing.base \* 6 (aka base6)

2. on the top and the bottom do base8

#### Update Section to support separator

1. Add a new prop to Section called separator:boolean
2. Add a new color to the context: separatorGray
3. Add the color in App.js to the context object you make (have it be a light gray)

In Section
If separator is truthy
Add a bottom border to your positionsArr

- height = base1
- color = grayColor

#### Update headerAndTextPattern to use spacing

Add bottom padding to the title = base3

#### Update pictureAndLabelPattern

All pictures need to be surrounded by a default maxWidth = 100%
Add Space between the two = base3

#### Update pictureAndLabelPattern to be called picturePattern

It scores 100 even if there is no second child and no text
If there is only an image (no other children) the apply margin: -base6

### Update formPattern

Form should go down, not sideways

Default space between each input box = base3
Padding in each inputbox = base3

#### carouselPattern

create a file carouselPattern

if child.isArray && every child in the array is a string and isImage

return .map over the photos and show each one at 30% with and height=30% width

in ynative
you can find:
/src/screens/listing/ListingCarousel.tsx

That will give you the third party to install via yarn add ...
then you can copy how it is imported, and try to build a carousel

#### imageListPattern

Same as for carousel except the images go down the page

#### Add in React-router

Make a screen for YoodlizeListingDetails
Use the sections we built above to mimic the ListingDetailScreen as much as possible

#### IF You get to this point before I'm available

Make more yoodlize screens and mimic them as much as possible
Try to find screens with differen patterns
If you got here without help, then patterns are hopefully making more sense
Try implementing new patterns on your own to be able to build Yoodlize sections
