
import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
import { arttir, azalt, sifirla } from "../../redux/actions/counterActions";

const Counter = () => {

  //degişkenler useSelector hookuyla getirilir

  const{yazi,sayac}=useSelector((state)=>state.counterReducer)
  
  //fonksiyonları actıon aracılıgıyla reducer dan getirme komutu
  const dispatch1=useDispatch()

  return (
    <div className="app">
      <h2 className="counter-header"> Counter with Redux</h2>
      <h1>{sayac } </h1>
      {/* sayac */}
      <h2>{yazi } </h2>
      {/* text1 */}
      <div>
        <button
          className="counter-button positive"

          onClick={()=>dispatch1(arttir())}
        >
          ARTTIR
        </button>

        <button
          className="counter-button zero"
          onClick={()=> dispatch1(sifirla())}
        >
          RESET
        </button>
        <button
          className="counter-button negative"
          onClick={()=> dispatch1(azalt())}
        >
          AZALT
        </button>
      </div>
    </div>
  );
}

export default Counter