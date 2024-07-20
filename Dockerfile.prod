FROM node:lts-iron
 
WORKDIR /singh_gurusewak_ui_garden/
 
COPY public/ /singh_gurusewak_ui_garden/public
COPY src/ /singh_gurusewak_ui_garden/src
COPY package.json /singh_gurusewak_ui_garden/
COPY . /singh_gurusewak_ui_garden
 
RUN npm install
 
CMD ["npm", "run", "storybook"]