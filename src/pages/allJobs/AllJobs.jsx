import { useState, useEffect } from "react";
import { Link } from "react-router";
import useAxios from "../../hooks/useAxios";
import Loading from "../Loading";

const JOBS_PER_PAGE = 6;

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .get("/Jobs")
      .then((res) => {
        let sorted = [...res.data];

        if (sortOrder === "newest") {
          sorted.sort(
            (a, b) =>
              new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
          );
        } else {
          sorted.sort(
            (a, b) =>
              new Date(a.postedAt).getTime() - new Date(b.postedAt).getTime()
          );
        }

        setJobs(sorted);
        setFilteredJobs(sorted);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [axiosInstance, sortOrder]);

 
  useEffect(() => {
    let result = [...jobs];

    if (searchTerm.trim() !== "") {
      result = result.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((job) => job.category === selectedCategory);
    }

    setFilteredJobs(result);
    setCurrentPage(1); 
  }, [searchTerm, selectedCategory, jobs]);

 
  const categories = ["all", ...new Set(jobs.map((job) => job.category))];

 
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const paginatedJobs = filteredJobs.slice(
    startIndex,
    startIndex + JOBS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-base-200 py-30 px-4">
      <div className="container mx-auto">
        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            All Jobs :{" "}
            <span className="text-primary">{filteredJobs.length}</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Search by title */}
            <input
              type="text"
              placeholder="Search by job title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered w-full sm:w-64"
            />

            {/* Category filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="select select-bordered select-sm w-full sm:w-auto"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select select-bordered select-sm w-full sm:w-auto"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="block lg:hidden">
          {paginatedJobs.length === 0 ? (
            <p className="text-center py-12 text-base-content/70">
              No jobs found matching your filters.
            </p>
          ) : (
            paginatedJobs.map((job) => {
              const displayImage = Array.isArray(job.coverImage)
                ? job.coverImage[0]
                : job.coverImage;

              return (
                <div
                  key={job._id}
                  className="card bg-base-100 shadow-md mb-6 rounded-xl overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 h-32 sm:h-auto">
                      <img
                        src={
                          displayImage ||
                          "https://via.placeholder.com/80?text=No+Image"
                        }
                        alt={job.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                        <span className="badge badge-primary badge-sm">
                          {job.category}
                        </span>
                        <span className="text-xs opacity-70">
                          by {job.postedBy}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg line-clamp-1">
                        {job.title}
                      </h3>
                      <p className="text-sm opacity-80 mt-1 line-clamp-2">
                        {job.summary}
                      </p>
                      <Link
                        to={`/jobDetails/${job._id}`}
                        className="mt-3 block"
                      >
                        <button className="btn btn-primary btn-sm w-full">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          {paginatedJobs.length === 0 ? (
            <p className="text-center py-12 text-base-content/70">
              No jobs found matching your filters.
            </p>
          ) : (
            <table className="table table-zebra w-full bg-base-100 rounded-xl shadow-lg">
              <thead>
                <tr className="text-left">
                  <th className="w-32"></th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Posted By</th>
                  <th>Summary</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {paginatedJobs.map((job) => {
                  const displayImage = Array.isArray(job.coverImage)
                    ? job.coverImage[0]
                    : job.coverImage;

                  return (
                    <tr
                      key={job._id}
                      className="hover:bg-base-200 transition-colors"
                    >
                      <td>
                        <div className="avatar">
                          <div className="w-20 h-20 rounded-lg overflow-hidden">
                            <img
                              src={
                                displayImage ||
                                "https://via.placeholder.com/80?text=No+Image"
                              }
                              alt={job.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="font-semibold">{job.title}</td>
                      <td>
                        <div className="badge badge-primary badge-sm">
                          {job.category}
                        </div>
                      </td>
                      <td className="text-sm opacity-70">{job.postedBy}</td>
                      <td className="max-w-xs text-sm opacity-80 line-clamp-2">
                        {job.summary}
                      </td>
                      <td>
                        <Link to={`/jobDetails/${job._id}`}>
                          <button className="btn btn-primary btn-sm">
                            View Details
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination Controls */}
        {!loading && filteredJobs.length > 0 && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="btn btn-sm btn-outline"
            >
              Previous
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  className={`btn btn-sm ${
                    currentPage === i + 1 ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="btn btn-sm btn-outline"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
