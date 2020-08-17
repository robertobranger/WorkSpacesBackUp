FROM node:12.13.0
WORKDIR /areUin
COPY . /areUin
RUN apt-get update
RUN apt-get install apt-utils build-essential -y
RUN npm install -g typescript typeorm ts-node
RUN npm install --save
RUN npm audit fix
EXPOSE 10020

CMD ["/bin/bash","devops/init.sh"]