import { getTodos, deleteTodo } from "../api/todos";
// components
import Header from "../components/Layout/Header";
// hook
import { useQuery, QueryClient, useMutation } from 'react-query';
// css
import styled from "styled-components";
import { BsTrash } from 'react-icons/bs';
import { Link } from "react-router-dom";

function Views() {
    const {isLoading, isError, data} = useQuery("todos", getTodos);

    const queryClient = new QueryClient();
    const mutation = useMutation(deleteTodo, {
      onSuccess: () => {
        // todos 이름으로 만들었던 query를 invalidate 함 (query key를 날려버림)
        queryClient.invalidateQueries("todos");
      }
    });

    const handleClickDeleteBtn = (id) => {
      mutation.mutate(id);
    };

    return (
      <div>
        <Header />
        <article>
          <h1>내 할일</h1>
          <StyledUl>
            {data?.map((todo) => {
              return (
                <StyledLi key={todo.id}>
                  <StyledLink to={`/views/${todo.id}`} state={todo}>
                    <div>
                      <h1>{todo.title}</h1>
                      <span>작성자 : {todo.writer}</span>
                    </div>
                  </StyledLink>
                  <button onClick={()=> handleClickDeleteBtn(todo.id)}><BsTrash/></button>
                </StyledLi>
              )
            })}
          </StyledUl>
        </article>
      </div>
    )
}

export default Views;

// csss
const StyledUl = styled.ul`
    padding-left: 1.5rem;
`;

const StyledLi = styled.li`
    list-style-type: none;

    border: 1px solid black;
    border-radius: 10px;

    width: 95vw;

    margin-top: 15px;
    padding: 10px 15px 30px;
`;

const StyledLink = styled(Link)`
    color: black;
    text-Decoration: none;
`;