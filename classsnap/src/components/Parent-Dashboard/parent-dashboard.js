import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

const ParentDashboard = props => {
  const [children, setChildren] = useState([]);
  useEffect(() => {
    async function fetchChildren() {
      const parentId = localStorage.getItem("parentId");
      await axiosWithAuth()
        .get(`/api/parent/${id}`)
        .then(children => {
          setChildren(children);
        });
    }
    fetchChildren();
  }, []);

  return (
      <div ClassName="parent-dashboard">
          
      </div>
  )


};

export default ParentDashboard