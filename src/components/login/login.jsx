import logo from "../../assets/images/logo-no-background.png";
import { FaLock } from "react-icons/fa";
import { MdEmail, MdRemoveRedEye } from "react-icons/md";
const LoginComponent = () => {
  document.title = "Login";

  function togglePassword() {
    const password = document.getElementById("password");

    if (password.type == "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900" style={{ overflowX: "hidden" }}>
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage: `url(
              https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80
            )`,
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ticket Express
              </h2>

              <p className="max-w-xl mt-3 text-gray-300">
                Book your tickets with ease and confidence and enjoy your ride.
                Use this portal to log into the system.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <img
                  className="w-auto h-32 sm:h-32"
                  src={logo}
                  alt="company logo"
                />
              </div>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Sign in to access your account
              </p>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Email Address
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <MdEmail />
                    </span>
                    <input
                      type="text"
                      id="username"
                      className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="example@example.com"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <FaLock />
                    </span>
                    <input
                      type="password"
                      id="password"
                      className="rounded-none bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your Password"
                    />
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <MdRemoveRedEye
                        className="cursor-pointer"
                        onClick={togglePassword}
                      />
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{" "}
                <a
                  href="/auth/register"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Register
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
