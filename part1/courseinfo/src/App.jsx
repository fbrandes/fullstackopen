import Header from "./Header.tsx";
import Content from "./Content.tsx";
import Total from "./Total.tsx";

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course}/>
            <Content exercises1={exercises1}
                     exercises2={exercises2}
                     exercises3={exercises3}
                     part1={part1}
                     part2={part2}
                     part3={part3}/>
            <Total exercises1={exercises1}
                   exercises2={exercises2}
                   exercises3={exercises3}/>
        </div>
    )
}

export default App
