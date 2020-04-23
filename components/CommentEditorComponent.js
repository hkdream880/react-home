import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const CommentEditorComponent = () => {
  
  return (
    <Form style={{marginBottom: "10px"}}>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Row className="justify-content-md-end" noGutters={true}>
         <Col xs={1}>
         <Button variant="primary" type="submit">
          Write!!
        </Button>
         </Col>
      </Row>
    </Form>
  )
}

export default CommentEditorComponent