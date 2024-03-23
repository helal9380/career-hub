/** @format */

import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mb-20 py-10">
      <div
        className="hero min-h-[calc(100vh - 100px)]"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md py-20">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <NavLink to="/applied" className="btn btn-primary">Get Started</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
