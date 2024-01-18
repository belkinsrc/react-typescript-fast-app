import React from "react";

interface ModelProps {
  children: React.ReactNode
  title: string,
  onClose: (event: React.MouseEvent) => void
}

export default function Modal({ children, title, onClose }: ModelProps) {
  return (
    <div
      className="modal-overlay fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-black/50 overflow-hidden"
      onClick={onClose}>
      <div className="w-[500px] bg-white rounded text-center p-6">
        <h1 className="text-2xl font-medium mb-5">{title}</h1>
        {children}
      </div>
    </div>
  );
}