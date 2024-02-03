import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { fetchHome } from '../../../api';
import { HomeList } from './CatalogPageList';
import { Loader } from '../../LoaderSpinner/LoaderSpinner';

import Modal from '../../../components/Modal/Modal';

const CatalogPage = () => {
  const [trends, setTrends] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const openModal = index => {
    setModalVisible(true);
    setSelectedItemIndex(index);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItemIndex(null);
  };

  const loadMore = async () => {
    setLoader(true);
    try {
      const nextPageItems = await fetchHome(page + 1);
      if (nextPageItems.length === 0) {
        setIsLastPage(true);
      } else {
        setTrends(prevItems => [...prevItems, ...nextPageItems]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    async function getMovies() {
      setLoader(true);
      try {
        const movies = await fetchHome();
        if (movies.length === 0) {
          setIsLastPage(true);
        } else {
          setTrends(movies);
        }
      } catch (error) {
        toast.error(error);
      } finally {
        setLoader(false);
      }
    }

    getMovies();
  }, []);

  return (
    <>
      {loader && <Loader />}
      <HomeList items={trends} openModal={openModal} />
      {!isLastPage && <button onClick={loadMore}>Load More</button>}
      {isLastPage && <p>This is the entire catalog.</p>}
      {modalVisible && (
        <Modal item={trends[selectedItemIndex]} closeModal={closeModal} />
      )}
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
};

export default CatalogPage;
