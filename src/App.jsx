import Card from "./Components/Card";
function App() {
  return (
    <>
      <div id="app" className="background">
        <h1>Milosz Wrobel</h1>
      </div>
      <div className="grid-container main">
        <div class="grid-item">
          <Card
            className="card"
            title="Tic Tac Toe project website"
            link="https://github.com/MiloszWrobel/Tic-Tac-Toe-Website"
            imgLink={"../../Public/Toe Website.png"}
          >
            <p>Here is some text</p>
          </Card>
        </div>
        <div class="grid-item">
          <Card
            className="card"
            title="Tic Tac Toe project website"
            link="https://github.com/MiloszWrobel/Tic-Tac-Toe-Website"
            imgLink={"../../Public/Toe Website.png"}
          >
            <p>Here is some text</p>
          </Card>
        </div>
        <div class="grid-item">
          <Card
            className="card"
            title="Tic Tac Toe project website"
            link="https://github.com/MiloszWrobel/Tic-Tac-Toe-Website"
            imgLink={"../../Public/Toe Website.png"}
          >
            <p>Here is some text</p>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
