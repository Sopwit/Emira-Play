import { execSync } from 'node:child_process';
import fs from 'node:fs';

const blockedPatterns = [
  /^\.vercel\//,
  /(^|\/)node_modules\//,
  /(^|\/)dist\//,
  /(^|\/)dist-ssr\//,
  /(^|\/)coverage\//,
  /^\.env$/,
  /^\.env\./,
  /^frontend\/\.env$/,
  /^frontend\/\.env\./,
  /^backend\/\.env$/,
  /^backend\/\.env\./,
  /\.pem$/,
  /\.key$/,
  /\.p12$/,
  /\.crt$/,
  /\.cer$/,
  /(^|\/)id_rsa$/,
  /(^|\/)id_ed25519$/,
];

const allowList = new Set(['.env.example', 'frontend/.env.example', 'backend/.env.example']);

function trackedFiles() {
  try {
    return execSync('git ls-files', { encoding: 'utf8' })
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

function matchesBlockedPattern(file) {
  if (allowList.has(file)) return false;
  return blockedPatterns.some((pattern) => pattern.test(file));
}

function readExample(path) {
  return fs.readFileSync(path, 'utf8');
}

const tracked = trackedFiles();
const blockedTracked = tracked.filter(matchesBlockedPattern);

const exampleWarnings = [];
for (const file of ['.env.example', 'frontend/.env.example', 'backend/.env.example']) {
  const content = readExample(file);
  if (!content.includes('Public repo safe example values only.')) {
    exampleWarnings.push(`${file} is missing the public-safe example warning header.`);
  }
}

if (blockedTracked.length || exampleWarnings.length) {
  if (blockedTracked.length) {
    console.error('Blocked sensitive files are tracked:');
    for (const file of blockedTracked) console.error(`- ${file}`);
  }
  if (exampleWarnings.length) {
    console.error('Example file warnings:');
    for (const warning of exampleWarnings) console.error(`- ${warning}`);
  }
  process.exit(1);
}

console.log('Public repo check passed.');
