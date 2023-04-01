import "./App.css"
import ShipmentsTable from "./components/ShipmentsTable"
import { Box } from "@mui/system"
function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ShipmentsTable />
    </Box>
  )
}

export default App
