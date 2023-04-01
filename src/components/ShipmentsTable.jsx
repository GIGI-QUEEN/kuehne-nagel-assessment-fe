import React, { useState } from "react"
import { useShipments } from "../hooks/useShipments"
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses,
  TableBody,
  styled,
  CircularProgress,
  Modal,
} from "@mui/material"
import { SingleTableRow } from "./SingleTableRow"
import { Box } from "@mui/system"
import { DeleteModal } from "./DeleteModal"
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#292929",
    color: theme.palette.common.white,
    fontWeight: 600,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}))

const ShipmentsTable = () => {
  const { shipments, setShipments } = useShipments()
  const [singleShipment, setSingleShipment] = useState(null)
  //console.log(shipments)
  console.log(singleShipment)
  return (
    <Box>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader>
          <HeadOfTable />
          <BodyOfTable
            shipments={shipments}
            setShipments={setShipments}
            setSingleShipment={setSingleShipment}
          />
        </Table>
      </TableContainer>
    </Box>
  )
}

const HeadOfTable = () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>orderno</StyledTableCell>
        <StyledTableCell>delivery date</StyledTableCell>
        <StyledTableCell>customer</StyledTableCell>
        <StyledTableCell>trackingno</StyledTableCell>
        <StyledTableCell>status</StyledTableCell>
        <StyledTableCell>consignee</StyledTableCell>
        <StyledTableCell></StyledTableCell>
      </TableRow>
    </TableHead>
  )
}

const BodyOfTable = ({ shipments, setShipments, setSingleShipment }) => {
  return (
    <TableBody>
      {shipments?.map((shipment) => (
        <SingleTableRow
          key={shipment.orderNo}
          shipment={shipment}
          shipments={shipments}
          setShipments={setShipments}
          setSingleShipment={setSingleShipment}
        />
      ))}
    </TableBody>
  )
}

export default ShipmentsTable
