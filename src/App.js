import {Component} from 'react'

import Feedback from './components/Feedback'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {
    emojis: resources.emojis,
    loveEmoji: resources.loveEmojiUrl,
    value: false,
  }

  ThanksCard = id => {
    const {value} = this.state
    this.setState({value: true})
  }

  render() {
    const {emojis, loveEmoji, value} = this.state

    let card
    if (value === false) {
      card = (
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="ul-container">
            {emojis.map(item => (
              <Feedback
                emojiDetails={item}
                key={item.id}
                ThanksCard={this.ThanksCard}
              />
            ))}
          </ul>
        </div>
      )
    } else {
      card = (
        <div className="card-container1">
          <img src={loveEmoji} className="image1" alt=" love emoji" />
          <h1 className="heading1">Thank you!</h1>
          <p className="para">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      )
    }

    return <div className="bg-container">{card}</div>
  }
}

export default App
