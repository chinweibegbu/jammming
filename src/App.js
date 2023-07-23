import './App.css';
import SearchBar from './components/SearchBar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Ja<span id='title-center'>mmm</span>ing</h2>
      </header>
      <SearchBar />
      <Content />
    </div>
  );
}

export default App;
