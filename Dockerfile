FROM node:22-slim

WORKDIR /

COPY build/ /
COPY package.json /

RUN npm install --omit=dev

EXPOSE 8008

CMD ["node", "index.js"]