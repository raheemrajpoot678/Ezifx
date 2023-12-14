import './Explore.css';

const Explore = () => {
  return (
    <>
      <div className='container-explore'>
        <div className='ex-box ex-box-1'>
          <h1>Why Investors Choose Ezifx?</h1>
          <p>
            Baazex provides access to the global markets for everyone,
            regardless <br />
            of account size. Trade on tight spreads from 0.1 pips*
          </p>
        </div>
        <div className='ex-box ex-box-2'>
          <div className='sub-box'>
            <div className='img'>
              <img
                src='https://baazex.com/img/aboutus/International-Regulated-Laws-icon.png'
                alt=''
              />
            </div>
            <div className='text'>
              <h1>International Regulated Laws</h1>
              <p>
                Baazex follows the regulated laws outlined by the Financial
                Services Authority (FSA) of Seychelles.
              </p>
            </div>
          </div>
          <div className='sub-box'>
            <div className='img'>
              <img
                src='https://baazex.com/img/aboutus/Encryption-Technique--icon.png'
                alt=''
              />
            </div>
            <div className='text'>
              <h1>Encryption Technique</h1>
              <p>
                Baazex takes measures to ensure secure communication with
                clients, protecting customers during their transactions with
                Baazex.
              </p>
            </div>
          </div>
          <div className='sub-box'>
            <div className='img'>
              <img
                src='https://baazex.com/img/aboutus/Protected-Funds-icon.png'
                alt=''
              />
            </div>
            <div className='text'>
              <h1>Protected Funds</h1>
              <p>
                We take measures to protect your funds with diligence and care.
                You can trade with confidence, knowing that your funds are safe.
              </p>
            </div>
          </div>
          <div className='sub-box'>
            <div className='img'>
              <img
                src='https://baazex.com/img/aboutus/Segregated-Funds-icon.png'
                alt=''
              />
            </div>
            <div className='text'>
              <h1>Segregated Funds</h1>
              <p>
                Baazex has kept all client funds in major top-tier banks,
                separate from the company’s funds.
              </p>
            </div>
          </div>
          <div className='sub-box'>
            <div className='img'>
              <img
                src='https://baazex.com/img/aboutus/Bank-Partnerships-icon.png'
                alt=''
              />
            </div>
            <div className='text'>
              <h1>Bank Partnerships</h1>
              <p>
                Baazex has partnered with multiple top-rated banks and regulated
                credit institutions to make sure that clients’ funds are always
                available.
              </p>
            </div>
          </div>
          <div className='sub-box'>
            <div className='img'>
              <img
                src='https://baazex.com/img/aboutus/Financial-Standards-icon.png'
                alt=''
              />
            </div>
            <div className='text'>
              <h1>Financial Standards</h1>
              <p>
                Baazex has strict financial standards and is committed to
                transparency. You can trust us to handle your money responsibly.
              </p>
            </div>
          </div>
        </div>
        <div className='ex-box ex-box-3'>
          <button
            type='button'
            className='inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
            data-te-ripple-init
          >
            Explore Ezifx Account<span className='get-button'> &#8594;</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Explore;
