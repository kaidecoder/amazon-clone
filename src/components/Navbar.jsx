import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className=" w-full bg-amazon-navbar">
      <div className="h-18 flex justify-between items-center p-2 text-white">
        <div className="flex items-center gap-1">
            <GiHamburgerMenu size={20}/>
            <p>All</p>
        </div>
          
        

        <div>
          <select className="text-black" name="medical-care" id="medical-care">
            <option value="one-medical">One Medical</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="clinic">Clinic</option>
            <option value="health-products">Health Products</option>
          </select>
        </div>
        
          <h3>Best Sellers</h3>
          <h3>Amazon Basics</h3>
          <h3>Customer Service</h3>
          <div>
            <select className="text-black" name="prime" id="prime">
              <option value="prime">Prime</option>
            </select>
          </div>
          <h3>New Releases</h3>
          <h3>Music</h3>
          <h3>Shot can't-miss teen vogue faves</h3>
        
      </div>
    </div>
  );
};

export default Navbar;
