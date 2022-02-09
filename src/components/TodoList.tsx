import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  return (
    <ToDoContainer>
      <Title>To-Do List</Title>
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </ToDoContainer>
  );
}

export default ToDoList;

const ToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  padding: 20px;
  width: 400px;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 8px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`;

const SubTitle = styled.div`
  width: 250px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid gray;
`;

const List = styled.ul`
  background-color: ${(props) => props.theme.cardColor};
  margin-bottom: 20px;
`;
