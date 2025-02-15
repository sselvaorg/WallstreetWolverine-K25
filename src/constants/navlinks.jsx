export const isAuthenticated = () => {
  //console.log(!!localStorage.getItem("token"));
  return !!localStorage.getItem("token");
};

export const navLinks = (auth) => [
  { name: "Home", link: "/" },
  { name: "Market", link: "/market" },
  { name: "Profile", link: "/profile" },
  { name: "Instructions", link: "/instructions" },
  { name: "Rules", link: "/rules" },
  { name: "Contact", link: "/contact" },
  !auth ? { name: "Login", link: "/login" } : { name: "Logout", link: "/login" },
];
