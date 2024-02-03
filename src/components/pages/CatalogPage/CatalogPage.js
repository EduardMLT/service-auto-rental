import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { fetchHome } from '../../../api';
import { HomeList } from './CatalogPageList';
import { Loader } from '../../LoaderSpinner/LoaderSpinner';

const CatalogPage = () => {
  const [trends, setTrends] = useState([]);
  const [loader, setLoader] = useState(false);

  console.log('1.3 - це - CatalogPage -', { trends, setTrends });

  useEffect(() => {
    async function getMovies() {
      console.log('1.4 - це - CatalogPage -');

      setLoader(true);
      try {
        const movies = await fetchHome();

        console.log('1.5 - це - CatalogPage -');

        setTrends(movies);
      } catch (error) {
        toast.error(error);
      } finally {
        console.log('1.6 - це - CatalogPage -', { setTrends });

        setLoader(false);
      }
    }
    console.log('1.7 - це - CatalogPage -');

    getMovies();
  }, []);

  return (
    <>
      {loader && <Loader />}
      <HomeList items={trends} />
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
};

export default CatalogPage;
