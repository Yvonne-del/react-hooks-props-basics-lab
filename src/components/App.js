import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";


// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} color={user.color} city={user.city}/>
      <About bio={user.bio} git={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default App;
