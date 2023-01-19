import { useEffect, useState } from 'react';
import fetchData from './api/data.js';

const App = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData()
      setData(response)
    }
    getData()
  }, []);

  console.log('data:',data);
  return <div className="App"></div>;
}

export default App;
