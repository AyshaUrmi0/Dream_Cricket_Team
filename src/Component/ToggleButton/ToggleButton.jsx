
import PropTypes from 'prop-types';

export default function ToggleButton({ selectedPlayersCount, view, setView }) {
  return (
    <div className="flex flex-wrap items-center justify-between mt-4 md:flex-nowrap">
    <h1 className="mb-2 text-2xl font-semibold md:mb-0">
      {view === "available" ? "Available Players" : "Selected Player"} ({selectedPlayersCount}/6)
    </h1>
    <div className="flex gap-2 md:ml-auto">
      <button
        className={`btn ${view === "available" ? " bg-lime-400" : ""}`}
        onClick={() => setView("available")}
      >
        Available
      </button>
      <button
        className={`btn ${view === "selected" ? " bg-lime-400" : ""}`}
        onClick={() => setView("selected")}
      >
        Selected <span>({selectedPlayersCount})</span>
      </button>
    </div>
  </div>
  );
}

ToggleButton.propTypes = {
  selectedPlayersCount: PropTypes.number.isRequired,
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};