import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

function StockRow({ stock }) {
  return (
    <TableRow style={{ backgroundColor: stock.change >= 0 ? '#9de4af' : '#fdaab0' }}>
      <TableCell component="th" scope="row">
        {stock.longName} ({stock.scripName})
      </TableCell>
      <TableCell align="right">{stock.price}</TableCell>
      <TableCell align="right">{stock.change}</TableCell>
      <TableCell align="right">{stock.percentChange}</TableCell>
      <TableCell align="right">{stock.volume}</TableCell>
      <TableCell align="right">{stock.lastTradingTime}</TableCell>
    </TableRow>
  );
}

export default StockRow;
