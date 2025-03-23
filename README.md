# RAG Skill Match

A Retrieval-Augmented Generation (RAG) system that provides an AI chat interface for skill matching and information retrieval. The system uses vector similarity search to find relevant information from a pre-processed knowledge base.

## Project Structure

The project is divided into two main components:

### 📁 Client (`/client`)

A Next.js application that provides the chat interface and API endpoints.

- **Key Features**:
  - Real-time chat interface
  - Vector similarity search
  - Streaming AI responses
  - Modern UI with Radix and Tailwind

- **Tech Stack**:
  - Next.js 14 (App Router)
  - TypeScript
  - @ai-sdk/react
  - OpenAI
  - Astra DB

[More details in client README](./client/README.md)

### 🛠 Scripts (`/scripts`)

Backend scripts for data processing and vector database population.

- **Key Features**:
  - Web scraping with Puppeteer
  - Text processing and splitting
  - Vector embedding generation
  - Astra DB vector storage

- **Tech Stack**:
  - TypeScript
  - Puppeteer
  - OpenAI Embeddings
  - Astra DB

[More details in scripts README](./scripts/README.md)

## Quick Start

1. Set up environment variables:
```env
OPENAI_API_KEY=your_openai_key
ASTRA_DB_NAMESPACE=your_namespace
ASTRA_DB_COLLECTION=your_collection
ASTRA_DB_API_ENDPOINT=your_astra_endpoint
ASTRA_DB_APPLICATION_TOKEN=your_astra_token
```

2. Populate the vector database:
```bash
cd scripts
npm install
npm run dev
```

3. Start the client:
```bash
cd client
npm install
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Architecture

```
┌─────────────┐         ┌─────────────┐
│   Client    │         │   Scripts   │
│  (Next.js)  │         │ (Backend)   │
└─────┬───────┘         └──────┬──────┘
      │                        │
      ▼                        ▼
┌─────────────┐         ┌──────────────┐
│  OpenAI API │         │   Puppeteer  │
│  (Chat/Emb) │         │  (Scraping)  │
└─────┬───────┘         └──────┬───────┘
      │                        │
      │         ┌──────────────┘
      │         │
      ▼         ▼
┌────────────────────┐
│     Astra DB      │
│  (Vector Store)   │
└────────────────────┘
```

## License

MIT
