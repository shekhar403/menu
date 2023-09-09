import logo from './logo.svg';
import './App.css';
import SearchBarComponent from './components/SearchBarComponent';
import CardHolderComponent from './components/CardHolderComponent';
import { useState } from 'react';

function App() {
  let [searchResults, setSearchResults] = useState({meals: []});

  return (
    <div className="App">
      <div className="d-inline-block mx-auto">
        <h1 className='my-5 d-inline-block px-3'>MealsDB</h1>
      <SearchBarComponent setSearchResults={setSearchResults} />
      <CardHolderComponent meals={searchResults.meals} />
      </div>
    </div>
  );
}

export default App;
