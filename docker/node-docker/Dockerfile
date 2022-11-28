# step1
FROM node:16

#step2
WORKDIR /usr/src/app

#step3
COPY package*.json ./
RUN npm install

#step4
COPY server.js ./

#step5
EXPOSE 8000

#step6
CMD ["node","server.js"]
