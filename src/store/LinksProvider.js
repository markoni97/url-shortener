import React, { useReducer } from 'react';
import LinksContext from './links-context';

const linksState = {
  urlLinks: [],
  isInitialGet: true
};

const linksReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const linkExists = state.urlLinks.find(
      (item) => item.code === action.payload.link.code
    );
    if (linkExists) {
      return state;
    }
    const updatedLinks = state.urlLinks.concat(action.payload.link);

    return { urlLinks: updatedLinks, isInitialGet: false };
  }

  if (action.type === 'REMOVE_ITEM') {
    const updatedLinks = state.urlLinks.filter(
      (link) => link.code !== action.payload.id
    );
    return { urlLinks: updatedLinks, isInitialGet: false };
  }

  if (action.type === 'SET_ITEMS') {
    return { urlLinks: action.payload.urlLinks, isInitialGet: true };
  }

  return linksState;
};

const LinksProvider = (props) => {
  const [links, dispatchLinksAction] = useReducer(linksReducer, linksState);

  const addLinkHandler = (link) => {
    dispatchLinksAction({ type: 'ADD_ITEM', payload: { link: link } });
  };

  const removeLinkHandler = (id) => {
    dispatchLinksAction({ type: 'REMOVE_ITEM', payload: { id: id } });
  };

  const setLinksHandler = (urlLinks) => {
    dispatchLinksAction({ type: 'SET_ITEMS', payload: { urlLinks: urlLinks } });
  };

  const linksContext = {
    urlLinks: links.urlLinks,
    isInitialGet: links.isInitialGet,
    addLink: addLinkHandler,
    removeLink: removeLinkHandler,
    setLinks: setLinksHandler,
  };

  return (
    <LinksContext.Provider value={linksContext}>
      {props.children}
    </LinksContext.Provider>
  );
};

export default LinksProvider;
