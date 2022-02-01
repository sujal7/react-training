import React from 'react';
import { useEffect } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

export default function Page1() {
  const location = useLocation();
  const params = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log({ location });
    console.log({ params });
    console.log('query', searchParams.get('query'));

    // console.log({location.name});
  }, [location, params, searchParams]);

  return <div>Page 1</div>;
}
