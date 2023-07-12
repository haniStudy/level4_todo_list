// component
import Header from "../components/Layout/Header";
import Section from "../components/Submit/Section";
// api
import { addTodo } from "../api/todos";
// hook
import useInput from "../hooks/useInput";
import { QueryClient, useMutation } from 'react-query';

function Submit() {
  const [writer, setWriter, handleChangeWriter] = useInput('', 5);      // 작성자
  const [title, setTitle, handleChangeTitle] = useInput('', 50);        // 제목
  const [content, setContent, handleChangeContent] = useInput('', 200); // 내용

  const getErrorMsg = (errorCode, params) => {
    switch (errorCode) {
      case "01":
        return alert(`[필수 입력 값 검증 실패 안내]\n\n작성자, 제목, 내용은 모두 입력돼야 합니다. 입력값을 확인해주세요.\n입력된 값(작성자: '${params.writer}', 제목 : '${params.title}', 내용 : '${params.content}')`);
      default:
        return `시스템 내부 오류가 발생하였습니다. 고객센터로 연락주세요.`;
    }
  };    

  const queryClient = new QueryClient();
  const mutation = useMutation(addTodo, {
      onSuccess: () => {
        // todos 이름으로 만들었던 query를 invalidate 함 (query key를 날려버림)
        queryClient.invalidateQueries("todos");
      }
  });

  const handleSubmitButtonClick = (e) => {
      e.preventDefault(); // submit의 고유 기능인, 새로고침(refresh)을 막아주는 역함

      if (!writer || !title || !content) return getErrorMsg("01", { writer, title, content });
    
      const newTodo = {
          writer,
          title,
          content,
          isDone: false,
        };
        mutation.mutate(newTodo);
    
        // 초기화
        setWriter('')
        setTitle('');
        setContent('');
  };

  return (
    <div>
        <Header />
        <form onSubmit={handleSubmitButtonClick}>
          <Section type={'작성자'} val={writer} handleChange={handleChangeWriter} max={5}/>
          <Section type={'제목'} val={title} handleChange={handleChangeTitle} max={50}/>
          <Section type={'내용'} val={content} handleChange={handleChangeContent} max={200}/>
          <button type='submit'>추가하기</button>
        </form>
    </div>
  )
}

export default Submit;