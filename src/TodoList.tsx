import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();

  const onValid = (data: any) => {
    console.log(data);
  };

  console.log(formState.errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("Email", { required: true })} placeholder="Email" />
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
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
