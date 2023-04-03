import React from "react"
import { Box, Typography } from "@mui/material"

const style = {
  borderRadius: 5,
  border: "1px solid #d5d8de",
  width: 400,
  height: 200,
  boxShadow: 5,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}
const Error = ({ error }) => {
  return (
    <Box sx={style}>
      <Typography
        sx={{ fontSize: 24, color: "#757575", textTransform: "uppercase" }}
      >
        Something went wrong
      </Typography>
      <Typography sx={{ color: "#e65e5e" }}>{error?.code}</Typography>
    </Box>
  )
}

export default Error
