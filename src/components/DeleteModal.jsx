import React from "react"
import { Modal, Typography, Box, Button } from "@mui/material"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

export const DeleteModal = ({
  open,
  setOpenDeleteModal,
  singleShipment,
  shipments,
  setShipments,
}) => {
  const handleDelete = (e) => {
    e.preventDefault()
    const filteredShipments = shipments.filter(
      (s) => s.orderNo !== singleShipment.orderNo
    )
    handleClose()
    setShipments(filteredShipments)
  }
  const handleClose = () => {
    setOpenDeleteModal(false)
  }
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete shipment info?
          </Typography>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleDelete}>delete</Button>
        </Box>
      </Modal>
    </div>
  )
}
