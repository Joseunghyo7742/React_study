import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';
function App() {
  const [counter, setValue] = useState(0); //useState가 배열 반환 , counter의 초기값=0
  const onClick = () => setValue((prev) => prev + 1);
  const [keyword, setKeyword] = useState('');
  const onChange = (event) => setKeyword(event.target.value); //argument =event, value를 setKeyword로

  useEffect(() => {
    console.log('I run only once.');
  }, []);

  useEffect(() => {
    if (keyword !== '' && keyword.length > 6)
      //5이 상의 입력이 들어와야 실행됨
      console.log('I run when keyworkd changed', keyword); //counter 말고 keyword가 변할 때만 리렌더 되도록 하고싶음
  }, [keyword]); //keyword가 변화할때만 코드를 실행해줘. 빈 array일 때는 한번만 실행됨

  useEffect(() => {
    if(counter!==0)
      console.log('I run when counter changed', counter);
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange} //event Listener
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
