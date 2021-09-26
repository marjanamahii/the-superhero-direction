import './App.css';
import { useEffect } from 'react';
import Book from './components/Book/Book';
import Header from './components/Header/Header';


function App() {
  useEffect(() => {
    fetch('./books.JSON')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Book></Book>
    </div>
  );
}
export default App;
