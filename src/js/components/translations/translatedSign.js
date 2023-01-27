import { useDispatch, useSelector } from "react-redux";
import { clearTranslation } from "../../reducers/translationSlice";
import "../../../sass/translatedSign.sass";

/**
 * Renders a card with translation of user input
 * @returns {JSX.Element}
 */
const TranslatedSign = () => {
  const { translation } = useSelector((state) => state.translation);
  const translationCharts = translation.split("");
  const dispatch = useDispatch();
  /**
   * Based on user input return an image or
   * an empty div with same width as image
   * @param {String} input Users input
   * @returns {JSX.Element}
   */
  const translate = (input) => {
    if (input === " ") return <div className="sign"></div>;
    return (
      <img
        className="sign"
        alt={input.toLowerCase() + " sign"}
        src={require(`../../../Assets/individial_signs/${input.toLowerCase()}.png`)}
      />
    );
  };

  return (
    <div className="translatedSign">
      <div className="translationContainer">
        {translation && <>{translationCharts.map((char) => translate(char))}</>}
      </div>
      <button
        className="clearButton"
        onClick={() => {
          dispatch(clearTranslation());
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default TranslatedSign;
