import bg from './bg.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className='container'>
        <div className='box box-1'>
          <h1>
            About Ezi
            <span
              style={{
                color: 'blue',
              }}
            >
              fx
            </span>
          </h1>
          <p>
            Ezifx has been dedicated to providing seamless trading experiences
            and maximizing profitable opportunities in the market for over seven
            years. Our multi-asset brokerage platform offers not only financial
            investments but also opportunities for learning, exploration, and
            networking through our esteemed partnerships and strong alliances.
          </p>
          <p>
            With a wealth of combined market experience spanning over several
            years,, our management team has led Ezifx to become an award-winning
            broker with a global presence in 187 countries and 6 offices
            worldwide. We prioritize the highest regulatory and security
            standards to ensure your peace of mind while investing.
          </p>
          <p>
            Trade easily with our intuitive platform offering over 1500
            instruments, ultra-fast execution, and 24/7 customer support.
          </p>
          <p style={{ 'font-weight': '600' }}>
            Join Ezifx today to gain a competitive edge in the market.
          </p>
          <div className='hero-buttons'>
            <button
              type='button'
              className='inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
              data-te-ripple-init
            >
              Live Account<span className='get-button'> &#8594;</span>
            </button>
            <button
              type='button'
              className='inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
              data-te-ripple-init
            >
              Demo Account <span className='get-button'> &#8594;</span>
            </button>
          </div>
          <p
            style={{
              color: 'grey',
              fontSize: '15px',
              marginTop: '10px',
              fontWeight: 300,
            }}
          >
            Comming Soon
          </p>
        </div>

        <div className='box box-2'>
          <img src={bg} alt='img' />
        </div>
      </div>
    </>
  );
};

export default Header;
