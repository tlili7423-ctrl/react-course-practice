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