import React from 'react'
import {Container, Row, Form, Col, Button} from 'react-bootstrap';

const CartPayment = ({total, onChangeCash, change, cash}) => {
  const onBlurCash = e => {
    if (change < 0) {
      alert('Sorry you entered an insufficient cash!')
    }
  }

  const onSave = () => {
    if (change < 0) {
      alert('Transaction cannot be saved! Need more cash!')
    } else {
      alert('Transaction Saved!')
    }
  }

  return (
    <Container>
      <Form>
        <Row>
          <Col xs={{span: 12}} md={{span: 6, offset: 6}}>
            <Form.Group controlId="totalAmt">
              <Form.Label>Total Amount:</Form.Label>
              <Form.Control type="text" value={total} readOnly/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={{span: 12}} md={{span: 6, offset: 6}}>
            <Form.Group controlId="cash">
              <Form.Label>Cash:</Form.Label>
              <Form.Control type="number" onChange={e => onChangeCash(e)} value={cash} onBlur={e => onBlurCash(e)}/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={{span: 12}} md={{span: 6, offset: 6}}>
            <Form.Group controlId="change">
              <Form.Label>Change:</Form.Label>
              <Form.Control type="text" value={change} readOnly/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={{span: 12}} md={{span: 6, offset: 6}}>
            <Button onClick={() => onSave()}>Save Transaction</Button>
          </Col>
        </Row>        
      </Form>
    </Container>
  )
}

export default CartPayment
