import { Key } from "react";
import Part from "./Part";

const Content = ({parts}) => {
    const partsElements = parts.map((part: unknown, i: Key) => <Part key={i} part={part} />);

    return <>{partsElements}</>;
};

export default Content;