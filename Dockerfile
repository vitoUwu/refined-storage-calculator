# Use Bun runtime image
FROM oven/bun:1-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Expose port 4173 (default Vite preview port)
EXPOSE 4173

# Start the preview server
CMD ["bun", "run", "preview", "--host", "0.0.0.0"] 