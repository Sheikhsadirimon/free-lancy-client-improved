import { useState, useEffect } from "react";
import { Link } from "react-router";
import useAxios from "../hooks/useAxios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now - date;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .get("/Jobs")
      .then((res) => {
        setJobs(res.data.slice(0, 8));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [axiosInstance]);

  
  const getFirstImage = (coverImage) => {
    if (Array.isArray(coverImage) && coverImage.length > 0) {
      return coverImage[0];
    }
    return coverImage || "https://via.placeholder.com/300x200?text=No+Image";
  };

  return (
    <div className="my-16 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Jobs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {loading
          ? 
            Array(8)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="card bg-base-200 rounded-2xl overflow-hidden flex flex-col h-full"
                >
                  <Skeleton height={192} className="w-full" />
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between">
                      <Skeleton width={80} height={24} />
                      <Skeleton width={100} height={16} />
                    </div>
                    <Skeleton height={28} width="80%" />
                    <Skeleton count={3} />
                    <Skeleton height={40} />
                  </div>
                </div>
              ))
          : // Real jobs
            jobs.map((job) => (
              <div
                key={job._id}
                className="card bg-base-200 shadow-2xl hover:scale-95 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col h-full"
              >
                <figure className="h-48">
                  <img
                    src={getFirstImage(job.coverImage)}
                    alt={job.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </figure>

                <div className="card-body p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <span className="badge badge-primary">{job.category}</span>
                    <span className="text-xs opacity-70">
                      {formatDate(job.postedAt)}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors line-clamp-1">
                    {job.title}
                  </h3>

                  <p className="text-sm opacity-80 mt-2 flex-grow line-clamp-3">
                    {job.summary}
                  </p>

                  <div className="mt-4">
                    <Link to={`/jobDetails/${job._id}`}>
                      <button className="btn btn-primary btn-sm w-full">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {!loading && jobs.length > 0 && (
        <div className="flex justify-center mt-12">
          <Link to="/all-jobs">
            <button className="btn btn-outline btn-primary px-8">
              View All Jobs
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LatestJobs;
