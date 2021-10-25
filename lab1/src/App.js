import "./App.css";

import MyDateDiv from "./MyDateDiv";
function App() {
  const myMenue = {
    name: "Chiecken Burger",
    price: "30SR",
    img: "https://vikalinka.com/wp-content/uploads/2021/07/Greek-Chicken-Burger-1CR2-Edit.jpg",
  };

  return (
    <div>
      <button
        className="mybtn"
        onClick={() => window.open("https://www.hyperiondev.com/")}
      >
        Click me{" "}
      </button>
      <br />
      <br />
      <MyDateDiv />

      <ul className="mylist">
        <li>Mongo DB</li>
        <li>Express JS </li>
        <li>React JS/ Redux</li>
        <li>Node JS</li>
      </ul>

      <div className="menueList">
        <img
          src={myMenue.img}
          width={400}
          height={400}
          style={{ borderRadius: "20px" }}
        />
        <div style={{ marginTop: 60 }}>
          <h2>{myMenue.name}</h2>
          <h3>{myMenue.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
