import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./SubGroups.css";

const SubGroups = () => {
  const { groupId } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/thirukkural.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedGroup = data.groups.find((g) => g.id === parseInt(groupId));
        if (!selectedGroup) throw new Error("Group not found");
        setGroup(selectedGroup);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [groupId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="subgroups-container">
      <h2>{group.name} - Sub Groups</h2>
      <div className="subgroup-list">
        {group.subGroups.map((sub) => (
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
