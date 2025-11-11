import { useState, useEffect } from "react";
import { Link } from "react-router";
import Loading from "./Loading";
import useAxios from "../hooks/useAxios";

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance.get("/Jobs").then((res) => {
      setJobs(res.data.slice(0, 6));
      setLoading(false);
    });
  }, [axiosInstance]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-16 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Jobs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div className="card bg-base-200 shadow-2xl hover:scale-90 transition-all duration-300 rounded-2xl overflow-hidden block group">
            <figure className="h-48">
              <img
                src={job.coverImage}
                alt={job.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </figure>

            <div className="card-body p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="badge badge-primary">{job.category}</span>
                <span className="text-sm opacity-70">by {job.postedBy}</span>
              </div>

              <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                {job.title}
              </h3>

              <p className="text-sm opacity-80 mt-2 line-clamp-2">
                {job.summary}
              </p>

              <Link to={`/jobDetails/`}>
                <button className="btn btn-primary btn-sm mt-4 w-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link to="/all-jobs">
          <button className="btn btn-outline btn-primary px-8">
            View All Jobs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestJobs;
