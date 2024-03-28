import React, { useState } from "react";
import List from "./components/List";
import data from "./helper/data";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * 5;
  const currentPagePlayers = data.slice(startIndex, startIndex + 5);
  const totalPages = Math.ceil(data.length / 5);

  const prevPage = () => {
    const newPage = currentPage === 1 ? totalPages : currentPage -1;
    setCurrentPage(newPage);
  };

  const nextPage = () => {
    const newPage = currentPage === totalPages ? 1 : currentPage + 1;
    setCurrentPage(newPage)
  };
  
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>{`(Employees ${startIndex+1} to ${startIndex+5})`}</h5>
        {currentPagePlayers.map((person) => (
          <List key={person.id} {...person} />
        ))}

        <div className="btns">
          <button onClick={prevPage}>
            Prev
          </button>
          <button
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
