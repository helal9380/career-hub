/** @format */

import { useLoaderData, useParams } from "react-router-dom";
import { MdAttachMoney, MdLocalPostOffice, MdLocationOn, MdOutlineMail, MdPhone } from "react-icons/md";
/** @format */
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idIn = parseInt(id);
  const job = jobs.find((job) => job.id === idIn);
  console.log(job);
  return (
    <div className="my-10">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Job details</h1>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-20">
        <div className="col-span-2 border">
          <div>
            <h3 className="mb-3">
              <span className="font-semibold text-lg">Job Description:</span>{" "}
              {job.job_description}
            </h3>
            <h3 className="mb-3">
              <span className=" text-lg font-semibold">Job responsibiby:</span>
              {job.job_responsibility}
            </h3>
            <span className="text-lg font-semibold">Education requirment:</span>
            <h3>{job.educational_requirements}</h3>
            <span className="text-lg font-semibold">Experiences:</span>
            <h3>{job.experiences}</h3>
          </div>
        </div>
        <div className="border bg-sky-100 p-4 rounded-lg">
          <div>
            <h3 className="text-2xl font-semibold">Job details</h3>
            <h5>Company: {job.company_name}</h5>
            <div className="mt-2 border-b-2 border-gray-400">
              <h4 className="flex items-center gap-1">
                <div className="p-1 rounded-full bg-amber-400">
                <MdAttachMoney className="text-amber-900"></MdAttachMoney>
                </div>
                <span className="font-semibold">Salary: </span>
                {job.salary}
              </h4>
              <h4 className="flex items-center mt-2 gap-1 pb-2">
                <div className="p-1 rounded-full bg-amber-400">
                <MdLocalPostOffice className="text-amber-900"></MdLocalPostOffice>
                </div>
                <span className="font-semibold">Job title: </span>
                {job.job_title}
              </h4>
            </div>
            <div className="my-4">
                <h3 className="text-xl font-semibold">Contact information</h3>
            </div>
            <div>
                <h3 className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-amber-400">
                <MdPhone className="text-amber-900"></MdPhone>
                </div> 
                    <span>Phone:</span> {job.contact_information.phone}
                </h3>
                <h3 className="flex items-center my-2 gap-2">
                <div className="p-1 rounded-full bg-amber-400">
                <MdOutlineMail className="text-amber-900" />
                </div> 
                    <span>Email:</span> {job.contact_information.email}
                </h3>
                <h3 className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-amber-400">
                <MdLocationOn className="text-amber-900"></MdLocationOn>
                </div> 
                    <span>Address:</span> {job.contact_information.address.slice(0, 10)}
                </h3>
            </div>
          </div>
          <button className="btn btn-primary w-full mt-5">Apply Now </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
