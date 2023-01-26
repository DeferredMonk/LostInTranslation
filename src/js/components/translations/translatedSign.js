import { useDispatch, useSelector } from "react-redux";
import { clearTranslation } from "../../reducers/translationSlice";
import "../../../sass/translatedSign.sass";

const TranslatedSign = () => {
  const { translation } = useSelector((state) => state.translation);
  const translationCharts = translation.split("");
  const dispatch = useDispatch();

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
