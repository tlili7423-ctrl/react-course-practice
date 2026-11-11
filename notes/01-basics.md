   why learn react ?  
   1 why you should care about react
  2 why up new React project
  3 Jsx
  4 Custom components
 5 styling


   building static pages react

   2// calllenge re-witre  the  first lines of react code we just had
   // you can  render anything  you want to the screen doesn t have t o be an h1 element
   import  {createRoot} from"react-dom/client"
// 1. Greate a root
 const root= createRoot(document.getElementById("root"))

//Render somme  markup to the root
root.render( <ul> 
     <li> first item</li>
        <li> second item</li>
            <li>  third item </li>
)

//3/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2–3 list items inside
 * with why you're excited to be learning React.
 */
  import  {createRoot} from"react-dom/client"
const root = createRoot(document.getElementById("root"));
 
root.render(<ul>
    <li> want to build web apps </li>
    <li> I'm learning React
        </li>
        </ul>
)
   Render


Rendering is the process in which React calls your components to work out what should appear on the screen.


Declarative


In declarative programming, you describe what the UI should look like for a given state, and React figures out how to update the screen.


/// local setup with vite
// Libraris    
Collection of resable code
Reduces need to wirte
restitive/complex things 
scratch
you control how /when it s used.
no /few boundaries

/ frameworks
/ predetermind architecture -you follow specified pattern of development
 you work within the boundaries
 set by the freamewok 
 right and worong ways to use it
 
 ## History of Web Frameworks and Libraries

```
~2000   Plain JavaScript + HTML. Pages are mostly static.
  |
2005    AJAX: pages can load data without a full reload.
  |
2006    jQuery ............ library    (makes the DOM easy to use)
  |
2010    AngularJS ......... framework  (made by Google)
  |
2013    React ............. library    (made by Facebook, for UI)
  |
2014    Vue ............... framework  (easy to learn, progressive)
  |
2016    Angular 2+ ........ framework  (full rewrite of AngularJS)
  |
2019    React Hooks ....... useState and useEffect arrive
  |
2022    React 18 .......... newer rendering features
  |
2022+   Next.js, Vite, Angular Signals, React 19
```

## Library vs Framework

- **Library**: you call it. You are in control.
- **Framework**: it calls your code. It controls the structure.

## Why React?

- **Composable**: build the UI from small reusable pieces.
- **Declarative**: describe what the UI should look like, not the steps.
- React is a library for UI. Angular is a full framework.


 why choose React ?
 . Highest job demand
 . largest ecoseystem/commmunity
 les magic
  composable /Declarative
  Active development

  when you might not 
  wat a   Framework
  samll projects 
  network load conncerns
  Learning curve
  Maintenance courerns
  lncompatibility with existing codebase
  //leson react.createElement()