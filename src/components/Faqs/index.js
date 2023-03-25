// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {isCardExtended: false}

  extendCard = id => {
    this.setState(prevState => ({isCardExtended: !prevState.isCardExtended}))
  }

  render() {
    const {faqsList} = this.props
    const {isCardExtended} = this.state
    console.log(isCardExtended)

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="main-heading">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(eachObject => (
              <FaqItem
                eachObject={eachObject}
                key={eachObject.id}
                extendCard={this.extendCard}
                isCardExtended={isCardExtended}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
