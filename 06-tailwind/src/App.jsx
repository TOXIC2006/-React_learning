import React from "react";
import Section1 from "./compoents/section1/Section1";
// import Section2 from "./compoents/section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      intro: "Hi I am Rahul a passionate developer who loves building modern web applications",
      description: "Developer"
    },
    {
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      intro: "Hello I am Priya a creative designer focused on crafting beautiful and user friendly interfaces",
      description: "Designer"
    },
    {
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      intro: "Hey I am Aman an enthusiastic programmer exploring new technologies and improving coding skills daily",
      description: "Programmer"
    }
  ];
  return (
    <div>
      <Section1 />

    </div>
  )
}

export default App