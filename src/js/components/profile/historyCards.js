import "../../../sass/historyCards.sass";
import logo from "../../../Assets/Logo.png";

const HistoryCards = ({ loggedUser }) => {
  const filteredTranslations =
    loggedUser &&
    loggedUser.translations.filter(
      (translation, index) => index >= loggedUser.translations.length - 10
    );

  return (
    <>
      {loggedUser && (
        <div className="historyCardsContainer">
          {filteredTranslations.map((translation, index) => {
            //console.log(translation)
            return (
              <div className="historyCard" key={index}>
                <img src={logo} className="historyCardLogo" />
                <div className="translation">{translation}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default HistoryCards;
