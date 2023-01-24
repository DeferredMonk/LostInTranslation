const AvatarCard = ({loggedUser}) => {
    return (
      <div className="avatarCard">
        <p>{loggedUser && loggedUser.username}</p>
        <div>
         
        </div>
      </div>
    )
}

export default AvatarCard