import { useForm } from "react-hook-form";
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
  const useFormVar = useForm();

  return (
    <div className="profile">
      <InputForm useForm={useFormVar} />
      {window.localStorage.getItem("user") && (
        <TranslatedSign useForm={useFormVar} />
      )}
    </div>
  );
};

export default FrontPage;
