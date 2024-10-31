
import PropTypes from 'prop-types';

import logo from '../../assets/Logo.png';

export default function Navbar({ coins }) {
  return (
    <div className='sticky top-0 z-50 flex items-center justify-between p-4 transition-all duration-300 bg-white/30 backdrop-blur-none'>
      <div>
        <img src={logo} alt="Cricket Team Logo" className="h-10 md:h-12" />
      </div>
      <div className='items-center hidden space-x-8 md:flex'>
        <ul className="flex space-x-6 text-lg text-black">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
        <button className="flex items-center p-2 space-x-2 border rounded-lg">
          <span>{ coins }</span>
          <img src="https://img.icons8.com/emoji/48/coin-emoji.png" alt="Coin Emoji" className="w-6 h-6" />
        </button>
      </div>

     
      <div className="md:hidden">
      <button className="flex items-center p-2 space-x-2 border rounded-lg">
          <span>{ coins }</span>
          <img src="https://img.icons8.com/emoji/48/coin-emoji.png" alt="Coin Emoji" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  coins: PropTypes.number.isRequired,
};