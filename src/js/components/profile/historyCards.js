import "../../../sass/historyCards.sass";
import logo from "../../../Assets/Logo.png";
import { useSelector } from "react-redux";

/**
 * This component renders user's last ten translations
 * @returns {JSX element}
 */

const HistoryCards = () => {
  const { username, translations } = useSelector((state) => state.user);

  /**
   * This function returns user's last ten translations from user reducer
   */
  const filteredTranslations =
    username &&
    translations.filter(
      (translation, index) => index >= translations.length - 10
    );

  return (
    <>
      {username && (
        <div className="historyCardsContainer flex flexColumn">
          {filteredTranslations.map((translation, index) => {
            return (
              <div
                className={"historyCard flex centerItems borderAndShadow popUp"}
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
