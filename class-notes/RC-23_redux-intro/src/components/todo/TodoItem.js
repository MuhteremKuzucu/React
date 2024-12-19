import React from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import { degistir, sil } from "../../redux/actions/todoActions";


const TodoItem = ({gorev}) => {


  const dispatch=useDispatch()



  return (
    <div
      style={{
        textDecoration: gorev.bittiMi===true ? "line-through" : "none",
        background: gorev.bittiMi ? "#A9A9A9" : "orange",
        borderRadius: "5px",
      }}
      className="todo-list"
    >
      <h2 className="todoText">{gorev.yapilacak}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            onClick={()=>dispatch(degistir(gorev.id))}
           

           
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={()=>dispatch(sil(gorev))}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
