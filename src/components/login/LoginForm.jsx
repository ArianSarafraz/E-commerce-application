// import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import Loader from "../../ui/Loader";

function LoginForm() {
  //   const sampleUser = {
  //     username: "johnd",
  //     password: "m38rmF$",
  //   };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "johnd",
      password: "m38rmF$",
    },
  });

  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { username, password } = data;
    await login(username, password);
    navigate("/");
  };
  if (isLoading) return <Loader />;
  return (
    <div className="flex flex-col items-center py-20">
      <h2 className="text-3xl text-blue-50 font-bold text-center py-10">
        Online Shop
      </h2>
      <div className="login-form bg-white p-8 rounded-lg shadow-lg w-96 ">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <TextField
              name="username"
              register={register}
              validationSchema={{
                required: "Enter your username.",
                minLength: {
                  value: 4,
                  message: "Username needs to be at least 4 charaacters.",
                },
              }}
              required
              label="Username"
              type="text"
              errors={errors}
            />
          </div>
          <div className="mb-4">
            <TextField
              name="password"
              register={register}
              validationSchema={{
                required: "Enter your password.",
                minLength: {
                  value: 6,
                  message: "Password must contain at least 6 chracters",
                },
              }}
              required
              label="Password"
              type="password"
              errors={errors}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-950 text-white p-2 rounded mt-4 hover:opacity-80"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
