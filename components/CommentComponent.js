import React, { memo } from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'

const CommentComponent = ({commentObj}) => {
  const user = useSelector(state => state.user)
  console.log('in comment compoentn')
  console.log(user)
  
  return (
    <Card style={{marginBottom: '10px'}}>
      <Card.Body style={{borderBottom: "1px solid rgba(0, 0, 0, 0.125)"}}>
        <Card.Text>
          {commentObj.comment}
        </Card.Text>
        <Row className="justify-content-md-end" noGutters={true}>
          <Col xs={1.5}>
            <Card.Link href="#">{commentObj.userInfo.nick}</Card.Link>
            {
              user.isLoggedIn&&commentObj.userInfo.id === user.userInfo.id&&(
                <>
                <Card.Link href="#">삭제</Card.Link>
                <Card.Link href="#">수정</Card.Link>
                </>
              )
            }
          </Col>
        </Row>
      </Card.Body>
      {commentObj.reply.map((reply, i)=>{
        return <ListGroup key={'reply'+i} className="list-group-flush">
        <ListGroup.Item>
          <Row noGutters={true}>
            <Col>{reply.comment}</Col>
            <Col xs={1.5}>
              <Card.Link href="#">{reply.userInfo.nick}</Card.Link>
              {
                user.isLoggedIn&&reply.userInfo.id === user.userInfo.id&&(
                  <>
                  <Card.Link href="#">삭제</Card.Link>
                  <Card.Link href="#">수정</Card.Link>
                  </>
                )
              }
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
      })}
      <Card.Body>
        <Form> 
          <Row noGutters={true}>
            <Col >
              <Form.Control type="email" placeholder="add comment" />
            </Col>
            <Col xs={1}>
              <Button variant="primary">Reply!!</Button>{' '} 
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default memo(CommentComponent)