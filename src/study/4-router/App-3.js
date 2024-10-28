import { useState, useEffect } from "react";

// coin api 리스트 뿌려주기
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    /* coin api 가져와서 useState에 coin array 담아 사용. */
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json()
        // ).then(json => console.log(json));
      ).then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {/* <h1>The Coins!({coins.length})</h1> */}
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD</option>
          ))}
        </select>}
      {/* <ul>
        {coins.map((coin) => (
          <li>{coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD</li>
        ))}
      </ul> */}
      {/* // 여기에 두면 loading할 때 비어있는 select가 보여서 안예쁨.
      <select>
        {coins.map((coin) => (
          <option>{coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD</option>
        ))}
      </select> */}
    </div>
  );
}

export default App;
