import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Loading from "./Loading";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const JobDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosPublic = useAxios();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accepting, setAccepting] = useState(false);
  const [alreadyAccepted, setAlreadyAccepted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    axiosPublic
      .get(`/Jobs/${id}`)
      .then((res) => {
        setJob(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    if (user) {
      axiosSecure
        .get(`/accepted-tasks?email=${user.email}&jobId=${id}`)
        .then((res) => {
          if (res.data.length > 0) setAlreadyAccepted(true);
        });
    }
  }, [id, user, axiosPublic, axiosSecure]);

  const handleAccept = async () => {
    if (!user) {
      toast.info("Please log in to accept this job");
      navigate("/auth/login");
      return;
    }

    setAccepting(true);
    try {
      await axiosSecure.post("/accepted-tasks", {
        jobId: job._id,
        title: job.title,
        category: job.category,
        coverImage: job.coverImage || job.images?.[0],
        summary: job.summary,
        postedBy: job.postedBy,
        postedByEmail: job.email,
        acceptedBy: user.displayName || user.email,
      });
      toast.success("Job accepted! View in My Tasks");
      setAlreadyAccepted(true);
    } catch {
      toast.error("Failed to accept job");
    } finally {
      setAccepting(false);
    }
  };

  if (loading) return <Loading />;
  if (!job)
    return (
      <div className="text-center py-20 text-error text-2xl">Job not found</div>
    );

  const images =
    Array.isArray(job.coverImage) && job.coverImage.length > 0
      ? job.coverImage
      : [job.coverImage || "https://via.placeholder.com/800x600?text=No+Image"];

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const isOwnJob = user && job.email === user.email;

  return (
    <div className="min-h-screen bg-base-200 py-30 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="card bg-base-100 shadow-xl">
          {/* IMAGE CAROUSEL */}
          <div className="relative h-64 md:h-96 bg-base-300 overflow-hidden rounded-t-xl">
            <div
              className="flex h-full w-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {images.map((img, idx) => (
                <div key={idx} className="w-full h-full flex-shrink-0">
                  <img
                    src={img}
                    alt={`${job.title} - Image ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) =>
                      (e.currentTarget.src =
                        "https://via.placeholder.com/800x600?text=Image+Not+Found")
                    }
                  />
                </div>
              ))}
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost bg-black/50 hover:bg-black/70 text-white z-10"
                >
                  ❮
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost bg-black/50 hover:bg-black/70 text-white z-10"
                >
                  ❯
                </button>
              </>
            )}

            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentImageIndex ? "bg-white w-8" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="card-body p-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <span className="badge badge-primary badge-lg">
                  {job.category}
                </span>
                <h1 className="text-3xl font-bold mt-3">{job.title}</h1>
                <p className="text-sm opacity-70 mt-1">
                  Posted by <span className="font-medium">{job.postedBy}</span>
                  {isOwnJob && (
                    <span className="badge badge-accent badge-sm ml-2">
                      Your Job
                    </span>
                  )}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs opacity-60">
                  {new Date(job.postedAt).toLocaleDateString()} at{" "}
                  {new Date(job.postedAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">Job Description</h3>
              <p className="text-base leading-relaxed whitespace-pre-wrap">
                {job.summary}
              </p>
            </div>

            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Key Requirements</h3>
              <div className="gap-6 text-base-700">
                <div>
                  <span className="font-medium">Years of Experience:</span>
                  <p className="font-bold">{job.yearsOfExperience || "Not specified"}</p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch mt-6">
              <Link to="/all-jobs" className="flex-1">
                <button className="btn btn-ghost w-full">Back to Jobs</button>
              </Link>

              {alreadyAccepted ? (
                <Link to="/dashboard/my-accepted-tasks" className="flex-1">
                  <button className="btn btn-success w-full">
                    View in My Tasks
                  </button>
                </Link>
              ) : (
                <button
                  onClick={handleAccept}
                  disabled={accepting || isOwnJob}
                  className={`btn flex-1 ${
                    isOwnJob || !user
                      ? "btn-disabled opacity-60"
                      : "btn-primary"
                  }`}
                  title={
                    isOwnJob
                      ? "You cannot accept your own job"
                      : !user
                      ? "Log in to accept"
                      : ""
                  }
                >
                  {accepting ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Accepting...
                    </>
                  ) : isOwnJob ? (
                    "Your Job"
                  ) : !user ? (
                    "Log in to Accept"
                  ) : (
                    "Accept Job"
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
