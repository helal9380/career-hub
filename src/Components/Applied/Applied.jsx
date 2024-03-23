/** @format */
import { FaLocationPin } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStorege } from "../Utility/LocalStorege";

const Applied = () => {
  const jobs = useLoaderData();
  const [applied, setApplied] = useState([]);
  const [display, setDisply] = useState([])
  useEffect(() => {
    const storedId = getStorege();

    const appliedId = jobs.filter((job) => storedId.includes(job.id));
    setApplied(appliedId);
    setDisply(appliedId)
  }, [jobs]);
  console.log(applied);

  const handleDisplayData = (filter) => {
    if(filter === "all") {
        setDisply(applied)
    }
    else if(filter === 'remote') {
        const remote = applied.filter(job => job.remote_or_onsite === 'Remote');
        setDisply(remote)
    }
    else if(filter === 'onsite') {
        const onsite = applied.filter(job => job.remote_or_onsite === "Onsite");
        setDisply(onsite)
    }
  }

  return (
    <div className="">
      <h2 className="text-3xl font-semibold text-center mt-10">Applied jobs</h2>

      <div className="w-[8%] ml-auto">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1">
            Click
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] border menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => handleDisplayData('all')}>All</a>
            </li>
            <li>
              <a onClick={() => handleDisplayData('remote')}>Remote</a>
            </li>
            <li>
              <a onClick={() => handleDisplayData('onsite')}>Onsite</a>
            </li>
          </ul>
        </div>
      </div>
      {display.map((apply) => (
        <div
          key={apply.id}
          className="card my-10 lg:card-side border">
          <figure>
            <img
              src={apply.logo}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{apply.job_title}</h2>
            <h3>Company: {apply.company_name}</h3>
            <div className="flex gap-5 items-center">
              <div className="flex items-center gap-2">
                <FaLocationPin className="text-blue-500"></FaLocationPin>
                <h4>Location: {apply.location}</h4>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationPin className="text-blue-500"></FaLocationPin>
                <h4>Salary: {apply.salary}</h4>
              </div>
            </div>
            <div className="card-actions justify-end">
              <Link
                to="/"
                className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Applied;
