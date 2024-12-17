## 写経
[prisma と express でつくる REST API](https://zenn.dev/yamo/articles/prisma-express-rest-api)

<br/>
<br/>

## 成果物
- フロントはなし

<br/>
<br/>

## 技術スタック
- prisma: ^6.0.1
- express: ^4.21.2
- jest: ^29.7.0
- eslint: ^9.17.0
- nodemon: ^3.1.9
- npm-run-all: ^4.1.5
- prettier: ^3.4.2
- supertest: ^7.0.0
- ts-node: ^10.9.2
- typescript: ^5.7.2
- Docker

<br/>
<br/>

## 実行したコマンド（順不同）
- npm init -y
- npm i express @types/express
- npm i typescript ts-node nodemon @types/node
- npm i eslint prettier eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
- npm i npm-run-all
- npx tsc --init
- npx prisma init
- docker-compose up -d
- npx prisma migrate dev --name init
- npx prisma studio
- npm run prisma:seed
- npm i jest ts-jest supertest @types/jest @types/supertest

<br/>
<br/>

## 学べる点
- Node.js/Expressのテスト（jest）
- prismaの環境構築とCRUD操作
- Node.js/ExpressのAPI実装
- Docker-compose

<br/>
<br/>

## 使用した外部サービス
- なし

<br/>
<br/>

## 他
- かなり良記事。
