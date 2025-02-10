import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPoems } from "../../controllers/PoemController";
import "./PoemList.css";

const PoemList = () => {
  const { groupId, subGroupId } = useParams();
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPoems(groupId, subGroupId)
      .then(setPoems)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [groupId, subGroupId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="poemlist-container">
      <h2>Kurals</h2>
      <ul>
        {poems.map((kural) => (
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
