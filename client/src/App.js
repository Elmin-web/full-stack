import { useSelector } from "react-redux";
import Homepage from "./components/Homepage/Homepage";
const App = () => {
  const test = useSelector((state) => state);
  console.log(test);
  return (
    <div className="app">
      <Homepage />
    </div>
  );
};

export default App;
