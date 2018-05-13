FROM mhart/alpine-node:9
RUN mkdir www/
WORKDIR www/
ADD . .
RUN npm i npm@5.6 -g
RUN npm install
CMD npm run start
