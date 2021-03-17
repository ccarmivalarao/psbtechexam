import React from 'react'
import {Container, Row, Form, Button, Col} from 'react-bootstrap';

const CartForm = ({onSearch, searched, onChangeSearch, productData, onAddCart, quantityValue, onChangeQty}) => {
  return (
    <Container className='py-4'>
      <Form>
        <div className={'mb-4'}>
          <Form.Group controlId="formSearch">
            <Form.Label><strong>Search Product ID:</strong></Form.Label>
            <Form.Control type="number" placeholder="Search something..." onChange={e => onChangeSearch(e)} value={searched} />
          </Form.Group>
          <Button variant="primary" className='btn-block' onClick={() => onSearch()}>
            Search
          </Button>
        </div>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="productID">
              <Form.Label>Product ID:</Form.Label>
              <Form.Control readOnly type="text" value={productData ? productData.id : ''} />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="productCost">
              <Form.Label>Product Cost:</Form.Label>
              <Form.Control readOnly type="text" value={productData ? productData.cost : ''} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="productName">
              <Form.Label>Product Name:</Form.Label>
              <Form.Control readOnly type="text" value={productData ? productData.name : ''} />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="productQuantity">
              <Form.Label>Product Quantity:</Form.Label>
              <Form.Control type="number" value={quantityValue} onChange={e => onChangeQty(e)} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Button 
              type='submit' 
              className='btn-block' 
              onClick={(e) => onAddCart(e)}
              disabled={!productData}
            >
              Add to cart
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default CartForm
