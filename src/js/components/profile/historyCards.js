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
        <div className="popUp historyCardsContainer flex flexColumn ">
          {filteredTranslations.map((translation, index) => {
            return (
              <div
                className={"historyCard flex centerItems borderAndShadow "}
                key={index}
              >
                <div className="translation">{translation}</div>
                <img src={logo} className="historyCardLogo" alt="logo" />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default HistoryCards;
