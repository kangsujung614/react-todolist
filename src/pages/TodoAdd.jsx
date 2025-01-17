import { Link, useLocation } from "react-router-dom";

function TodoAdd(){
  const location = useLocation();
  const items = location.state.data;

  return(
    <div id="main">
      <h2>할일 추가</h2>
      <div className="todo">
        <form>
          <label htmlFor="title">제목 : </label>
          <input type="text" id="title" autoFocus />
          <br />
          <label htmlFor="content">내용 : </label>
          <textarea id="content" cols="23" rows="5"></textarea>
          <br />
          <Link to="../tododetail/1" state={{data:items}}>추가</Link>
          <Link to="../todolist">취소</Link>
        </form>
      </div>
    </div>
  )
}

export default TodoAdd;