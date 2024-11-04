import React, { useState } from 'react';
import axios from 'axios';
import { FaPlusCircle } from 'react-icons/fa';

const RegisterPage = () => {
  const [teamName, setTeamName] = useState('');
  const [leader, setLeader] = useState({
    name: '',
    email: '',
    year: 1,
    library_id: '',
    mobile_number: '',
    gender: 'Male',
  });

  const [members, setMembers] = useState([
    { name: '', email: '', year: 1, library_id: '', mobile_number: '', gender: 'Male' },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLeaderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLeader({
      ...leader,
      [name]: name === 'year' ? Number(value) : value,
    });
  };

  const handleMemberChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedMembers = [...members];
    updatedMembers[index][name] = name === 'year' ? Number(value) : value;
    setMembers(updatedMembers);
  };

  const addMember = () => {
    if (members.length < 3) {
      setMembers([...members, { name: '', email: '', year: 1, library_id: '', mobile_number: '', gender: 'Male' }]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const teamData = {
      team_name: teamName,
      ...leader,
      team: members.map((member) => ({
        name: member.name,
        email: member.email,
        year: member.year,
        library_id: member.library_id,
        mobile_number: member.mobile_number,
        gender: member.gender,
      })),
    };

    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/register', teamData);
      console.log('Response:', response.data);
      setTeamName('');
      setLeader({ name: '', email: '', year: 1, library_id: '', mobile_number: '', gender: 'Male' });
      setMembers([{ name: '', email: '', year: 1, library_id: '', mobile_number: '', gender: 'Male' }]);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="max-w-3xl w-full p-8 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">Register Your Team</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2" htmlFor="teamName">
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="block w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
              required
            />
          </div>

          {/* Team Leader Section */}
          <div className="mb-6 p-4 border border-gray-600 rounded-lg bg-gray-800">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Team Leader</h3>
            <input
              type="text"
              name="name"
              placeholder="Leader Name"
              value={leader.name}
              onChange={handleLeaderChange}
              className="mt-2 block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Leader Email"
              value={leader.email}
              onChange={handleLeaderChange}
              className="mt-2 block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
            />
            <input
              type="text"
              name="library_id"
              placeholder="Library ID"
              value={leader.library_id}
              onChange={handleLeaderChange}
              className="mt-2 block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
            />
            <input
              type="text"
              name="mobile_number"
              placeholder="Mobile Number"
              value={leader.mobile_number}
              onChange={handleLeaderChange}
              className="mt-2 block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
            />
            <div className="flex space-x-2 mt-2">
              <select
                name="gender"
                value={leader.gender}
                onChange={handleLeaderChange}
                className="block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <select
                name="year"
                value={leader.year}
                onChange={handleLeaderChange}
                className="block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
          </div>

          {/* Team Member Form - Show Only One at a Time */}
          {members.slice(0, 1).map((member, index) => (
            <div key={index} className="mb-6 p-4 border border-gray-600 rounded-lg bg-gray-800">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Team Member {index + 1}</h3>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={member.name}
                onChange={(e) => handleMemberChange(index, e)}
                className="mt-2 block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={member.email}
                onChange={(e) => handleMemberChange(index, e)}
                className="mt-2 block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                required
              />
              <input
                type="text"
                name="library_id"
                placeholder="Library ID"
                value={member.library_id}
                onChange={(e) => handleMemberChange(index, e)}
                className="mt-2 block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                required
              />
              <input
                type="text"
                name="mobile_number"
                placeholder="Mobile Number"
                value={member.mobile_number}
                onChange={(e) => handleMemberChange(index, e)}
                className="mt-2 block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                required
              />
              <div className="flex space-x-2 mt-2">
                <select
                  name="gender"
                  value={member.gender}
                  onChange={(e) => handleMemberChange(index, e)}
                  className="block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <select
                  name="year"
                  value={member.year}
                  onChange={(e) => handleMemberChange(index, e)}
                  className="block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
            </div>
          ))}

          {/* Add Team Member Button */}
          {members.length < 3 && (
            <button
              type="button"
              onClick={addMember}
              className="flex items-center justify-center mb-4 text-blue-400 hover:text-blue-300 transition duration-200"
            >
              <FaPlusCircle className="mr-2" /> Add Team Member
            </button>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold hover:from-purple-600 hover:to-blue-700 transition duration-200 ease-in-out shadow-md`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
