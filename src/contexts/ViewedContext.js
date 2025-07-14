import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const ViewedContext = createContext();

// Custom hook for easier access
export const useViewed = () => useContext(ViewedContext);

// ViewedProvider component
export const ViewedProvider = ({ children }) => {
  const [viewed, setViewed] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("viewed");
      if (stored) {
        setViewed(JSON.parse(stored));
      }
    } catch {
      localStorage.removeItem("viewed"); // Fallback if corrupted
    }
  }, []);

  // Save to localStorage whenever `viewed` changes
  useEffect(() => {
    localStorage.setItem("viewed", JSON.stringify(viewed));
  }, [viewed]);

  // Add a course to viewed history
  const addViewed = (id) => {
    setViewed((prev) => {
      const exists = prev.find((item) => item.id === id);
      const updatedItem = { id, viewedAt: new Date().toISOString() };

      if (exists) {
        // Move to top with updated timestamp
        return [updatedItem, ...prev.filter((item) => item.id !== id)];
      }

      return [updatedItem, ...prev];
    });
  };

  // Remove a course from history
  const removeViewed = (id) => {
    setViewed((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all history
  const clearViewed = () => setViewed([]);

  // Remove multiple courses
  const removeMultiple = (ids) => {
    setViewed((prev) => prev.filter((item) => !ids.includes(item.id)));
  };

  return (
    <ViewedContext.Provider
      value={{
        viewed,
        addViewed,
        removeViewed,
        clearViewed,
        removeMultiple,
      }}
    >
      {children}
    </ViewedContext.Provider>
  );
};
