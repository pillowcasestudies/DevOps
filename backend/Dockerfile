# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /ci-cd-demo

# Copy backend package files and install dependencies
COPY backend/package*.json ./backend/
WORKDIR /ci-cd-demo/backend
RUN npm install

# Copy the entire backend app (including server.js, public/, etc.)
COPY backend /ci-cd-demo/backend/

# Build the frontend React app
WORKDIR /ci-cd-demo/frontend
COPY frontend/package*.json ./
RUN npm install
RUN npm run build && npm run export

# Copy built frontend into public folder
RUN cp -r out/* /ci-cd-demo/public/

# Go back to root app dir to run the server
WORKDIR /ci-cd-demo/backend

# Expose backend ports
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]