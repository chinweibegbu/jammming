import './App.css';
import SearchBar from './components/SearchBar';
import Content from './components/Content';
import { data } from './fetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Ja<span id='title-center'>mmm</span>ing</h2>
      </header>
      <SearchBar />
      <Content searchResults={data} />
    </div>
  );
}

export default App;
