import { useState } from 'react'


const Button = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>
}

const Statistics = (props) => {
    if(props.all === 0) {
        return <div>No feedback given</div>
    }
    return (
        <div>
            <StatisticLine text="good" value={props.g} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={props.all} />
            <StatisticLine text="average" value={(props.good - props.bad) / props.all} />
            <StatisticLine text="positive" value={(props.good / props.all * 100) + " %"} />
        </div>
    )
}

const StatisticLine = ({text, value}) => {
    return <p>{text} {value}</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

    const handleGood = () => {
        let increased = good + 1
        setGood(increased)
        setAll(increased + neutral + bad)
    }

    const handleNeutral = () => {
        let increased = neutral + 1
        setNeutral(increased)
        setAll(good +  increased + bad)
    }

    const handleBad = () => {
        let increased = bad + 1
        setBad(increased)
        setAll(good + neutral + increased)
    }

    return (
      <div>
        <h1>give feedback</h1>
        <Button text="good" onClick={() => handleGood()}/>
        <Button text="neutral" onClick={() => handleNeutral()}/>
        <Button text="bad" onClick={() => handleBad()}/>
        <h1>statistics</h1>
          <Statistics good={good} neutral={neutral} bad={bad} all={all}></Statistics>
      </div>
  )
}

export default App