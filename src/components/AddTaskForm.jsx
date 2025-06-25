import React, { useState } from "react";

export default function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onAdd(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-xl shadow-lg max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-white mb-6 text-center drop-shadow-md">
        Add New Task
      </h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full p-3 mb-4 rounded-md border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        rows={4}
        className="w-full p-3 mb-4 rounded-md border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition resize-none"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-white text-pink-600 font-semibold py-3 rounded-md hover:bg-pink-100 transition-shadow shadow-md hover:shadow-lg"
      >
        Add Task
      </button>
    </form>
  );
}
