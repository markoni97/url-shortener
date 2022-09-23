import React, { useReducer } from 'react';
import LinksContext from './links-context';

const linksState = {
  urlLinks: [],
  isInitialGet: true,
  isLoading: false,
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

    return { ...state, urlLinks: updatedLinks, isInitialGet: false };
  }

  if (action.type === 'REMOVE_ITEM') {
    const updatedLinks = state.urlLinks.filter(
      (link) => link.code !== action.payload.id
    );
    return { ...state, urlLinks: updatedLinks, isInitialGet: false };
  }

  if (action.type === 'SET_ITEMS') {
    return { ...state, urlLinks: action.payload.urlLinks, isInitialGet: true };
  }

  if (action.type === 'IS_LOADING') {
    return { ...state, isLoading: action.payload.isLoading };
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

  const setIsLoadingHandler = (isLoading) => {
    dispatchLinksAction({
      type: 'IS_LOADING',
      payload: { isLoading: isLoading },
    });
  };

  const linksContext = {
    urlLinks: links.urlLinks,
    isInitialGet: links.isInitialGet,
    isLoading: links.isLoading,
    addLink: addLinkHandler,
    removeLink: removeLinkHandler,
    setLinks: setLinksHandler,
    setIsLoading: setIsLoadingHandler,
  };

  return (
    <LinksContext.Provider value={linksContext}>
      {props.children}
    </LinksContext.Provider>
  );
};

export default LinksProvider;
