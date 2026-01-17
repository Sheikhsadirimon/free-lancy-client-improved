import { useState } from "react";
import { Link, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import logoImg from "../assets/8941cb75-56ac-4d86-a1ea-5452fde9f131.png"

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-md">
        <div className="navbar container mx-auto px-4 lg:px-10">
          {/* Left - Logo & Mobile Menu Toggle */}
          <div className="navbar-start">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <Link to="/" className="text-xl font-bold text-primary flex items-center gap-2">
              <img src={logoImg} className="w-8" alt="Logo" />
              FreeLancy
            </Link>
          </div>

          {/* Right - Profile Dropdown */}
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar online cursor-pointer"
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={user?.photoURL || "https://img.icons8.com/?size=100&id=21441&format=png"}
                    alt="User"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
              >
                <li className="px-4 py-2 text-sm font-medium border-b">
                  {user?.displayName || user?.email}
                </li>
                <li>
                  <Link to="/dashboard" className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Dashboard Home
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-error flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-base-100 shadow-lg transform transition-transform duration-300 lg:translate-x-0 lg:relative lg:inset-auto ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6">
            <h3 className="text-xl font-bold mb-8 text-primary">Dashboard</h3>

            <ul className="menu menu-vertical gap-2">
              {/* My Profile Section */}
              <li className="menu-title text-base-content/70">My Profile</li>
              <li>
                <Link to="/dashboard/profile" className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  My Profile
                </Link>
              </li>

              {/* Other sidebar items (add more as needed) */}
              <li className="menu-title text-base-content/70 mt-6">Jobs & Tasks</li>
              <li>
                <Link to="/my-Added-Jobs">My Posted Jobs</Link>
              </li>
              <li>
                <Link to="/my-accepted-tasks">My Accepted Tasks</Link>
              </li>
              <li>
                <Link to="/add-job">Post New Job</Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
          {/* Close sidebar button on mobile */}
          {sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="btn btn-ghost lg:hidden mb-6"
            >
              ← Close Menu
            </button>
          )}

          {/* Render child routes (e.g., /dashboard, /dashboard/profile) */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;