const Total = ({ parts }) => {
    let total = parts.reduce((a: any, b: any) => a + b.exercises, 0);
    return <b>Total of {total} exercises</b>;
};

export default Total
