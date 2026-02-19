import React from "react";
import "./LoadingOverlay.css";

export const LoadingOverlay: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
      <p>Loading films...</p>
    </div>
  );
};
