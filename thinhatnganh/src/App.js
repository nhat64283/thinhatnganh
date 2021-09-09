import './App.css';
import useStorage from './hooks/storage';
import { useState } from 'react';

function App() {
  const { data, arr, deletenewName } = useStorage({
    inputData: ["Huyen", "Hoa", "Hung", "Long"]
  })
  const [newName, setnewName] = useState("");
  return (
    <div classnewName="App">
      <div>学生一覧: [{data.toString()}]</div>
      <br></br>
      <div>検索名前:
        <input type="text" value={newName} onChange={(e) => setnewName(e.target.value)}></input>
        <p> </p>
        <button type="button" onClick={() => deletenewName(newName)}>確定</button>
      </div>
      <br></br>

      <div>検索名前: {newName}</div>
      <br></br>
      <div>位置: {arr.toString()}</div>
    </div>
  );
}

export default App;