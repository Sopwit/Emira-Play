import { spawnSync } from 'node:child_process';

const packageMap = {
  darwin: {
    arm64: [
      '@rollup/rollup-darwin-arm64@4.60.2',
      '@esbuild/darwin-arm64@0.27.7',
      'lightningcss-darwin-arm64@1.31.1',
      '@tailwindcss/oxide-darwin-arm64@4.2.1',
    ],
    x64: [
      '@rollup/rollup-darwin-x64@4.60.2',
      '@esbuild/darwin-x64@0.27.7',
      'lightningcss-darwin-x64@1.31.1',
      '@tailwindcss/oxide-darwin-x64@4.2.1',
    ],
  },
  linux: {
    x64: [
      '@rollup/rollup-linux-x64-gnu@4.60.2',
      '@esbuild/linux-x64@0.27.7',
      'lightningcss-linux-x64-gnu@1.31.1',
      '@tailwindcss/oxide-linux-x64-gnu@4.2.1',
    ],
  },
};

const packages = packageMap[process.platform]?.[process.arch] ?? [];

if (!packages.length) {
  console.warn(`No explicit native dependency installer configured for ${process.platform}/${process.arch}.`);
  process.exit(0);
}

const result = spawnSync('npm', ['install', ...packages, '--no-save', '--ignore-scripts'], {
  cwd: process.cwd(),
  stdio: 'inherit',
});

if (typeof result.status === 'number' && result.status !== 0) {
  process.exit(result.status);
}
