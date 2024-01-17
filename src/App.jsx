import Card from "./Components/Card";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Banner from "./Components/Banner";

function App() {
  const defaultTheme = createTheme({
    palette: { mode: "light", secondary: { main: "#ffffff" } },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Banner />
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
    </ThemeProvider>
  );
}

export default App;
