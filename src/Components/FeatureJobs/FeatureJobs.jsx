import { useEffect, useState } from "react";
import Jobe from "../Jobe/Jobe";


const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="mb-10">
            <div className="text-center">
                <h2 className="text-4xl font-bold">Feature Jobs : {jobs.length}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, obcaecati?</p>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-10">
                {
                    jobs.slice(0, dataLength).map(job => <Jobe key={job.id} jobe ={job}></Jobe>)
                }
            </div>
            <div className={ dataLength === jobs.length ? ' hidden' : 'w-[94px] mx-auto mt-5'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show all</button>
            </div>
        </div>
    );
};

export default FeatureJobs;