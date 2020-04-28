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
import withReduxSaga from 'next-redux-saga'

const AppLayout = ({ Component, store, pageProps }) => {
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
            <Component {...pageProps}/>
          </Col>
        </Row>
      </Container>
    </Provider>
  )
}

//ssr의 핵심 라이프 사이클
AppLayout.getInitialProps = async (context) => {
  const { ctx, Component } = context;
  let pageProps = {};
  //개인 정보 호출 구현,ssr 구현시 세션기반 인증일경우 쿠키를 직접 넣어줘야 한다.
  //쿠키는 ctx.req.headers.cookie
  //ssr 환경 확인은 ctx.isServer 로 확인
  //따라서 서버인지 클라이언트인지에 따른 분기 처리에 주의할것
  if(Component.getInitialProps){
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps }
}

export default withRedux((initailState, options)=>{
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  const store = createStore(reducers,initailState, enhancer)
  store.sagaTask = sagaMiddleware.run(saga) //ssr을 위한 처리 (getInitailProps 에서 비동기 호출 가능하도록)
  //sagaMiddleware.run(saga)
  return store
})(withReduxSaga(AppLayout));