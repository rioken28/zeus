import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { useContext } from "react";

import { Link } from "react-router-dom";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {
  AiOutlineCheck,
  AiOutlineAreaChart,
  AiOutlineCluster,
  AiOutlineBranches,
  AiOutlineAudit,
  AiOutlineUser,
  AiOutlineControl,
  AiOutlineAppstore,
  AiOutlineHome,
  AiOutlineBook,
  AiOutlineFileExcel,
} from "react-icons/ai";
import { RiWaterFlashLine, RiHotelLine } from "react-icons/ri";
import { BsWater, BsFillHeartPulseFill, BsLightning } from "react-icons/bs";
import { MdOutlineNoFood, MdMiscellaneousServices } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa6";

const SidebarSection = ({ title, icon, subSections, isOpen, onToggle }) => {
  return (
    <div className={`sidebar-section ${isOpen ? "open" : ""}`}>
      <h3
        className={`titulo-segundo`}
        style={{ color: "white", fontWeight: "500" }}
        onClick={onToggle}
      >
        {icon} {title}
        <span
          className={`icon-cerrar-abrir ${
            isOpen ? "icon-open" : "icon-closed"
          }`}
        >
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </h3>
      <ul className={`nav-list ${isOpen ? "open" : "closed"}`}>
        {subSections.map((subSection, index) => (
          <li key={index} className="nav-item" style={{ marginTop: "0.5rem" }}>
            <Link to={subSection.link} className={`nav-link`}>
              <span className="nav-link-text">
                {" "}
                {subSection.icon} {subSection.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Sidebar = () => {
  

  const [sidebarClass, setSidebarClass] = useState("");

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionTitle) => {
    setOpenSection(openSection === sectionTitle ? null : sectionTitle);
  };

  const sections = [
    {
      title: "Home",
      icon: <AiOutlineHome className="icon-titulos-sidebar" />,
      subSections: [
        {
          link: "/zeus/main",
          icon: <BsLightning className="icons-sub-list-slider" />,
          text: "Main",
        },
        {
          link: "/zeus/",
          icon: <AiOutlineBook className="icons-sub-list-slider" />,
          text: "Work Book",
        },
        {
          link: "/zeus/",
          icon: <AiOutlineCheck className="icons-sub-list-slider" />,
          text: "Bitácora",
        },
        {
          link: "/zeus/",
          icon: <AiOutlineFileExcel className="icons-sub-list-slider" />,
          text: "Digitador",
        },
      ],
    },
    {
      title: "Áreas",
      icon: <AiOutlineAreaChart className="icon-titulos-sidebar" />,
      subSections: [
        {
          link: "/zeus/alimentacion",
          icon: <MdOutlineNoFood className="icons-sub-list-slider" />,
          text: "Ingreso alimentación",
        },
        {
          link: "/zeus/hoteleria",
          icon: <RiHotelLine className="icons-sub-list-slider" />,
          text: "Hotelería Diaria",
        },
        {
          link: "/zeus/",
          icon: <BsWater className="icons-sub-list-slider" />,
          text: "Agua Tratada",
        },
        {
          link: "/zeus/",
          icon: <BsWater className="icons-sub-list-slider" />,
          text: "Agua y Electricidad",
        },
      ],
    },
    {
      title: "Gestión Recursos",
      icon: <AiOutlineAppstore className="icon-titulos-sidebar" />,
      subSections: [
        {
          link: "#",
          icon: <MdMiscellaneousServices className="icons-sub-list-slider" />,
          text: "Productos/Servicios",
        },
        {
          link: "#",
          icon: <AiOutlineCluster className="icons-sub-list-slider" />,
          text: "Ubicaciones",
        },
      ],
    },
    {
      title: "Operaciones",
      icon: <AiOutlineControl className="icon-titulos-sidebar" />,
      subSections: [
        {
          link: "#",
          icon: <AiOutlineCluster className="icons-sub-list-slider" />,
          text: "Proyectos",
        },
      ],
    },
    {
      title: "Divisiones",
      icon: <AiOutlineBranches className="icon-titulos-sidebar" />,
      subSections: [
        {
          link: "#",
          icon: <RiHotelLine className="icons-sub-list-slider" />,
          text: "Areas",
        },
        {
          link: "#",
          icon: <AiOutlineCluster className="icons-sub-list-slider" />,
          text: "Empresas",
        },
      ],
    },
    {
      title: "Salud",
      icon: <FaRegHospital className="icon-titulos-sidebar" />,
      subSections: [
        {
          link: "#",
          icon: <BsFillHeartPulseFill className="icons-sub-list-slider" />,
          text: "Epidemiología",
        },
      ],
    },
    {
      title: "Parámetros",
      icon: <AiOutlineControl className="icon-titulos-sidebar" />,
      subSections: [
        {
          link: "#",
          icon: <AiOutlineAreaChart className="icons-sub-list-slider" />,
          text: "Parámetros",
        },
      ],
    },
    {
      title: "Preferencias",
      icon: <AiOutlineAudit className="icon-titulos-sidebar" />,
      subSections: [
        {
          link: "Empresas",
          icon: <AiOutlineUser className="icons-sub-list-slider" />,
          text: "Empresas",
        },
      ],
    },
    {
      title: "Opciones",
      icon: <AiOutlineAudit className="icon-titulos-sidebar" />,
      subSections: [
        {
          link: "Usuarios",
          icon: <AiOutlineUser className="icons-sub-list-slider" />,
          text: "Cuentas usuario",
        },
      ],
    },
  ];

  return (
    <>
      <div className={`sidebar ${sidebarClass} `}>
        <div className="user-info">
            <div className="icon_abtecci"></div>
        </div>

        {sections.map((section, index) => (
          <SidebarSection
            key={index}
            title={section.title}
            icon={section.icon}
            subSections={section.subSections}
            isOpen={openSection === section.title}
            onToggle={() => toggleSection(section.title)}
          />
        ))}
      </div>
    </>
  );
};

export default Sidebar;
