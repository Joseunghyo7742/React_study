import { useState, useEffect } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }

    setToDo(''); //empty the input
    setToDos((array) => [toDo, ...array]); //현재 Array를 받아옴 --> toDo와 기존 어레이 합침 // 리액트는 함수의 첫번째 argument로 현재 state를 보냄
    console.log(toDos);
  };

  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  ); //map은 하나의 배열에 있는 item을 내가 원하는 무엇이든지로 바꿔주는 역할, 새로운 배열로 리턴.
}

export default App;
