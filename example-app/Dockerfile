FROM node:latest as server

WORKDIR /usr/app/server/
COPY ./package*.json ./
RUN yarn
COPY ./ ./

EXPOSE 5000

CMD [ "npm", "start" ]