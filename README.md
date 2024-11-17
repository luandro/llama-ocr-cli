# llama-ocr-cli

A command-line interface for performing OCR on images using llama-ocr.

## Installation

```bash
npm install -g llama-ocr-cli
```

## Prerequisites

You need a Together AI API key to use this tool. You can either:
- Set it as an environment variable: `TOGETHER_API_KEY=your-key-here`
- Pass it as a command line argument: `--api-key your-key-here`

## Usage

Basic usage:
```bash
llama-ocr image.jpg
```

With explicit API key:
```bash
llama-ocr image.jpg --api-key your-key-here
```

Save output to file:
```bash
llama-ocr image.jpg -o output.md
```

### Options

- `-k, --api-key <key>`: Together AI API key (overrides environment variable)
- `-o, --output <file>`: Output file for the extracted text (defaults to stdout)
- `-V, --version`: Output the version number
- `-h, --help`: Display help information

## Development

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Run in development mode:
```bash
npm run dev
```

## Publishing

This package is automatically published to npm when a new GitHub release is created. The GitHub Action workflow will:
1. Build the package
2. Publish to npm registry

To publish a new version:
1. Update version in package.json
2. Create a new release on GitHub
3. The GitHub Action will automatically publish to npm

## License

MIT
