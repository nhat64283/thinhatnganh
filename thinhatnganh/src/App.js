import './App.css';
import useStorage from './hooks/storage';
import { useState } from 'react';

function App() {
  const { data, arr, deleteName } = useStorage({
    initData: ["Huyen", "Hoa", "Hung", "Long"]
  })
  const [name, setName] = useState("");
  return (
    <div className="App">
      <div>学生一覧: [{data.toString()}]</div>
      <br></br>
      <div>検索名前:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <p> </p>
        <button type="button" onClick={() => deleteName(name)}>確定</button>
      </div>
      <br></br>

      <div>検索名前: {name}</div>
      <br></br>
      <div>位置: {arr.toString()}</div>
    </div>
  );
}

export default App;