// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachObject, extendCard, isCardExtended} = props
  const {questionText, answerText, id} = eachObject

  const showOrHideAnswer = () => {
    extendCard(id)
  }

  const displayingAnswer = isCardExtended ? (
    <>
      <hr className="hr-line" />
      <p className="answer">{answerText}</p>
    </>
  ) : (
    ''
  )

  const icon = !isCardExtended
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

  const iconAlt = isCardExtended ? 'minus' : 'plus'

  return (
    <li className="list-item">
      <div className="question-container">
        <p className="question">{questionText}</p>
        <button type="button" className="button" onClick={showOrHideAnswer}>
          <img src={icon} alt={iconAlt} className="plus-image" />
        </button>
      </div>
      {displayingAnswer}
    </li>
  )
}

export default FaqItem
