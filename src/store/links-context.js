 import React from "react";

 const LinksContext = React.createContext({
  urlLinks: [],
  isInitialGet: true,
  addLink: (link) => {},
  removeLink: (id) => {},
  setLinks: (linksList) => {}
 });

 export default LinksContext;