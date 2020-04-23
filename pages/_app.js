import '../public/styles/main.scss'
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeaderComponent from '../components/HeaderComponent'
import LoginComponent from '../components/LoginComponent'
import reducers from '../redux/reducers'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import saga from '../redux/sagas'

const AppLayout = ({ Component, store }) => {
  return (
    <Provider store={ store }>
      <Container fluid="true">
        <HeaderComponent/>
      </Container>
      <Container fluid="xl" style={{padding: "10px"}}>
        <Row >
          <Col xs={2} >
            <LoginComponent/>
          </Col>
          <Col xs={10} >
            <Component/>
          </Col>
        </Row>
      </Container>
    </Provider>
  )
}

export default withRedux((initailState, options)=>{
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  const store = createStore(reducers,initailState, enhancer)
  sagaMiddleware.run(saga)
  return store
})(AppLayout);