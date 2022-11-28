// Imports Pages
import Homepage from "./pages/Homepage/Homepage";
import { getCryptoList } from "./reducers/cryptoSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptoList());
  }, [dispatch]);

  return (
    <div className="bg-white container mx-auto py-7">
      <Homepage />
    </div>
  );
};

export default App;
