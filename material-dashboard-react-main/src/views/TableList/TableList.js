import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Table } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  // const item = {routeName, spaces, origin, destination, cost};

  // let routes = [];
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/routeCarpool", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRoutes(data.data);
        // routes = data.data;
        console.log(routes);
      });
  }, []);

  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Routes List</h4>
            <p className={classes.cardCategoryWhite}>
              Here you got available routes
            </p>
          </CardHeader>
          <CardBody>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Route Name</TableCell>
                  <TableCell align="right">Schedule</TableCell>
                  <TableCell align="right">Spaces</TableCell>
                  <TableCell align="right">Route Origin</TableCell>
                  <TableCell align="right">Route Destination</TableCell>
                  <TableCell align="right">Carpooler</TableCell>
                  <TableCell align="right">Cost</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {routes.map((route) => (
                  <TableRow key={route.id}>
                    <TableCell component="th" scope="row">
                      {route.routeName}
                    </TableCell>
                    <TableCell align="right">{route.schedule}</TableCell>
                    <TableCell align="right">{route.spaces}</TableCell>
                    <TableCell align="right">{route.routeOrigin}</TableCell>
                    <TableCell align="right">
                      {route.routeDestination}
                    </TableCell>
                    <TableCell align="right">{route.carpooler}</TableCell>
                    <TableCell align="right">{route.cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}></GridItem>
    </GridContainer>
  );
}
