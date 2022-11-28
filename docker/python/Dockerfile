#step1
FROM python

#step2
RUN apt -y update && apt -y upgrade && apt -y install git net-tools vim

#step3
WORKDIR '/root'

#step4
COPY ./.bashrc .
COPY ./.exrc .

