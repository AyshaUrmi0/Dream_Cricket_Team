import PropTypes from "prop-types";

export default function Players({ player, onPlayerSelect }) {
  const { name, role, team, batting_style, price, image, rating, choose_player } = player;

  return (
    <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg card">
      <figure>
        <img src={image} alt={name} className="object-cover w-full rounded-t-lg h-100px" />
      </figure>
      <div className="p-4 card-body">
       <div className="flex items-center gap-2">
       <img src={image} alt={name} className="w-12 h-12 rounded-full" />
       <h2 className="text-lg font-bold card-title">{name}</h2>
       </div>
       <div className="flex items-center justify-between gap-5">
       <div className="flex items-center gap-2">
       <img src="https://img.icons8.com/?size=96&id=TyDZNgOeTyqW&format=png" className="w-6 h-6" alt="flag" />
       <p>{team}</p>
       </div>
       <p className="text-sm text-gray-500">{role}</p>
       </div>
        <p>{rating}</p>
        <p className="text-sm">{batting_style}</p>
        <p className="text-sm">Price: {price}</p>

        
      </div>

      <div className="justify-center mt-4 mb-4 card-actions">
          <button className="items-center w-1/2 btn bg-lime-400" onClick={() => onPlayerSelect(player)}>
            {choose_player}
          </button>
        </div>
    </div>
  );
}

Players.propTypes = {
  player: PropTypes.object.isRequired,
  onPlayerSelect: PropTypes.func.isRequired,
};
