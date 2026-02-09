import Register from "./components/Register";
import Audience from "./pages/audience";

const App = () => {
  return (
    <div className="flex flex-col gap-8">
      <Register />
      <Audience />
    </div>
  );
};

export default App;
