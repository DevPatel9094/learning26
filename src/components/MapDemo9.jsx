import React from "react";


export const MapDemo9 = () => {  
var users = [
    { id: 1, name: "Dev", age: 23, gender: "male", city:" unjha"},
    { id: 2, name: "parthvi", age: 24, gender: "Female", city:" unjha" },
    { id: 3, name: "Harsh", age: 23, gender: "male", city:" surat" },
    { id: 4, name: "Yash", age: 23, gender: "male", city:" patan" },
    { id: 5, name: "Astha", age: 25, gender: "Female", city:" mahesana" },
  ];
  return (
    <div
      style={{
        color: "white",
        textAlign: "left",
        backgroundColor: "blueviolet",
        border:"3px solid white",
        padding:"10px",
        margin:"20px"
      }}
    >
      <h1>MapDemo9</h1><hr />
      {users.map((user) => (
        <h3>
          {user.id} = {user.name} - {user.age} - {user.gender}-{user.city}
        </h3>
      ))}
    </div>
  );
}
