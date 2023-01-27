import { useSelector } from "react-redux";
import InputForm from "./inputForm.js";
import TranslatedSign from "./translatedSign.js";

/**
 * Renders inputForm element &
 * If user logged renders translatedSign component
 * @returns {JSX.Element}
 */
const FrontPage = () => {
  //This is a quickfix to rerender page
  const { id } = useSelector((state) => state.user);

  return (
    <div className="profile">
      <InputForm />
      {window.localStorage.getItem("user") && <TranslatedSign />}
    </div>
  );
};

export default FrontPage;
