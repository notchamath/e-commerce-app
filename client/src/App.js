import axios from 'axios';

function App() {

  const API_URL = '/api/products/';

  const getData = async () => {
    const res = await axios.get(API_URL);
    console.log(res);
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={getData}>get data</button>
    </div>
  );
}

export default App;
