import React from "react";
import { BiMap, BiSearchAlt2, BiCartAdd } from "react-icons/bi";

const Logobar = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-20 bg-amazon-logobar text-white">
        <div className="max-w-full h-auto ml-4 ">
          <img src="src/assets/amazon-logo-black.png" alt="" />
        </div>
        <div>
          <BiMap />
          <div>
            <p>Delivering to Boston 02127</p>
            <p>Choose location for most accurate options</p>
          </div>
        </div>
        <div>
          <div>
            <select className="text-black" name="prime" id="prime">
              <option value="prime">Books</option>
            </select>
          </div>
          <input type="text" placeholder="Search Amazon" />
          <BiSearchAlt2 />
        </div>
        <div>
          <img src="" alt="flag" />
          <select className="text-black" name="prime" id="prime">
              <option value="prime">EN</option>
            </select>
        </div>
        <div>
          <p>Hello, sign in</p>
          <select className="text-black" name="prime" id="prime">
              <option value="prime">Account & Lists</option>
            </select>
        </div>
        <p>Returns</p>
        <p>& Orders</p>
        <div>
        <BiCartAdd />
        <p>Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Logobar;
