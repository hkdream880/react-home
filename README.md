This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


#Next 기본구조
pages/ // HTML Document, Application Container, 각종 페이지 등을 작성한다.
    _document.js // HTML Document.
    _app.js // Application Container. 공통의 레이아웃을 작성한다.
    _error.js // Error Page.
    index.js // Root Page /로 시작되는 경로를 말한다.
    hello.js // Hello Page /hello로 시작되는 경로를 말한다.
static/ // 정적 파일 (이미지, 파일 등)을 업로드 한다.
next.config.js // Next.js의 환경 설정 파일이다. 라우팅 설정, typescript, less 등의 webpack 플러그인을 설정한다.