import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useGetOrders } from "../../hooks/order";
import styles from "./Orders.module.css";
import roomTypes from "../../constants/roomTypes";

const Orders = () => {

  const [orders, setOrders] = useState([]);
  const getOrders = useGetOrders();

  useEffect(() => {
    setOrders(getOrders.data || []);
  } , [getOrders.data]);

  if(getOrders.isLoading || getOrders.isFetching) {
    return <CircularProgress />
  }

  const columns = [
    { field: "hotel", headerName: "Hotel name", minWidth: 200, renderCell: (params) => params.row.hotel.name },
    { field: "roomType", headerName: "Room type", minWidth: 150, renderCell: (params) => roomTypes[params.row.roomType] },
    { field: "breakfast", headerName: "Breakfast", minWidth: 200, renderCell: (params) => params.row.breakfast ? "Bought" : "Not bought"},
    { field: "orderDate", headerName: "OrderDate", minWidth: 200, renderCell: (params) => params.row.orderDate.split("T")[0] },
    { field: "peopleCount", headerName: "Number of people", minWidth: 200 },
    { field: "period", headerName: "Reservation in days", minWidth: 200 },
    { field: "price", headerName: "Price", minWidth: 200 },
  ];

  return (
    <Box className={styles.OrdersContainer}>
      <Box className={styles.TitleContainer}>
        <Typography variant="h3">
          My bookings
        </Typography>
      </Box>
      <Box >
        <Grid container spacing={2}>
          {orders.length > 0 ? (
            <DataGrid
              autoHeight
              autoWidth
              border={"none"}
              rows={orders}
              columns={columns}
              disableColumnMenu={true}
              disableColumnFilter={true}
              disableColumnSorting={true}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[10]}
              columnVisibilityModel={{
                id: false,
              }}
              />
            ) : (
            <Grid item xs={12}>
              <Typography variant="h5" style={{display: "flex", justifyContent: "center"}}>No orders found</Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
}

export default Orders;