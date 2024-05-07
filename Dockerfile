FROM node:20.12.2-alpine3.18 as build-stage

WORKDIR /app

COPY package.json .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install

COPY . .

RUN npm run build

# production stage
# node:18.0-alpine3.14   
# node:20.12.2-alpine3.18
FROM node:20.12.2-alpine3.18 as production-stage

COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install --production

# RUN npm run migrate:prod

EXPOSE 3000

CMD ["node", "/app/main.js"]
