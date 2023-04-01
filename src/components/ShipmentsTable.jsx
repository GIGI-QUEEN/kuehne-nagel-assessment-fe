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
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [singleShipment, setSingleShipment] = useState(null)
  return (
    <Box>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader>
          <HeadOfTable />
          <BodyOfTable
            shipments={shipments}
            setShipments={setShipments}
            setSingleShipment={setSingleShipment}
            setOpenDeleteModal={setOpenDeleteModal}
          />
        </Table>
      </TableContainer>
      <DeleteModal
        open={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        singleShipment={singleShipment}
        shipments={shipments}
        setShipments={setShipments}
      />
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

const BodyOfTable = ({
  shipments,
  setShipments,
  setSingleShipment,
  setOpenDeleteModal,
}) => {
  return (
    <TableBody>
      {shipments?.map((shipment) => (
        <SingleTableRow
          key={shipment.orderNo}
          shipment={shipment}
          shipments={shipments}
          setShipments={setShipments}
          setSingleShipment={setSingleShipment}
          setOpenDeleteModal={setOpenDeleteModal}
        />
      ))}
    </TableBody>
  )
}

export default ShipmentsTable
