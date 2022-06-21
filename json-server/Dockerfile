FROM node:latest
ENV HOST=0.0.0.0

RUN yarn add json-server \
    && yarn global add nodemon

WORKDIR /app
VOLUME /app
EXPOSE 80
