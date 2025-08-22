import { Box } from "@mui/material";
import Funnel from "./Funnel";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Funnel />
    </Box>
  );
}

export default App;
