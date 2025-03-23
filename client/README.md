# RAG Skill Match Client

This is a Next.js project that implements a chat interface using RAG (Retrieval-Augmented Generation) technology to match skills and provide information.

## Technologies Used

- Next.js 14 (App Router)
- TypeScript
- @ai-sdk/react for chat functionality
- Radix UI for components
- Tailwind CSS for styling
- OpenAI for embeddings and chat
- Astra DB for vector storage

## Features

- Real-time chat interface
- Vector similarity search for relevant responses
- Beautiful UI with responsive design
- Streaming responses from AI

## Environment Setup

Create a `.env` file with the following variables:
```env
OPENAI_API_KEY=your_openai_key
ASTRA_DB_NAMESPACE=your_namespace
ASTRA_DB_COLLECTION=your_collection
ASTRA_DB_API_ENDPOINT=your_astra_endpoint
ASTRA_DB_APPLICATION_TOKEN=your_astra_token
```

## Getting Started

First, install dependencies:
```bash
npm install
# or
yarn install
```

Then, run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js app router pages and API routes
  - `/api/chat` - Chat API endpoint with vector search
  - `/page.tsx` - Main chat interface
- `/components` - Reusable UI components
- `/public` - Static assets

## API Routes

### `/api/chat`
Handles chat functionality with:
- Vector embedding generation
- Similarity search in Astra DB
- Response streaming
