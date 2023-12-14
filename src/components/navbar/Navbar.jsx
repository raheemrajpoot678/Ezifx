import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='logo'>
          <h2>
            Ezi
            <span
              style={{
                color: 'blue',
              }}
            >
              fx
            </span>
          </h2>
        </div>
        <div className='nav-links'>
          <ul>
            <li>
              <a href='/'> Account type</a>
            </li>
            <li>
              <a href='/'> Market</a>
            </li>
            <li>
              <a href='/'> Platform</a>
            </li>
            <li>
              <a href='/'> Promotion</a>
            </li>
            <li>
              <a href='/'> Partners</a>
            </li>
            <li>
              <a href='/'> Ezifx</a>
            </li>
          </ul>
        </div>
        <div className='signup-buttons'>
          <a href='/'>Sign in</a>
          <button
            type='button'
            className='inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
            data-te-ripple-init
          >
            Get satrted <span className='get-button'> &#8594;</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
