const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv')

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({dev});
const handle = app.getRequestHandler();

dotenv.config();

app.prepare().then(()=>{
  const server = express();

  server.use(morgan('dev'));
  server.use(express.json());
  server.use(express.urlencoded({extended: true}))
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: '',
    cookie: {
      httpOnly: true,
      secure: false
    }
  }))

  //next에서 지원되지 않는 path variable 을 통한 동적 라우팅 처리
  //페이지에서 getInitailProps 를 구현해야한다. 링크는 아래와 같이 구현
  //<Link href= {{pathname: '/something', value: {id: value}}} as={`/somthins/${value}`}></Link>
  //query string 으로 넘길경우 as는 생략
  server.get('/somthing/:value',(req, res) => {
    return app.render(req, res, '/somthing', { value: req.params.value})
  })

  server.get('*',(req, res) => {
    return handle(req, res)
  })

  server.listen(3003, ()=> {
    console.log('next and express is running on port 3003')
  })
})
