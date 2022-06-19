import React, { useState, useEffect } from "react";
import '../../src/App.css'

function JokesSpot() {
  const [users, setUsers] = useState([])
  const fetchData = () => {
    fetch("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10").then(result => {
      return result.json()
    }).then(resp => {
      // console.log(resp.jokes)
      setUsers(resp.jokes);
    })
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="container"  >
      <table className="table table-hover  table-condensed table-bordered" >
        <thead>
          <tr className="font-family">
            <td >Category</td>
            <td>Flags</td>
            <td >Id</td>
            <td>Jokes</td>
            <td >Lang</td>
            <td>Safe</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr className="font-family">
              <td > {item.category}</td>
              <td>{item.flags.explicit}</td>
              <td  >{item.id}</td>
              <td>{item.joke}</td>
              <td>{item.lang}</td>
              <td>{item.safe}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JokesSpot;
