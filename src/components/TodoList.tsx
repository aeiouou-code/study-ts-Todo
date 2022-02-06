import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <ToDoContainer>
      <Title>To-Do List</Title>
      <CreateToDo />
      <SubTitle>To Do</SubTitle>
      <List>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </List>
      <SubTitle>Doing</SubTitle>
      <List>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </List>
      <SubTitle>Done</SubTitle>
      <List>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </List>
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
