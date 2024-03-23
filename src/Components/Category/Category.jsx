/** @format */

import icon from "../../assets/icons/accounts.png";
import img from "../../assets/icons/calendar.png";
import img2 from "../../assets/icons/chip.png";
import img3 from "../../assets/icons/email.png";
import './img.css'
const Category = () => {
  return (
    <div>
      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold">Category List</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
          dolorum!
        </p>
      </div>
      <div className="flex justify-center gap-5 mb-10">
        <div className="border p-5">
          <img className = {'img'}
            src={icon}
            alt=""
          />
          <h3 className="text-xl font-semibold">Account & finance</h3>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="border p-5">
          <img className = {'img'}
            src={img}
            alt=""
          />
          <h3 className="text-xl font-semibold">Account & finance</h3>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="border p-5">
          <img className = {'img'}
            src={img2}
            alt=""
          />
          <h3 className="text-xl font-semibold">Account & finance</h3>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="border p-5">
          <img className = {'img'}
            src={img3}
            alt=""
          />
          <h3 className="text-xl font-semibold">Account & finance</h3>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
