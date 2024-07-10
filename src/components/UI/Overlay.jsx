import React from "react";

export const Overlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return <div onClick={onClose} className="overlay"></div>;
};
