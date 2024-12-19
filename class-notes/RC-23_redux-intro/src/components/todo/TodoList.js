

import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  //ekrana basılacak dizi reducer dan gelsin

  const{gorevler}=useSelector((state)=>state.todoReducer)


  return (
    <div>
      
      {gorevler.map((gorev)=>
        <TodoItem key={gorev.id} gorev={gorev}/>
      )}
      
    
      
    </div>
  );
};

export default TodoList;
