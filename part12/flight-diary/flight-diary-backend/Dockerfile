FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run tsc && chown -R node:node /usr/src/app

USER node

CMD npm start
