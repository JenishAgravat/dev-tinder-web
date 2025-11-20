const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-500 via-red-500 to-orange-400 p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-md p-8 text-center text-white">
        <h1 className="text-4xl font-bold mb-2 tracking-wide">🔥 DevTinder</h1>
        <p className="text-pink-100 mb-8">Connect with awesome developers 💻❤️</p>

        <form className="space-y-5">
            <div>
            <input
              type="string"
              placeholder="First Name"
              className="w-full p-3 rounded-xl bg-white/20 placeholder-white/70 text-white outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div>
            <input
              type="string"
              placeholder="Last Name"
              className="w-full p-3 rounded-xl bg-white/20 placeholder-white/70 text-white outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-white/20 placeholder-white/70 text-white outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-xl bg-white/20 placeholder-white/70 text-white outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-pink-600 font-semibold py-3 rounded-xl hover:bg-pink-100 transition-all duration-200"
          >
            SignUp
          </button>
        </form>

      </div>
    </div>
  );
};

export default Signup;
