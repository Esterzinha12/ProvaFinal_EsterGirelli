FROM node
WORKDIR /
ARG PORT=3000
ENV PORT=$PORT 
EXPOSE $PORT 
COPY ./ .
RUN npm install
ENTRYPOINT npm start