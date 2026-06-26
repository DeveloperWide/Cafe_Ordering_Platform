const Signup = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold italic text-secondary">
        Welcome on BrewCafe
      </h1>
      <form className="signup_card border border-white/15 rounded-2xl shadow shadow-xl/30 shadow-secondary">
        <div className="name_field">
          <label htmlFor="name">Name : </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="email_field">
          <label htmlFor="email">Email : </label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="passowrd_field">
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" id="password" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
