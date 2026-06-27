import Input from "./Input";

interface FormProps {
  type: "signup" | "login";
}

const Form = ({ type }: FormProps) => {
  return (
    <form className="border border-white/15 rounded-2xl shadow shadow-xl/30 shadow-secondary px-3 py-8 flex flex-col justify-center w-80 md:w-xl lg:w-2xl ">
      <h1 className="self-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        {type == "signup" ? "Welcome on BrewCafe" : "Welcome Back on BrewCafe"}
      </h1>
      <hr className="w-full text-white/10 mb-5 mt-4" />
      {type == "signup" && (
        <Input type="text" name="name" placeholder="John doe" />
      )}
      <Input type="email" name="email" placeholder="support@focushub.co.in" />
      <Input type="password" name="password" placeholder="L@Dh*h2-nW>JPbG" />

      <button className="self-end relative z-0 rounded font-semibold text-gray-950 bg-secondary/90 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-secondary cursor-pointer after:transition-[all_0.3s_ease]  hover:after:w-full mx-2 my-2 ">
        {type == "signup" ? "Signup" : "Login"}
      </button>
    </form>
  );
};

export default Form;
