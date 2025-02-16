import { Button } from "@mui/material";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: "url(/bgImage.webp)",
          height: "50vh",
          color: "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "0px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <ResponsiveAppBar />
        <h1>Welcome to Our Meditation Journey</h1>
        <p>Relax and find your inner peace.</p>
      </div>
      <h1 style={{ marginTop: "50px" }}> Calm your mind. Change your life.</h1>
      <p>The #1 app for sleep, meditation and relaxation</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        <Button
          size="medium"
          variant="contained"
          sx={{
            borderRadius: "10px",
            width: "300px",
            padding: "10px",
            backgroundColor: "#685582",
          }}
        >
          Try for free
        </Button>
        <Button
          size="medium"
          variant="contained"
          sx={{
            borderRadius: "10px",
            width: "300px",
            backgroundColor: "#685582",
          }}
        >
          Already have an account?
        </Button>
      </div>
      <h1 style={{ marginTop: "80px" }}>We're here to help you feel better.</h1>
    </div>
  );
}

export default App;