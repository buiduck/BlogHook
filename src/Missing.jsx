import {Link }from 'react-router-dom';

const Missing = () => {
  return (
      <main className='Missing'>
        <h1> Missing</h1>
        <p2>Page not Found</p2>
        <p>Well, That's dissapointing</p>
        <p>
            <Link to='/'>Visit our Homepage</Link>
        </p>
      </main>
  )
}

export default Missing