import React,{ memo, useEffect, useRef} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Media from 'react-bootstrap/Media'
import { useSelector, useDispatch } from 'react-redux'

const LoginComponent = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const idInput = useRef(null)
  const pwInput = useRef(null)

  const requestLogin = (e) => {
    e.preventDefault()
    if(idInput.current.value === '' || pwInput.current.value === ''){
      alert('정확한 정보를 입력해 주세요')
      return
    }
    dispatch({
      type:'LOG_IN_REQUEST',
      data: {
        id:idInput.current.value,
        pass: pwInput.current.value
      }
    })
  }

  const requestLogOut = () => {
    dispatch({type: 'LOG_OUT'})
  }


  // useEffect(() => {
  //   console.log(user)
  // },[])
  
  

  return (
    <>
    {!user.isLoggedIn?
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control ref={idInput} type="id" placeholder="ID" required/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={pwInput} type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Row noGutters="true">
        <Col xs={6} >
          <Button variant="primary" type="submit" onClick={requestLogin}>
            sign in
          </Button>
        </Col>
        <Col xs={6}>
          <Button variant="primary" type="submit">
            sign up
          </Button>
        </Col>
      </Row>
    </Form>
    :
    <>
    <Media>
      <img
        width={60}
        height={60}
        className="mr-3"
        src="/images/test.jpg"
        alt="Generic placeholder"
      />
      <Media.Body>
        <p>
          {user.userInfo&&user.userInfo.nick}반갑습니다.
        </p>
      </Media.Body>
    </Media>
    <Button variant="primary" type="submit" onClick={requestLogOut}>
       LOG OUT
    </Button>
    </>
    }
    </>
  )
}
 

export default memo(LoginComponent)