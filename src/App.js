import './App.css';
import { useState, useEffect } from 'react';
import listOfVideo from './data/listOfVideo';
import List from './components/List';

function App() {
  const [list, setList] = useState(listOfVideo);

  useEffect(() => {
    setList(listOfVideo);
  }, [])

  return (
    <List list={list} />
  );
}

export default App;