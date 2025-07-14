import React from "react";

export default function CategoryMenu({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-4">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-full border font-medium ${
            selected === cat
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border-blue-600"
          } hover:bg-blue-600 hover:text-white transition`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
