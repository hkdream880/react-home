import React from 'react'

const Somthing = () => {
  return (
    <div>Somthing page</div>
  )
}

Somthing.getInitialProps = async (context) => {
  console.log('getInitialProps value from server : ',context.query.value)
  //ssr 구현시 context 에 있는 store (redux store 이다.) 를 이용하여 비동기 처리도 가능하다.
  //호출시 서버에서 먼저 한번 호출되므로, 최초 화면에서 필요한 데이터를 가져와 보여주도록 한다.

}

export default Somthing