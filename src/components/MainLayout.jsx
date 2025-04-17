import PlayerBio from './PlayerBio';
import PlayerCards from './PlayerCards';
import Contact from './Contact';
import VolleyballFilm from './VolleyballFilm';
// import Offers from './Offers';
// import Media from './Media';
import Academics from './Academics';
import AskAlly from './AskAlly';
import ExtendedRally from './ExtendedRally';

const MainLayout = () => {
  return (
    <>
      <div id="player-bio">
        <PlayerBio />
      </div>
      <div id="volleyball-film">
        <VolleyballFilm />
      </div>
      <div id="ask-ally">
        <AskAlly />
      </div>
      <div id="player-cards">
        <PlayerCards />
      </div>
      {/* <div id="media">
        <Media />
      </div> */}
      <div id="extended-rally">
        <ExtendedRally />
      </div>
      <div id="academics">
        <Academics />
      </div>
      {/* <div id="offers">
        <Offers />
      </div> */}
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default MainLayout;