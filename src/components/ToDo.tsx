import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      console.log(oldToDo, newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <TodoWrapper>
      <div>{text}</div>
      <ButtonWrapper>
        {category !== "DOING" && (
          <button name="DOING" onClick={onClick}>
            Doing
          </button>
        )}
        {category !== "TO_DO" && (
          <button name="TO_DO" onClick={onClick}>
            To-Do
          </button>
        )}
        {category !== "DONE" && (
          <button name="DONE" onClick={onClick}>
            Done
          </button>
        )}
      </ButtonWrapper>
    </TodoWrapper>
  );
}

export default ToDo;

const TodoWrapper = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 250px;
  margin-bottom: 10px;

  button {
    margin-left: 10px;
    padding: 5px;
    background-color: #e1e1e1;
    color: ${(props) => props.theme.darkBgColor};
    font-size: 14px;
    :hover {
      background-color: whitesmoke;
      transition: background-color 0.5s;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
