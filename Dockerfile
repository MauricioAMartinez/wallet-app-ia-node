FROM node:16-bullseye

WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el código del proyecto
COPY . .

# Expone el puerto que la aplicación utilizará
EXPOSE 3001

# Comando para iniciar la aplicación
CMD ["npm", "start"]
