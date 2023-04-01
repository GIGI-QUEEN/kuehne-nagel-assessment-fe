import React from "react"
import { TableRow, TableCell, tableCellClasses, styled } from "@mui/material"
import { Buttons } from "./Buttons"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

export const SingleTableRow = ({
  shipment,
  shipments,
  setShipments,
  setSingleShipment,
  setOpenDeleteModal,
}) => {
  return (
    <>
      <StyledTableRow key={shipment.orderNo}>
        <StyledTableCell>{shipment.orderNo}</StyledTableCell>
        <StyledTableCell>{shipment.date}</StyledTableCell>
        <StyledTableCell>{shipment.customer}</StyledTableCell>
        <StyledTableCell>{shipment.trackingNo}</StyledTableCell>
        <StyledTableCell>{shipment.status}</StyledTableCell>
        <StyledTableCell>{shipment.consignee}</StyledTableCell>
        <StyledTableCell>
          <Buttons
            shipment={shipment}
            shipments={shipments}
            setShipments={setShipments}
            setSingleShipment={setSingleShipment}
            setOpenDeleteModal={setOpenDeleteModal}
          />
        </StyledTableCell>
      </StyledTableRow>
    </>
  )
}
