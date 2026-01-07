import React from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router";

const FinalCTA = () => {
  const { user } = useAuth();
  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-8 text-base-content">
          Join FreeLancy Today
        </h2>
        <p className="text-2xl text-base-content/80 mb-12 max-w-2xl mx-auto">
          Start your journey to success in minutes
        </p>
        <Link to={user ? "/add-job" : "/auth/signup"}>
          <button className="btn btn-primary btn-lg text-xl px-12">
            {user ? "Post Your First Job" : "Create Free Account"}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
