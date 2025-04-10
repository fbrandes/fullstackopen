import Part from "./Part";

const Content = (props: { part1: any; exercises1: any; part2: any; exercises2: any; part3: any; exercises3: any }) => {
    return <>
        <Part part={props.part1} exercises={props.exercises1}/>
        <Part part={props.part2} exercises={props.exercises2}/>
        <Part part={props.part3} exercises={props.exercises3}/>
    </>
}

export default Content
