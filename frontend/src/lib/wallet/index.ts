import type { WalletAdapter, WalletConnection, WalletInspectionState } from './types';

export type { WalletAdapter, WalletConnection, WalletInspectionState, WalletProvider } from './types';

async function loadFreighterAdapter(): Promise<WalletAdapter> {
  const { freighterAdapter } = await import('./freighterAdapter');
  return freighterAdapter;
}

async function loadWalletConnectAdapter(): Promise<WalletAdapter> {
  const { walletConnectAdapter } = await import('./walletConnectAdapter');
  return walletConnectAdapter;
}

export async function resolvePrimaryWalletAdapter(): Promise<WalletAdapter> {
  const freighter = await loadFreighterAdapter();
  const freighterStatus = await freighter.inspect().catch(() => null);
  if (freighterStatus && freighterStatus.state !== 'missing') {
    return freighter;
  }

  const walletConnect = await loadWalletConnectAdapter();
  const walletConnectStatus = await walletConnect.inspect().catch(() => null);
  if (walletConnectStatus && walletConnectStatus.state !== 'missing') {
    return walletConnect;
  }

  return freighter;
}

export async function inspectPrimaryWallet(): Promise<WalletInspectionState> {
  const adapter = await resolvePrimaryWalletAdapter();
  return adapter.inspect();
}

export async function connectPrimaryWallet(): Promise<WalletConnection> {
  const adapter = await resolvePrimaryWalletAdapter();
  return adapter.connect();
}

export async function inspectFreighter() {
  const { inspectFreighter } = await import('./freighterAdapter');
  return inspectFreighter();
}

export async function connectFreighter() {
  const { connectFreighter } = await import('./freighterAdapter');
  return connectFreighter();
}

export async function inspectWalletConnect() {
  const { inspectWalletConnect } = await import('./walletConnectAdapter');
  return inspectWalletConnect();
}

export async function connectWalletConnect() {
  const { connectWalletConnect } = await import('./walletConnectAdapter');
  return connectWalletConnect();
}
