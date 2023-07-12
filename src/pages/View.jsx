// components
import Header from "../components/Layout/Header";
//
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';
import { useState } from "react";

function View() {
  const location = useLocation();
  const todo = location.state;

  // modal
  const modalFun = () => {

  };
  const [modal, setModal] = useState(false);

  return (
    <div>
        <Header />
        <article>
          <section>
            <span>id: ({todo.id})</span>
            <Link to='/views'>이전으로</Link>
          </section>
          <section>{todo.title}</section>
          <section>{todo.content}</section>
          <button>수정</button>
        </article>
    </div>
  )
}

export default View;