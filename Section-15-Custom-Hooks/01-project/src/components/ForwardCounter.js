import Card from './Card';
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  //const [counter, setCounter] = useState(0);

  const counter =  useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;