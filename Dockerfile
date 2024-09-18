# Usa una imagen base de Node.js (versión 20-alpine)
FROM node:20-alpine

# Instala dependencias necesarias
RUN apk add --no-cache bash git

# Instala Expo CLI globalmente
RUN npm install -g expo-cli

# Establece el directorio de trabajo
WORKDIR /app

# Expone el puerto 19000 para el servidor de desarrollo de Expo
EXPOSE 19000

# Comando para mantener el contenedor en ejecución
CMD ["tail", "-f", "/dev/null"]