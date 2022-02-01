import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Page2() {
  const navigate = useNavigate();

  const handleRedirectToPage1 = () => {
    // const form = new FormData();
    // form.append('fname', 'John');

    // const encoded = new URLSearchParams(form);

    // navigate('/page1/1234', { state: encoded });

    const obj = {
      name: 'Jack',
    };

    // navigate('/page1');

    // can be used to pass id and not show on url
    navigate('/page1', { state: obj });
  };

  return (
    <div>
      Page 2 <button onClick={handleRedirectToPage1}>Click to Page 1</button>
    </div>
  );
}
