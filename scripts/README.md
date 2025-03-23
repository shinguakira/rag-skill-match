# RAG Skill Match Scripts

This folder contains scripts for data scraping and vector database population for the RAG Skill Match application.

## Main Script (`main.ts`)

The main script handles web scraping and vector database population using the following technologies:
- Puppeteer for web scraping
- OpenAI for text embeddings
- Astra DB for vector storage

### Features

- Web scraping using Puppeteer
- Text splitting and processing
- Vector embedding generation using OpenAI
- Vector storage in Astra DB

### Setup

1. Create a `.env` file with the following variables:
```env
OPENAI_API_KEY=your_openai_key
ASTRA_DB_NAMESPACE=your_namespace
ASTRA_DB_COLLECTION=your_collection
ASTRA_DB_API_ENDPOINT=your_astra_endpoint
ASTRA_DB_APPLICATION_TOKEN=your_astra_token
```

### Usage

Run the script using:
```bash
npm install   # Install dependencies
npm run dev   # Run the script
```

The script will:
1. Scrape the configured websites
2. Process and split the text
3. Generate embeddings
4. Store the vectors in Astra DB
