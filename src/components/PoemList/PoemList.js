import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./PoemList.css";

const PoemList = () => {
  const { groupId, subGroupId } = useParams();
  const [subGroup, setSubGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/thirukkural.json")
      .then((response) => response.json())
      .then((data) => {
        const group = data.groups.find((g) => g.id === parseInt(groupId));
        if (!group) throw new Error("Group not found");
        const selectedSubGroup = group.subGroups.find((sub) => sub.id === parseInt(subGroupId));
        if (!selectedSubGroup) throw new Error("Sub-group not found");
        setSubGroup(selectedSubGroup);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [groupId, subGroupId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="poemlist-container">
      <h2>{subGroup.name} - Kurals</h2>
      <ul>
        {subGroup.kurals.map((kural) => (
          <li key={kural.id} className="poem-item">
            <strong>{kural.number}.</strong> {kural.text}
          </li>
        ))}
      </ul>
      <Link to={`/subgroups/${groupId}`} className="back-button">Go Back</Link>
    </div>
  );
};

export default PoemList;
