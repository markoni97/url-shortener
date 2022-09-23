import React, { useContext, useEffect, useRef } from 'react';
import LinksContext from './store/links-context';
import LinksList from './components/links-list/LinksList';
import LinkForm from './components/link-form/LinkForm';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import classes from './App.module.scss';

const App = () => {
  const linksList = useContext(LinksContext);
  const linksCollection = collection(db, 'links');

  useEffect(() => {
    const getLinks = async () => {
      const data = await getDocs(linksCollection);
      const links = data.docs.map((doc) => {
        return { ...doc.data() };
      });
      linksList.setLinks(links);
    };

    getLinks();
  }, []);

  useEffect(() => {
    if (linksList.isInitialGet) {
      return;
    }
    const updateLinks = async () => {
      await addDoc(linksCollection, { ...linksList.urlLinks.slice(-1)[0] });
    };

    updateLinks();
  }, [linksList.urlLinks]);

  return (
    <main className={classes['main']}>
      <div className={classes['main__top']}>
        <LinkForm />
      </div>
      <div className={classes['main__bottom']}>
        <LinksList />
      </div>
    </main>
  );
};

export default App;
