import "../../../sass/historyCards.sass";
import logo from "../../../Assets/Logo.png";
import { useSelector } from "react-redux";

const HistoryCards = () => {

  const {username, translations} = useSelector(state => state.user)

  const filteredTranslations =
    username &&
    translations.filter(
      (translation, index) => index >= translations.length - 10
    );

  return (
    <>
      {username && (
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
