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
import DetailsPanel from "./DetailsPanel"
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
  const [openDetails, setOpenDetails] = useState(false)
  //console.log(singleShipment)
  //console.log(singleShipment)
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
            setOpenDetails={setOpenDetails}
          />
        </Table>
      </TableContainer>
      <DetailsPanel
        open={openDetails}
        setOpenDetails={setOpenDetails}
        singleShipment={singleShipment}
        setSingleShipment={setSingleShipment}
        shipments={shipments}
        setShipments={setShipments}
      />
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
  setOpenDetails,
}) => {
  return (
    <TableBody>
      {shipments?.map((shipment, index) => (
        <SingleTableRow
          key={index}
          shipment={shipment}
          shipments={shipments}
          setShipments={setShipments}
          setSingleShipment={setSingleShipment}
          setOpenDeleteModal={setOpenDeleteModal}
          setOpenDetails={setOpenDetails}
        />
      ))}
    </TableBody>
  )
}

export default ShipmentsTable
