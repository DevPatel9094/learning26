import React from 'react'
import Table from './Table';

export default function Students() {
    let students = [
        {rollno:1, name:"Dev", age:22},
        {rollno:2, name:"Harsh", age:21},
        {rollno:3, name:"Yash", age:22}
    ];
  return (
    <div style={{textAlign:"center"}}>
        <h1>Students Details</h1>
        <Table data={students}/>
    </div>
  )
}