import React, { useEffect, useState } from "react"
import { Modal, Box, Typography, Button, TextField } from "@mui/material"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 350,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignItems: "start",
}

const DetailsPanel = ({
  open,
  setOpenDetails,
  singleShipment,
  setSingleShipment,
  shipments,
  setShipments,
}) => {
  const [disabled, setDisabled] = useState(true)
  const [mutated, setMutated] = useState(null)

  let entries
  if (singleShipment) {
    entries = Object.entries(singleShipment)
  }

  const saveChanges = () => {
    const idx = shipments?.indexOf(singleShipment)
    const filtered = shipments?.filter((s) => s !== singleShipment)
    filtered?.splice(idx, 0, mutated)
    setShipments(filtered)
  }
  const handleDisabled = (e) => {
    e.preventDefault()
    if (!disabled) {
      saveChanges()
    }
    setDisabled(!disabled)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpenDetails(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {singleShipment?.orderNo}
          </Typography>
          <ShipmentDetails
            entries={entries}
            disabled={disabled}
            singleShipment={singleShipment}
            setSingleShipment={setSingleShipment}
            shipments={shipments}
            setShipments={setShipments}
            mutated={mutated}
            setMutated={setMutated}
          />
          <Box>
            <Button onClick={() => setOpenDetails(false)}>close</Button>
            <Button onClick={(e) => handleDisabled(e)}>
              {disabled ? "change details" : "save changes"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

const ShipmentDetails = ({ entries, disabled, singleShipment, setMutated }) => {
  useEffect(() => {
    setMutated(singleShipment)
  }, [])
  const handleChange = (e, key) => {
    setMutated((prev) => ({ ...prev, [key]: e.target.value }))
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: 1000 }}>
      <Box
        sx={{
          display: "grid",
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        {entries?.map((entry) => (
          <TextField
            key={entry[0]}
            disabled={disabled}
            label={entry[0]}
            defaultValue={entry[1]}
            sx={{ width: 500 }}
            onChange={(e) => {
              handleChange(e, entry[0])
            }}
          />
        ))}
      </Box>
    </Box>
  )
}

export default DetailsPanel
