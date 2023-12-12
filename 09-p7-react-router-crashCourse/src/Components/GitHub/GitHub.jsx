import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GitHub() {
  const [followers, setFollowers] = useState([]);
  const [followersCount, setFollowersCount] = useState(0);
  const [inputUsername, setInputUsername] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputUsername(e.target.value);
  };

  const fetchFollowers = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/followers`);
      setFollowers(response.data);
      setFollowersCount(response.data.length);
      setError(null);
    } catch (error) {
      setFollowers([]);
      setFollowersCount(0);
      setError('User not found or error fetching followers.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchFollowers(inputUsername);
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">GitHub Followers</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={inputUsername}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Get Followers
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {followersCount >= 0 && (
        <div>
          <p className="mb-2">Followers Count: {followersCount}</p>
          <ul>
            {followers.map(follower => (
              <li key={follower.id} className="list-disc ml-6">
                {follower.login}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default GitHub;
