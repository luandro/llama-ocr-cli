#!/usr/bin/env node
import { Command } from 'commander';
import { ocr } from 'llama-ocr';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

const program = new Command();

program
  .name('llama-ocr')
  .description('CLI tool for OCR using llama-ocr')
  .version('1.0.0');

program
  .argument('<file>', 'Image file to process')
  .option('-k, --api-key <key>', 'Together AI API key (overrides environment variable)')
  .option('-o, --output <file>', 'Output file for the extracted text (defaults to stdout)')
  .action(async (file: string, options) => {
    try {
      // Verify file exists
      if (!fs.existsSync(file)) {
        console.error(`Error: File '${file}' does not exist`);
        process.exit(1);
      }

      // Get API key from options or environment
      const apiKey = options.apiKey || process.env.TOGETHER_API_KEY;
      if (!apiKey) {
        console.error('Error: Together AI API key is required. Provide it via TOGETHER_API_KEY environment variable or --api-key option');
        process.exit(1);
      }

      // Convert relative path to absolute
      const filePath = path.resolve(file);

      // Perform OCR
      const markdown = await ocr({
        filePath,
        apiKey,
      });

      // Handle output
      if (options.output) {
        fs.writeFileSync(options.output, markdown);
        console.log(`Results written to ${options.output}`);
      } else {
        console.log(markdown);
      }
    } catch (error) {
      console.error('Error processing file:', error);
      process.exit(1);
    }
  });

program.parse();
