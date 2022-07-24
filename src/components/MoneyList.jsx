import React from 'react';
import { Table } from 'react-bootstrap'
import Record from './Record'
import Loader from './Loader'

function MoneyList({records,loading}) {
  return (
    <>
    {loading && <Loader />}
    <Table striped bordered hover>
         <thead>
            <tr>
              <th>Type</th>
              <th>Title</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {records.map(record => <Record key={record.id} record={record} />)}
          </tbody>
        </Table>
    </>
  )
}

export default MoneyList