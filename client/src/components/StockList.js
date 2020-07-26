import React, { useState, useEffect } from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  LinearProgress,
} from '@material-ui/core';

import { subscribeToStocks, unsubscribeToStocks } from '../services/StockService';
import StockRow from './StockRow';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHead: {
    fontWeight: 'bold',
  },
});

function StockList() {
  const classes = useStyles();

  const [stocks, setStocks] = useState([]);
  const [socketId, setSocketId] = useState(null);
  const [stocksFetched, setStocksFetched] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem('email') || '';
    subscribeToStocks(userEmail, ({ stocks, socketId }) => {
      setStocks(stocks);
      setSocketId(socketId);
      setStocksFetched(true);
    });

    return () => unsubscribeToStocks();
  }, []);

  return stocks && stocks.length > 0 ? (
    <>
      <h4>Session ID: {socketId || ''}</h4>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>Company</TableCell>
              <TableCell className={classes.tableHead} align="right">
                Price
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
                Change
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
                Percent Change
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
                Volume
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
                Last Trading Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((stock, index) => (
              <StockRow key={index} stock={stock} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  ) : stocksFetched ? (
    <h4>No stocks found for this email</h4>
  ) : (
    <LinearProgress />
  );
}

export default StockList;
