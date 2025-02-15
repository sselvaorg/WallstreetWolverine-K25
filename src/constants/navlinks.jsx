import { TbHomeStats, TbLogin2 } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa";
import {
  MdPermIdentity,
  MdOutlineContactSupport,
  MdRule,
} from "react-icons/md";
import { LuNotepadTextDashed } from "react-icons/lu";

export const isAuthenticated = () => {
  //console.log(!!localStorage.getItem("token"));
  return !!localStorage.getItem("token");
};

export const navLinks = (auth) => [
  { name: "Home", link: "/", icon: <TbHomeStats /> },
  { name: "Market", link: "/market", icon: <FaChartLine /> },
  { name: "Profile", link: "/profile", icon: <MdPermIdentity /> },
  {
    name: "Instructions",
    link: "/instructions",
    icon: <LuNotepadTextDashed />,
  },
  { name: "Rules", link: "/rules", icon: <MdRule /> },
  { name: "Contact", link: "/contact", icon: <MdOutlineContactSupport /> },
  !auth
    ? { name: "Login", link: "/login", icon: <TbLogin2 /> }
    : { name: "Logout", link: "/login", icon: <TbLogin2 /> },
];
