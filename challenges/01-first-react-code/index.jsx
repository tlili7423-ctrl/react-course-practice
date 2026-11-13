 /*import { createElement} from "react";*/
 
// 1. Create. a root
 import { createRoot} from"react-dom/client";
 const root = createRoot(document.getElementById("root"))
  function MyAwesomeNavbar() {
     return  <nav> <h1>my awesome navbar </h1> </nav>
     
  }
 function Maincontent(){
   return <h1>Main Content</h1>
 }

//Render somme  markup to the root
 root.render(
    <div>
  <MyAwesomeNavbar/>
   <Maincontent/>
 </div>
 )


// const h1 = document.createElement("h1");
h1.className = "header";
h1.textContent = "this is declarative coding";
document.getElementById("root").appendChild(h1);
root.render(<h1 className="header">this is declarative coding</h1>);