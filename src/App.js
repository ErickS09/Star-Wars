import React, { useEffect, useState } from 'react';
import Detail from './components/Detail'
import Home from './components/Home'
import Pages from './components/Pages';

function App() {

  const [state, setState] = useState([])
  const [info, setInfo] = useState({})
  const initialurl = 'https://swapi.dev/api/people/'
  const caracters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setState(data.results)
        setInfo(data)
      })
      .catch(error => console.log(error))
  }

  const onPrevious = () => {
    caracters(info.previous)
  }

  const onNext = () => {
    caracters(info.next)
  }

  useEffect(() => {
    caracters(initialurl);

  }, [])

  return (
    <>
      <Detail brand='Star Wars' />
      <div className='container mt-5'>
        <Pages prev={info.next} sig={info.previous} onPrevious={onPrevious} onNext={onNext} />
        <Home star={state} />
        <Pages prev={info.next} sig={info.previous} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </>
  );
}

export default App;

