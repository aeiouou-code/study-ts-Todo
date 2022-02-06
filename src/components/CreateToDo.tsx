import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((prev) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...prev,
    ]);
    setValue("toDo", "");
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do!",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </Container>
  );
}

export default CreateToDo;

const Container = styled.div`
  margin-bottom: 20px;

  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  input {
    margin-right: 10px;
    padding: 5px;
  }

  button {
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.darkBgColor};
    font-weight: 500;
    padding: 7px;
  }
`;
