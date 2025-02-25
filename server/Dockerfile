FROM node:18-alpine

# set working directory
WORKDIR /index

# copy .json file
COPY  package*.json ./ 
RUN npm install

#copy rest of the code 
COPY  . .

EXPOSE 9000 

CMD [ "npn" , "run" , "dev" ]