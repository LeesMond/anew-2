#step1
FROM node:14.16.1

#step2
RUN apt -y update && apt -y upgrade && apt -y install git net-tools vim

#step3
WORKDIR '/root'

#step4
COPY ./.bashrc .
COPY ./.exrc .

