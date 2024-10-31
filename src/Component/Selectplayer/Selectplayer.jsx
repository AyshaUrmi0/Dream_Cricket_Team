import PropTypes from "prop-types";

export default function SelectedPlayers({ players, onPlayerDelete, onAddMorePlayers }) {
  return (
    <div className="w-full p-4 mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
      {players.map(player => (
        <div 
          key={player.name} 
          className="flex items-center justify-between p-4 mb-2 bg-gray-100 rounded-lg"
        >
          <div className="flex items-center gap-4">
            <img src={player.image} alt={player.name} className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="text-lg font-semibold">{player.name}</h2>
              <p className="text-sm text-gray-500">{player.batting_style}</p>
            </div>
          </div>
          <button 
            className="text-red-500 hover:text-red-700" 
            onClick={() => onPlayerDelete(player)}
          >
            <img src="https://img.icons8.com/ios-glyphs/30/fa314a/trash.png" alt="Delete" className="w-6 h-6" />
          </button>
        </div>
      ))}
      <div>
        <button 
          className="w-3/12 btn bg-lime-400" 
          onClick={onAddMorePlayers} 
        >
          Add More Players
        </button>
      </div>
    </div>
  );
}

SelectedPlayers.propTypes = {
  players: PropTypes.array.isRequired,
  onPlayerDelete: PropTypes.func.isRequired,
  onAddMorePlayers: PropTypes.func.isRequired, 
};
