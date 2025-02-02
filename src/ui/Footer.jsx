import {
  HiInformationCircle,
  HiLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer w-full h-96 bg-gray-200 mt-10 flex justify-around items-center">
      <div className="h-3/4 flex flex-col max-w-64 justify-around">
        <h2 className="font-bold text-3xl py-10 hover:opacity-50 cursor-pointer">
          Online Shop
        </h2>
        <p className="text-l font-bold opacity-75 ">
          {" "}
          Welcome to our e-commerce store, your one-stop-shop for all your
          needs!
        </p>
      </div>
      <div className="h-3/4 flex flex-col max-w-64 justify-around">
        <h2 className="font-bold text-3xl py-10 hover:opacity-50 cursor-pointer">
          Contact
        </h2>
        <div className="py-2">
          <HiLocationMarker className="opacity-60 inline " /> Via Rossini 10,
          109281 Turin Italy
        </div>
        <div className="py-2">
          <HiPhone className="opacity-60 inline " /> Phone +98 9377843304
        </div>
        <div className="py-2">
          <HiOutlineMail className="opacity-60 inline " />{" "}
          Ariansarafraz84@gmail.com
        </div>
        <div className="py-2">
          <HiInformationCircle className="opacity-60 inline " /> More
          information
        </div>
      </div>
      <div className="h-3/4 flex flex-col max-w-64 justify-around">
        <h2 className="font-bold text-3xl py-10 hover:opacity-50 cursor-pointer ">
          Links
        </h2>
        <ul>
          <li className="py-3 cursor-pointer">
            <NavLink to="/products">
              <p className="border-b-2 border-black">Products</p>
            </NavLink>
          </li>
          <li className="py-3 cursor-pointer">
            <NavLink to="/">
              <p className="border-b-2 border-black">Home</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
