/** @format */

import { MdLocationPin, MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const Jobe = ({ jobe }) => {
  const {
    id,
    job_title,
    company_name,
    job_type,
    logo,
    remote_or_onsite,
    location,
    salary,
  } = jobe;
  console.log(jobe);
  return (
    <div className="border p-5 rounded-lg">
      <img className="w-1/2"
        src={logo}
        alt=""
      />
      <h3 className="text-xl font-semibold">{job_title}</h3>
      <h4 className="my-2">{company_name}</h4>
      <button className="border border-[#7c3aed] py-1 px-4 font-semibold">
        {remote_or_onsite}
      </button>
      <button className="border border-[#7c3aed] py-1 px-4 ml-5 font-semibold">
        {job_type}
      </button>
      <div className="flex gap-5 mt-2 items-center font-semibold ">
        <h3 className="flex items-center">
          <MdLocationPin />
          {location}
        </h3>
        <h5 className="flex items-center">
          <MdAttachMoney></MdAttachMoney>
          {salary}
        </h5>
      </div>
      <Link to={`/job/${id}`}>
           <button className="btn btn-primary mt-5">View Details</button>
      </Link>
    </div>
  );
};

export default Jobe;
