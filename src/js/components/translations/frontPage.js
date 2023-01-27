import { useSelector } from "react-redux";
import InputForm from "./inputForm.js";
import TranslatedSign from "./translatedSign.js";

const FrontPage = () => {
  const {id} = useSelector((state) => state.user)

  return (
    <div className="profile">
      <InputForm />
      {window.localStorage.getItem('user') && <TranslatedSign />}
    </div>
  );
};

export default FrontPage;