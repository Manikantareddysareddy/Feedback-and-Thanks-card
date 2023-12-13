import './index.css'

const Feedback = props => {
  const {emojiDetails, ThanksCard} = props

  const {id, name, imageUrl} = emojiDetails
  const ThankyouCard = () => {
    ThanksCard(id)
  }
  return (
    <li className="list-container">
      <img src={imageUrl} alt={name} className="image" onClick={ThankyouCard} />
      <p className="para">{name}</p>
    </li>
  )
}

export default Feedback
