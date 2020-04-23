import React from 'react';
import { useCookies } from '../hooks';

const Cookie = () => {
  const [cookie, setCookies] = useCookies({ key: 'test' });
  return (
    <div>
      <h1>{cookie}</h1>
      <input value={cookie || ''} onChange={e => setCookies(e.target.value)} />
    </div>
  );
};

export default Cookie;
