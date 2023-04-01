import React from "react"
import { Button, Box } from "@mui/material"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined"

export const Buttons = ({
  shipment,
  shipments,
  setShipments,
  setSingleShipment,
  setOpenDeleteModal,
  setOpenDetails,
}) => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <DetailsButton
        shipment={shipment}
        setSingleShipment={setSingleShipment}
        setOpenDetails={setOpenDetails}
      />
      <DeleteButton
        shipment={shipment}
        shipments={shipments}
        setShipments={setShipments}
        setOpenDeleteModal={setOpenDeleteModal}
        setSingleShipment={setSingleShipment}
      />
    </Box>
  )
}

export const DeleteButton = ({
  shipment,
  setOpenDeleteModal,
  setSingleShipment,
}) => {
  const handleModal = (e) => {
    e.preventDefault()
    setOpenDeleteModal(true)
    setSingleShipment(shipment)
  }

  return (
    <Button sx={{ backgroundColor: "#f77777" }} onClick={(e) => handleModal(e)}>
      <DeleteForeverOutlinedIcon style={{ color: "#fff" }} />
    </Button>
  )
}

export const DetailsButton = ({
  shipment,
  setSingleShipment,
  setOpenDetails,
}) => {
  return (
    <Button
      onClick={() => {
        setSingleShipment(shipment)
        setOpenDetails(true)
      }}
      sx={{ backgroundColor: "#9cc2ff" }}
    >
      <InfoOutlinedIcon style={{ color: "#fff" }} />
    </Button>
  )
}
