 import React from "react";

 const LinksContext = React.createContext({
  urlLinks: [],
  isInitialGet: true,
  isLoading: false,
  addLink: (link) => {},
  removeLink: (id) => {},
  setLinks: (linksList) => {},
  setIsLoading: (isLoading) => {}
 });

 export default LinksContext;