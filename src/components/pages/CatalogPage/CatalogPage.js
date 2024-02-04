import React, { useEffect, useState, useCallback } from 'react';
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
  const [filters, setFilters] = useState({
    make: '',
    price: '',
    minMileage: null,
    maxMileage: null,
    perPage: 12,
  });

  const [makes, setMakes] = useState([]);

  useEffect(() => {
    console.log('Fetching makes...');

    const fetchMakes = async () => {
      try {
        const response = await fetch('/path/to/makes.json');
        const data = await response.json();
        setMakes(data.makes);
        console.log('Makes loaded:', data.makes);
      } catch (error) {
        console.error('Error fetching makes:', error);
      }
    };

    fetchMakes();
  }, []);

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
      const nextPageItems = await fetchHome(page + 1, filters);
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

  const applyFilters = async () => {
    setLoader(true);
    try {
      const filteredItems = await fetchHome(1, filters);
      setTrends(filteredItems);
      setPage(1);
      setIsLastPage(false);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoader(false);
    }
  };

  const getMovies = useCallback(async () => {
    setLoader(true);
    try {
      console.log('getMovies - filters ', { filters });
      const movies = await fetchHome(1, filters);
      if (movies.length === 0) {
        console.log('1.1 -getMovies  ');
        setIsLastPage(true);
      } else {
        console.log('1.2 -getMovies  ');
        setTrends(movies);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoader(false);
    }
  }, [setLoader, setIsLastPage, setTrends, filters]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      {loader && <Loader />}
      <div>
        {/* <label>
          Make:
          <input
            type="text"
            value={filters.make}
            onChange={e =>
              setFilters(prevFilters => ({
                ...prevFilters,
                make: e.target.value,
              }))
            }
          />
        </label> */}
        <label>
          Make:
          <select
            value={filters.make}
            onChange={e =>
              setFilters(prevFilters => ({
                ...prevFilters,
                make: e.target.value,
              }))
            }
          >
            console.log("make", make);
            <option value="">Select Make</option>
            {makes.map(make => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </label>
        <label>
          Price:
          <input
            type="text"
            value={filters.price}
            onChange={e =>
              setFilters(prevFilters => ({
                ...prevFilters,
                price: e.target.value,
              }))
            }
          />
        </label>
        <label>
          Min Mileage:
          <input
            type="number"
            value={filters.minMileage}
            onChange={e =>
              setFilters(prevFilters => ({
                ...prevFilters,
                minMileage: e.target.value,
              }))
            }
          />
        </label>
        <label>
          Max Mileage:
          <input
            type="number"
            value={filters.maxMileage}
            onChange={e =>
              setFilters(prevFilters => ({
                ...prevFilters,
                maxMileage: e.target.value,
              }))
            }
          />
        </label>
        <button onClick={applyFilters}>Search</button>
      </div>

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
