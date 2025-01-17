import * as React from 'react'
import {
  Question,
  QuestionHeader,
  QuestionChoices,
  QuestionBody,
  QuestionFooter,
  QuestionAnswer,
  QuestionSubmit,
  QuestionProps,
} from './index'

const MultipleChoice: React.FC<{
  question: QuestionProps
}> = ({question}) => {
  return (
    <Question {...question}>
      <QuestionHeader />
      <QuestionBody>
        <QuestionChoices />
        <QuestionSubmit>Submit</QuestionSubmit>
        <QuestionAnswer />
      </QuestionBody>
      <QuestionFooter />
    </Question>
  )
}

export default MultipleChoice
