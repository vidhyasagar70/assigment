import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getGroups } from "../../controllers/GroupController";
import "./Home.css";

const Home = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getGroups()
      .then(setGroups)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home-container">
      <h1>Thirukkural Categories</h1>
      <div className="group-list">
        {groups.map((group) => (
          <Link key={group.id} to={`/subgroups/${group.id}`} className="group-item">
            {group.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
