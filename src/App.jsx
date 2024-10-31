import { useState, useEffect } from 'react';
import Navbar from './Component/Header/Navbar';
import Players from './Component/Players/Players';
import SelectedPlayers from './Component/Selectplayer/Selectplayer';
import Banner from './Component/Banner/Banner';
import Footer from './Component/Footer/Footer';
import ToggleButton from './Component/ToggleButton/ToggleButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [view, setView] = useState("available");

  useEffect(() => {
    fetch('./Players.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  const handleAddCoins = () => {
    setCoins(prevCoins => prevCoins + 6000000);
    toast.success("Free coin claimed");
  };

  const handlePlayerSelect = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error("You can only select up to 6 players.");
      return;
    }
    if (selectedPlayers.some(selected => selected.name === player.name)) {
      toast.error("This player is already selected.");
      return;
   
    }
    if (player.price > coins) {
      toast.error("Insufficient balance to select this player.Please claim some free coins first");
      return;
    }
    toast.success(`Congratulations!! ${player.name} is added to your team`);

    setCoins(prevCoins => prevCoins - player.price);
    setSelectedPlayers([...selectedPlayers, player]);
  };

  const handlePlayerDelete = (player) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.name !== player.name));
    setCoins(prevCoins => prevCoins + player.price);
  };
  const showAvailablePlayers = () => {
    setView("available");
  };


  return (
    <>
      <div className='container px-4 mx-auto'>
        <Navbar coins={coins} />
        <Banner onClaimFreeCredit={handleAddCoins} />
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />

       <div className='sticky z-50 py-5 transition-all top-10'>
       <ToggleButton 
          selectedPlayersCount={selectedPlayers.length} 
          view={view} 
          setView={setView} 
        />

       </div>
       <div
  className={`gap-4 py-4 mt-4 ${
    view === "available" ? "grid grid-cols-1 md:grid-cols-3" : "flex flex-row w-full overflow-x-auto"
  } player`}
>
  {view === "available" ? (
    players.map(player => (
      <Players
        key={player.name}
        player={player}
        claimedCoins={coins}
        onPlayerSelect={handlePlayerSelect}
      />
    ))
  ) : (
    <SelectedPlayers
      players={selectedPlayers}
      onPlayerDelete={handlePlayerDelete}
      onAddMorePlayers={showAvailablePlayers}
    />
  )}
</div>

      </div>

      <div className='py-6 mt-4'>
        <Footer />
      </div>
    </>
  );
}

export default App;
