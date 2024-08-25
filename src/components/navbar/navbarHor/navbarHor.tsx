import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarHorizental from "./index";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

const NavbarHor = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  // Function to extract names from URL
  const getNamesFromUrl = () => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    if (pathSegments.length > 1) {
      const secondLastSegment = pathSegments[pathSegments.length - 2];
      const lastSegment = pathSegments[pathSegments.length - 1];
      return {
        firstName: secondLastSegment.charAt(0).toUpperCase() + secondLastSegment.slice(1),
        secondName: lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1),
      };
    } else if (pathSegments.length > 0) {
      const lastSegment = pathSegments[pathSegments.length - 1];
      return {
        firstName: "Page",
        secondName: lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1),
      };
    }
    return {
      firstName: "Page",
      secondName: "Accueil",
    };
  };

  const { firstName, secondName } = getNamesFromUrl();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? "bg-white bg-opacity-50 backdrop-blur-md shadow-xl shadow-shadow-500"
          : "bg-transparent"
      } fixed z-50 min-w-96 pb-2 mt-2 ml-72 mr-3 rounded-xl transition-all duration-300`}
    >
      <div className="flex flex-row items-start mt-5 mr-2">
        <div className="ml-5 absolute">
          <Breadcrumbs>
            {/* Adjust these breadcrumbs based on actual navigation */}
            {firstName && <BreadcrumbItem>{firstName}</BreadcrumbItem>}
            {secondName && <BreadcrumbItem>{secondName}</BreadcrumbItem>}
          </Breadcrumbs>
          <div className="text-3xl font-bold">{secondName}</div>
        </div>
        <div className="ml-120">
          <NavbarHorizental />
        </div>
      </div>
    </div>
  );
};

export default NavbarHor;
