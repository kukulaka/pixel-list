import React, { useState, useEffect } from 'react';
import sessionApi from '../api/sessionApi';
import Spinner from '../components/styled/spinner';
import Error from '../components/styled/error';
import MegaTable from '../components/styled/mega-table';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      await sessionApi
        .getCurrentNames()
        .then(items => {
          if (mounted) {
            setList(items);
          }
        })
        .catch(error => {
          setError(true);
        });
      setLoading(false);
    };
    fetchData();
    return () => (mounted = false);
  }, []);

  if (loading) {
    return <Spinner loadingText="Loading, please wait" spinnerSize="large" />;
  }

  if (error) {
    return <Error errorText="The API has failed to retrieve data :`(" />;
  }

  if (!loading && !error) {
    return (
      <MegaTable
        data={list.data}
        title="People from API"
        info="You can click on the row to add people to your list and click again to remove them. Click on the column names to sort. Have not implemented nice icons for sort, this can be done easily."
        id="api-table"
      />
    );
  }
};

export default Main;
