import React, { useState } from "react";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      
    </div>
  );
}

export default SideBar;
