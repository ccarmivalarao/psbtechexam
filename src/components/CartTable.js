import React from 'react'
import {Table, Container, Button} from 'react-bootstrap';

const CartTable = ({cart, onRemoveFromCart}) => {
  return (
    <Container className='py-4 mb-3'>
      <h1>Ordered List</h1>
      {
        cart.length > 0 ?
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Cost</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map(item => (
                  <tr key={item.id}>
                    <td className='table__name'>{item.name}</td>
                    <td>{item.cost}</td>
                    <td>{item.quantity}</td>
                    <td className='table__amount'>{item.amount}</td>
                    <td><Button onClick={() => onRemoveFromCart(item)}>Remove</Button></td>
                  </tr>
                ))
              }
            </tbody>
          </Table> :
          <h1>There are no products in your cart</h1>
      }
    </Container>
  )
}

export default CartTable
