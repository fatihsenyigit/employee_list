import React, { useState } from "react";
import List from "./components/List";
import data from "./helper/data";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / 5)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage-1) * 5;
  const currentPagePlayers = data.slice(startIndex, startIndex + 5)
  console.log(currentPagePlayers)
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>(Employees 1 to 5)</h5>
        {currentPagePlayers.map((person)=>(
          <List key={person.id} {...person}/>
        ))}
        
        <div className="btns">
          <button onClick={prevPage}>Prev</button>
          <button onClick={nextPage}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
