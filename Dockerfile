FROM node:lts-buster

WORKDIR /opt

COPY . /opt/

RUN cd /opt/ && npm install

ENTRYPOINT ["node", "/opt/index.js"]
