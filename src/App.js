import React, {useState, useRef} from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id:2,
      text: '컴포넌트 스타일 해 보기',
      checked: false,
    },
    {
      id:3,
      text: '일정관리 앱 만들어보기',
      checked: false,
    }
  ]);
  //고유값으로 사용될 id
  //ref를 사용해서 변수에 담기
  const nextId = useRef(4);
  function onInsert(text){
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    }
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }
  //해당id항목 삭제하기
  function onRemove(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }
  //해당id항목 checked 반전
  function onToggle(id){
    setTodos(
      todos.map(todo=> todo.id === id ? {...todo, checked: !todo.checked} : todo)
    )
  }
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
