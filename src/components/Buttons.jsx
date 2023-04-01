import React from "react"
import { Button, Box } from "@mui/material"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined"

export const Buttons = ({
  shipment,
  shipments,
  setShipments,
  setSingleShipment,
}) => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <DetailsButton
        shipment={shipment}
        setSingleShipment={setSingleShipment}
      />
      <DeleteButton
        shipment={shipment}
        shipments={shipments}
        setShipments={setShipments}
      />
    </Box>
  )
}

export const DeleteButton = ({ shipment, shipments, setShipments }) => {
  const handleRowDelete = (e) => {
    e.preventDefault()
    console.log(shipments)
    console.log(shipment.orderNo)
    const filteredShipments = shipments.filter(
      (s) => s.orderNo !== shipment.orderNo
    )
    setShipments(filteredShipments)
    console.log(filteredShipments)
  }

  return (
    <Button
      sx={{ backgroundColor: "#f77777" }}
      onClick={(e) => handleRowDelete(e)}
    >
      <DeleteForeverOutlinedIcon style={{ color: "#fff" }} />
    </Button>
  )
}

export const DetailsButton = ({ shipment, setSingleShipment }) => {
  return (
    <Button
      onClick={() => setSingleShipment(shipment)}
      sx={{ backgroundColor: "#9cc2ff" }}
    >
      <InfoOutlinedIcon style={{ color: "#fff" }} />
    </Button>
  )
}
