import { useForm } from "react-hook-form";

interface IForm {
  Email: string;
  FirstName: string;
  LastName: string;
  Password: string;
  Password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      Email: "@naver.com",
    },
  });

  const onValid = (data: IForm) => {
    if (data.Password !== data.Password1) {
      setError(
        "Password1",
        { message: "Passwords are not the same." },
        { shouldFocus: true }
      );
    }
    console.log(data);
  };

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("Email", {
            required: "Email required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only 'naver.com' emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.Email?.message}</span>
        <input
          {...register("FirstName", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("LastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("Password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short!",
            },
          })}
          placeholder="Password"
        />
        <input
          {...register("Password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short!",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors.Password1?.message}</span>
        <button>Add</button>
        <span>{errors.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
