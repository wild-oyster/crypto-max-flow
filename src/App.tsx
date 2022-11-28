import { getCryptoList } from "./reducers/cryptoSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptoList());
  }, [dispatch]);

  return <div className="bg-black text-white h-full text-">hi</div>;
}

export default App;
