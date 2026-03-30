import React, { useState } from "react";
import Navbar from "../components/Navbar";

const ApplyLeaveDashboard = () => {
  const [form, setForm] = useState({
    category: "",
    startingDate: "",
    endingDate: "",
    leaveTime: "",
    returnTime: "",
    remark: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Leave Submitted!");
  };

  return (
    <>
    <Navbar />
    <div className="px-6 pt-20 pb-8 max-w-7xl mx-auto text-white">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-1">Apply for Leave</h1>
        <p className="text-neutral-400">
          Submit your leave application and track your requests
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Stat title="Total Applications" value="0" />
        <Stat title="Pending Review" value="0" color="text-amber-300" />
        <Stat title="Approved" value="0" color="text-emerald-300" />
        <Stat title="Rejected" value="0" color="text-red-300" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Form Section */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">
            New Leave Application
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Category */}
            <div>
              <label className="block mb-2 text-sm">Leave Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full p-2 bg-neutral-800 border border-neutral-700 rounded"
              >
                <option value="">Select category</option>
                <option>Personal reasons</option>
                <option>Festival celebration</option>
                <option>Hackathon participation</option>
                <option>College events</option>
                <option>Sick leave / medical reasons</option>
                <option>Placement drives</option>
                <option>Interviews</option>
                <option>Family functions</option>
                <option>Emergency situations</option>
                <option>Travel-related reasons</option>
                <option>Duty leave</option>
                <option>Others</option>
              </select>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                name="startingDate"
                value={form.startingDate}
                onChange={handleChange}
                className="p-2 bg-neutral-800 border border-neutral-700 rounded"
              />
              <input
                type="date"
                name="endingDate"
                value={form.endingDate}
                onChange={handleChange}
                className="p-2 bg-neutral-800 border border-neutral-700 rounded"
              />
            </div>

            {/* Time */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="time"
                name="leaveTime"
                value={form.leaveTime}
                onChange={handleChange}
                className="p-2 bg-neutral-800 border border-neutral-700 rounded"
              />
              <input
                type="time"
                name="returnTime"
                value={form.returnTime}
                onChange={handleChange}
                className="p-2 bg-neutral-800 border border-neutral-700 rounded"
              />
            </div>

            {/* Remark */}
            <textarea
              name="remark"
              value={form.remark}
              onChange={handleChange}
              placeholder="Any additional information..."
              className="w-full p-2 bg-neutral-800 border border-neutral-700 rounded"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 py-3 rounded hover:bg-blue-500 transition"
            >
              Submit Leave Application
            </button>
          </form>
        </div>

        {/* Requests Section */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">
            My Leave Requests
          </h2>
          <p>Track</p>

          <div className="text-center py-12 text-neutral-400">
            No leave requests yet
            <div className="text-sm text-neutral-500 mt-1">
              Your submitted applications will appear here
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

// Reusable Stat Component
const Stat = ({ title, value, color = "text-neutral-100" }) => (
  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
    <div className={`text-2xl font-bold ${color}`}>{value}</div>
    <div className="text-sm text-neutral-400">{title}</div>
  </div>
);

export default ApplyLeaveDashboard;