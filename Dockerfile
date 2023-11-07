# Use an official Node.js runtime as the base image
FROM node:16-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of your application's source code to the container
COPY . .

EXPOSE 3000

# Development target: Run the development server
FROM build as dev
CMD ["npm", "start"]

# Production target: Build the React application and serve it using npx serve
FROM build as prod
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
