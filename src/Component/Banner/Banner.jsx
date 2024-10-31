import './Banner.css';
import Banner1 from '../../assets/banner-main.png';
import PropTypes from 'prop-types';

function Banner({ onClaimFreeCredit }) {
    return (
      
         <div className="flex items-center justify-center bg-black myBanner">   
           <div className='text-center'>
           <img src={Banner1} alt="" className='mx-auto h-200px w-300px'/>
           <h1 className='text-3xl font-semibold text-white md:text-4xl'> My Dream 11 cricket team, packed with power-hitters, skilled all-rounders, and deadly bowlers.</h1>
            <h3 className='text-white opacity-50'>This team is a force to be reckoned with!</h3>
            <button 
          onClick={onClaimFreeCredit}
          className="px-4 py-2 mt-4 font-semibold text-black rounded bg-lime-400"
        >
          Claim Free Credit
        </button>
           </div>
           </div>
       
      
    );
}

export default Banner; 

Banner.propTypes = {
  onClaimFreeCredit: PropTypes.func.isRequired,
};