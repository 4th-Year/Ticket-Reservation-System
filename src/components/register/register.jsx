import { MdEmail } from "react-icons/md";
import { FaAddressCard, FaLock, FaMobile, FaUserCircle } from "react-icons/fa";
import logo from "../../assets/images/logo-no-background.png";
import { BsPersonVcardFill } from "react-icons/bs";
import { useState } from "react";

export default function RegisterComponent() {
  document.title = "Register";

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNIC] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");

  function reset() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setNIC("");
    setPassword("");
    setConPassword("");
    setGender("");
    setMobile("");

    if (document.getElementById("male").checked) {
      document.getElementById("male").checked = false;
    } else if (document.getElementById("female").checked) {
      document.getElementById("female").checked = false;
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900" style={{ overflowX: "hidden" }}>
      <div className="flex justify-center h-screen">
        <div className="flex items-center w-full max-w-xl px-6 mx-auto lg:w-4/6">
          <form>
            <div className="text-center mb-10">
              <div className="flex justify-center mx-auto">
                <img
                  className="w-auto h-32 sm:h-32"
                  src={logo}
                  alt="company logo"
                />
              </div>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Register Your Account Here
              </p>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="flex mb-4">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <FaUserCircle />
                </span>
                <input
                  type="text"
                  id="firstname"
                  value={firstname}
                  className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex mb-4">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <FaUserCircle />
                </span>
                <input
                  type="text"
                  id="lastname"
                  value={lastname}
                  className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex mb-4">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <MdEmail />
              </span>
              <input
                type="text"
                id="email"
                value={email}
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex mb-4">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <FaAddressCard />
              </span>
              <input
                type="text"
                id="address"
                value={address}
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex mb-4">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <BsPersonVcardFill />
              </span>
              <input
                type="text"
                id="nic"
                value={nic}
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your NIC"
                onChange={(e) => setNIC(e.target.value)}
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="flex mb-4">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <FaLock />
                </span>
                <input
                  type="password"
                  id="password"
                  value={password}
                  className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex mb-4">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <FaLock />
                </span>
                <input
                  type="password"
                  id="confirmPassword"
                  value={conPassword}
                  className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Confirm Your Password"
                  onChange={(e) => setConPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="flex mb-4">
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="male"
                        type="radio"
                        value="Male"
                        name="gender"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label
                        htmlFor="male"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Male
                      </label>
                    </div>
                  </li>
                  <li className="w-full dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="female"
                        type="radio"
                        value="Female"
                        name="gender"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label
                        htmlFor="female"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Female
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex mb-4">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <FaMobile />
                </span>
                <input
                  type="text"
                  id="mobile"
                  value={mobile}
                  className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Mobile Number"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div>
                <button
                  type="button"
                  className="mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="text-white w-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm sm:w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  onClick={reset}
                >
                  Reset
                </button>
              </div>
            </div>
            <p className="mt-6 text-sm text-center text-gray-400">
              Already have an account?{" "}
              <a
                href="/"
                className="text-blue-500 focus:outline-none focus:underline hover:underline"
              >
                Login
              </a>
              .
            </p>
          </form>
        </div>
        <div
          className="hidden bg-cover lg:block lg:w-3/5"
          style={{
            backgroundImage: `url(
              https://images.unsplash.com/photo-1556742504-16b083241fab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
            )`,
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center justify-end h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ticket Express
              </h2>

              <p className="max-w-xl mt-3 text-gray-300">
                Book your tickets with ease and confidence and enjoy your ride.
                Use this portal to register to the system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
