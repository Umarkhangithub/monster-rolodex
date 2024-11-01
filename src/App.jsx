import { useState, useEffect } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/searchBox/SearchBox";

import './App.css'

function App() {
  const [searchField, setsearchField] = useState([]);
  const searchHandler = (e) => {
    setsearchField(e.target.value);
  };
  const [monster, setmonster] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchmonster = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setmonster(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchmonster();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // filter Monsters
  const filterMonster = monster.filter((monsters) => {
    return monsters?.name.toLowerCase().includes(searchField);
  });
  // console.log('filter monster is : '+ filterMonster)

  return (
    <> 
      <div className="App">
        <h1>Monster Rolodex</h1>
       <SearchBox placeholder={'search monsterr'} handleChange={searchHandler} />
        <CardList monster={filterMonster} />
      </div>
    </>
  );
}
export default App;
