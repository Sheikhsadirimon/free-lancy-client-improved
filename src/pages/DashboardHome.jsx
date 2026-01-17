import { useEffect, useState } from "react";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

import { toast } from "react-toastify";
import Loading from "./Loading";

const DashboardHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [stats, setStats] = useState({
    postedJobs: 0,
    acceptedTasks: 0,
    pendingProposals: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Example API calls - adjust endpoints as per your backend
        const [postedRes, acceptedRes] = await Promise.all([
          axiosSecure.get(`/Jobs?email=${user.email}`),
          axiosSecure.get(`/accepted-tasks?email=${user.email}`),
        ]);

        setStats({
          postedJobs: postedRes.data.length,
          acceptedTasks: acceptedRes.data.length,
          pendingProposals: 5, // Placeholder - replace with real data
        });
      } catch (err) {
        toast.error("Failed to load dashboard stats");
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchStats();
  }, [user, axiosSecure]);

  if (loading) return <Loading></Loading>;

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Welcome Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-3">
            Welcome back,{" "}
            <span className="text-primary">{user?.displayName || "User"}</span>!
          </h1>
          <p className="text-lg text-base-content/70">
            Here's a quick overview of your activity
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Posted Jobs</h3>
                  <p className="text-3xl font-bold text-primary">
                    {stats.postedJobs}
                  </p>
                </div>
              </div>
              <Link
                to="/my-Added-Jobs"
                className="text-sm text-primary mt-2 hover:underline"
              >
                View All →
              </Link>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="flex items-center gap-4">
                <div className="bg-success/10 p-4 rounded-full">
                  <svg
                    className="w-8 h-8 text-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Accepted Tasks</h3>
                  <p className="text-3xl font-bold text-success">
                    {stats.acceptedTasks}
                  </p>
                </div>
              </div>
              <Link
                to="/dashboard/my-accepted-tasks"
                className="text-sm text-success mt-2 hover:underline"
              >
                View All →
              </Link>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="flex items-center gap-4">
                <div className="bg-info/10 p-4 rounded-full">
                  <svg
                    className="w-8 h-8 text-info"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Pending Proposals</h3>
                  <p className="text-3xl font-bold text-info">
                    {stats.pendingProposals}
                  </p>
                </div>
              </div>
              <p className="text-sm text-base-content/70 mt-2">
                Check your proposals
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/add-job">
            <div className="card bg-primary  text-white shadow-xl hover:scale-105 transition-transform">
              <div className="card-body">
                <h3 className="card-title text-2xl">Post a New Job</h3>
                <p>Need talent? Create a job post in minutes</p>
              </div>
            </div>
          </Link>

          <Link to="/all-jobs">
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
              <div className="card-body">
                <h3 className="card-title text-2xl">Browse Jobs</h3>
                <p>Find new opportunities to work on</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
