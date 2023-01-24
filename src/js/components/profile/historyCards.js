const HistoryCards = ({loggedUser}) => {

  return (
    <div className="historyCards">
        {loggedUser &&
      <dl>{loggedUser.translations.map( (translation, index) => {
        return <dt key={index}>{translation}</dt>

      })}</dl>}
    </div>
  );
};

export default HistoryCards;
