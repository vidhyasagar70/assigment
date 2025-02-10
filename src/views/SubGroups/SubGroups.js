import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSubGroups } from "../../controllers/SubGroupController";
import "./SubGroups.css";

const SubGroups = () => {
  const { groupId } = useParams();
  const [subGroups, setSubGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSubGroups(groupId)
      .then(setSubGroups)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [groupId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="subgroups-container">
      <h2>Sub Groups</h2>
      <div className="subgroup-list">
        {subGroups.map((sub) => (
          <Link key={sub.id} to={`/poems/${groupId}/${sub.id}`} className="subgroup-item">
            {sub.name}
          </Link>
        ))}
      </div>
      <Link to="/" className="back-button">Go Back</Link>
    </div>
  );
};

export default SubGroups;
