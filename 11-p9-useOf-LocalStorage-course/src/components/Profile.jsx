import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedProfile = localStorage.getItem('profileData');
    if (storedProfile) {
      setProfileData(JSON.parse(storedProfile));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profileData', JSON.stringify(profileData));
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-3xl font-bold mb-5">User Profile</h2>
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
              Age:
              <input
                type="text"
                name="age"
                value={profileData.age}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your age"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-green-700 font-semibold">Data saved successfully!</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
