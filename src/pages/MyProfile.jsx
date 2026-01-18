import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "./Loading";

const MyProfile = () => {
  const { user, updateUser } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [loading, setLoading] = useState(false);
  const [statsLoading, setStatsLoading] = useState(true);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });

  const [stats, setStats] = useState({
    postedJobs: 0,
    acceptedTasks: 0,
  });

 
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [postedRes, acceptedRes] = await Promise.all([
          axiosSecure.get(`/Jobs?email=${user?.email}`),
          axiosSecure.get(`/accepted-tasks?email=${user?.email}`),
        ]);

        setStats({
          postedJobs: postedRes.data.length || 0,
          acceptedTasks: acceptedRes.data.length || 0,
        });
      } catch (err) {
        console.error("Stats fetch failed:", err);
      } finally {
        setStatsLoading(false);
      }
    };

    if (user?.email) fetchStats();
  }, [user, axiosSecure]);


  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUser({
        displayName: formData.displayName.trim() || user.displayName,
        photoURL: formData.photoURL.trim() || user.photoURL,
      });

      await axiosSecure.patch(`/users/${user.uid}`, {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });

      toast.success("Profile updated! Changes reflected in navbar.");

    
      window.location.reload();
    } catch (err) {
      console.error("Profile update failed:", err);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (loading || statsLoading) return <Loading />;

  return (
    <div className="space-y-10 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-3">My Profile</h1>
        <p className="text-base-content/70">
          Update your display name and profile photo — changes will appear in
          the navbar instantly.
        </p>
      </div>

      <div className="card bg-base-100 shadow-xl max-w-4xl mx-auto">
        <div className="card-body p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
            <div className="avatar">
              <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-xl">
                <img
                  src={
                    formData.photoURL ||
                    user?.photoURL ||
                    "https://img.icons8.com/?size=100&id=21441&format=png"
                  }
                  alt="Profile"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold">
                {formData.displayName || "User"}
              </h2>
              <p className="text-xl text-base-content/70 mt-2">{user?.email}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="label">
                  <span className="label-text font-medium">Display Name</span>
                </label>
                <input
                  type="text"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Profile Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleChange}
                  placeholder="https://example.com/photo.jpg"
                  className="input input-bordered w-full"
                />
                <p className="text-xs text-base-content/60 mt-1">
                  Paste a direct image link (optional)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="stats shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="stat place-items-center">
                  <div className="stat-title text-base-content/70">
                    Posted Jobs
                  </div>
                  <div className="stat-value text-primary text-4xl">
                    {stats.postedJobs}
                  </div>
                </div>
              </div>

              <div className="stats shadow-lg bg-gradient-to-br from-success/10 to-primary/10">
                <div className="stat place-items-center">
                  <div className="stat-title text-base-content/70">
                    Accepted Tasks
                  </div>
                  <div className="stat-value text-success text-4xl">
                    {stats.acceptedTasks}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-end mt-12">
              <button
                type="submit"
                className="btn btn-primary px-10"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
