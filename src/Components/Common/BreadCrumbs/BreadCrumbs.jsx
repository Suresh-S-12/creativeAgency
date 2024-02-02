import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BreadCrumbs.css";
import BreadcrumbSeparator from "../../../Assets/Images/HomePage/Hero/BreadcrumbSeparator.svg";
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState(
    {
      breadcrumbPath: "Home",
      currentLink: "/",
      lastCrumb:""
    }
  )

  useEffect(() => {
   
   const arr =  location.pathname
      .split("/")
      setState(prev => ({...prev, lastCrumb:arr[arr.length - 1]}) )
  }, []);
  



  const handleNavigation = (to) => {
    const destination= to === "Home" ? "/" : "/"+to
    navigate(destination)
  }

  const navigateLinks = ["Home",...location.pathname
    .split("/")].filter(path => path)
    .map((section, index, array) => {
      return (
        <span key={index} className="d-flex" style={{gap:'6px',cursor:'pointer'}}>
          {index > 0 && (
            <span>
              {" "}
              <img src={BreadcrumbSeparator} alt="" />{" "}
            </span>
          )}{" "}
          {/* Add this line to show separator only after the first item */}
          {index < array.length - 1 && (
            <>
              <div
                onClick={() => handleNavigation(section)}
                className="crumb-link"
              >
                {section.split("-").join(" ")}
              </div>
            </>
          )}
          {index === array.length - 1 && (
            <span className="orange-cls">{section.split("-").join(" ")}</span>
          )}
        </span>
      );
    });
  
  return (
    <div className="bread-crumbs">
      <h1>{state.lastCrumb}</h1>
      <p>{navigateLinks}</p>
    </div>
  );
};

export default BreadCrumbs;
