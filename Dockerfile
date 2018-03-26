FROM node:alpine-latest

RUN npm i -g yarn

COPY . /app
WORKDIR /app

RUN yarn

ENTRYPOINT [ "npm", "start" ]
