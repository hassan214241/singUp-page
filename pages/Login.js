import Checkbox from "@material-ui/core/Checkbox";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Image from 'next/image';
import img2 from "../asts/img2.jpg";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="w-1/2 h-5/6  rounded-2xl flex ">
        <div className="bg-white p-16 rounded-l-2xl  shadow-2xl w-1/2 h-3/5">
          <h2 className="text-2xl font-bold mb-10 text-purple-800 font-serif">
            Create Your Account
          </h2>

          <form className="space-y-3">
            {/* div 1 */}
            <div>
              <label className="block  text-gray-600">Name:</label>
              <input
                type="text"
                placeholder="username"
                className="border-2 border-blue-400 p-1 block w-full rounded-lg outline-none focus:border-purple-500"
              />
            </div>
            {/* div 2 */}
            <div>
              <label className="block  text-gray-600">Email:</label>
              <input
                type="email"
                placeholder="email"
                className="border-2 border-blue-400 p-1 block w-full rounded-lg outline-none focus:border-purple-500"
              />
            </div>
            {/* div 3 */}
            <div>
              <label className="block  text-gray-600">Password:</label>
              <input
                type="password"
                placeholder="password"
                className="border-2 border-blue-400 p-1 block w-full rounded-lg outline-none focus:border-purple-500"
              />
            </div>

            {/* next div */}

            <div className="flex items-center ">
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <label for="agree" className=" text-gray-700 text-sm">
                i agree to the tream and privacy
              </label>
            </div>
            <button className="block w-full bg-purple-700 p-2 rounded-lg text-bold hover:bg-purple-400 ">
              <span>
                {" "}
                <ExitToAppIcon />
              </span>
              Sing Up
            </button>

            <hr className="w-full h-5" />

            <div>
              <button className="block w-full bg-blue-900 p-2 rounded-lg text-bold hover:bg-blue-700  uppercase">
                {" "}
                <span>
                  {" "}
                  <FacebookIcon />{" "}
                </span>{" "}
                login with facebook
              </button>
              <br />
              <button className="block w-full bg-blue-500 p-2 rounded-lg text-bold hover:bg-blue-300 uppercase">
                {" "}
                <span>
                  <TwitterIcon />
                </span>{" "}
                login with twitter
              </button>
              <br />
              <button className="block w-full bg-red-700 p-2 rounded-lg text-bold hover:bg-red-600  uppercase">
                <span>
                  {" "}
                  <GTranslateIcon />{" "}
                </span>
                login with google
              </button>
            </div>
          </form>
        </div>

        <div className="w-1/2 h-full  ">
          <Image
            src={img2}
            className="w-full h-full rounded-r-2xl   "
            width={500}
      height={855}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
