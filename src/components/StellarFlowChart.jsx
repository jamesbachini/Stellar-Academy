import { useMemo } from 'react';
import { ReactFlow, Background, Controls, MarkerType } from '@xyflow/react';
import LinkNode from './nodes/LinkNode.jsx';
import './StellarFlowChart.css';

const trackThemes = {
  contract: {
    accent: '#4fd1c5',
    accentSoft: 'rgba(79, 209, 197, 0.25)',
    edge: '#2dd4bf',
  },
  frontend: {
    accent: '#f59e0b',
    accentSoft: 'rgba(245, 158, 11, 0.25)',
    edge: '#fbbf24',
  },
  entrepreneurs: {
    accent: '#60a5fa',
    accentSoft: 'rgba(96, 165, 250, 0.25)',
    edge: '#38bdf8',
  },
};

const trackNodes = {
  contract: [
    {
      id: 'contract-smart',
      data: {
        label: 'Stellar Smart Contracts',
        description: 'Core concepts and overview of Soroban smart contracts.',
        url: 'https://developers.stellar.org/docs/learn/fundamentals/contract-development',
        variant: 'root',
      },
      position: { x: 0, y: 0 },
    },
    {
      id: 'contract-started',
      data: {
        label: 'Getting Started',
        description: 'Step-by-step setup to deploy your first contract.',
        url: 'https://developers.stellar.org/docs/build/smart-contracts/getting-started',
      },
      position: { x: 260, y: -80 },
    },
    {
      id: 'contract-faucet',
      data: {
        label: 'Testnet Faucet',
        description: 'Fund a testnet account to experiment safely.',
        url: 'https://lab.stellar.org/account/fund',
      },
      position: { x: 520, y: -200 },
    },
    {
      id: 'contract-hello',
      data: {
        label: 'Hello World',
        description: 'Review a minimal Soroban contract example.',
        url: 'https://github.com/stellar/soroban-examples/blob/main/hello_world/src/lib.rs',
      },
      position: { x: 520, y: -120 },
    },
    {
      id: 'contract-open-ide',
      data: {
        label: 'Open In IDE',
        description: 'Launch the example directly in an online IDE.',
        url: 'https://soropg.com/?codeUrl=https%3A%2F%2Fgithub.com%2Fstellar%2Fsoroban-examples%2Fblob%2Fmain%2Fhello_world%2Fsrc%2Flib.rs',
      },
      position: { x: 700, y: -80 },
    },
    {
      id: 'contract-examples',
      data: {
        label: 'Examples',
        description: 'Browse additional Soroban reference contracts.',
        url: 'https://github.com/stellar/soroban-examples',
      },
      position: { x: 520, y: -40 },
    },
    {
      id: 'contract-quest',
      data: {
        label: 'Stellar Quest',
        description: 'Hands-on learning quests and challenges.',
        url: 'https://quest.stellar.org/',
      },
      position: { x: 520, y: 40 },
    },
    {
      id: 'contract-guides',
      data: {
        label: 'How To Guides',
        description: 'Practical how-tos for common contract tasks.',
        url: 'https://developers.stellar.org/docs/build/guides',
      },
      position: { x: 260, y: 80 },
    },
    {
      id: 'contract-auth',
      data: {
        label: 'Authorization',
        description: 'Learn contract authorization patterns.',
        url: 'https://developers.stellar.org/docs/build/guides/auth/contract-authorization',
      },
      position: { x: 700, y: 120 },
    },
    {
      id: 'contract-storage',
      data: {
        label: 'Storage',
        description: 'Choose the right storage for your data.',
        url: 'https://developers.stellar.org/docs/build/guides/storage/choosing-the-right-storage',
      },
      position: { x: 700, y: 200 },
    },
    {
      id: 'contract-ttl',
      data: {
        label: 'Time To Live',
        description: 'Extend contract data and code TTL.',
        url: 'https://developers.stellar.org/docs/build/guides/conventions/extending-wasm-ttl',
      },
      position: { x: 700, y: 280 },
    },
    {
      id: 'contract-migration',
      data: {
        label: 'Solidity Dev Migration',
        description: 'Guide for EVM devs moving to Stellar.',
        url: 'https://developers.stellar.org/docs/learn/migrate/evm',
      },
      position: { x: 260, y: 220 },
    },
    {
      id: 'contract-tools',
      data: {
        label: 'Dev Tools',
        description: 'Explore tooling for Soroban development.',
        url: 'https://developers.stellar.org/docs/tools',
      },
      position: { x: 260, y: 360 },
    },
    {
      id: 'contract-cli',
      data: {
        label: 'Stellar CLI',
        description: 'Use the CLI for build and deployment.',
        url: 'https://developers.stellar.org/docs/tools/cli',
      },
      position: { x: 520, y: 340 },
    },
    {
      id: 'contract-online-ide',
      data: {
        label: 'Online IDE',
        description: 'Code and deploy without local setup.',
        url: 'https://soropg.com',
      },
      position: { x: 520, y: 420 },
    },
    {
      id: 'contract-oz',
      data: {
        label: 'OpenZeppelin Libraries',
        description: 'Audit-ready contract libraries for Stellar.',
        url: 'https://developers.stellar.org/docs/tools/openzeppelin-contracts',
      },
      position: { x: 520, y: 500 },
    },
    {
      id: 'contract-oz-wizard',
      data: {
        label: 'OpenZeppelin Wizard',
        description: 'Generate starter contracts with a wizard.',
        url: 'https://wizard.openzeppelin.com/stellar',
      },
      position: { x: 700, y: 500 },
    },
    {
      id: 'contract-scaffold',
      data: {
        label: 'Scaffold Stellar',
        description: 'Scaffold a full Soroban project quickly.',
        url: 'https://developers.stellar.org/docs/tools/scaffold-stellar',
      },
      position: { x: 520, y: 580 },
    },
    {
      id: 'contract-llms',
      data: {
        label: 'llms.txt',
        description: 'LLM-friendly reference for Stellar docs.',
        url: 'https://developers.stellar.org/llms.txt',
      },
      position: { x: 520, y: 660 },
    },
  ],
  frontend: [
    {
      id: 'frontend-dapps',
      data: {
        label: 'Decentralized Applications',
        description: 'Overview of building Stellar dApps.',
        url: 'https://developers.stellar.org/docs/build/apps',
        variant: 'root',
      },
      position: { x: 0, y: 0 },
    },
    {
      id: 'frontend-guides',
      data: {
        label: 'Build dApps Guides',
        description: 'Guides focused on dApp UX and flows.',
        url: 'https://developers.stellar.org/docs/build/apps',
      },
      position: { x: 260, y: -80 },
    },
    {
      id: 'frontend-dapp-frontend',
      data: {
        label: 'dApp Frontend',
        description: 'Frontend patterns for Stellar web apps.',
        url: 'https://developers.stellar.org/docs/build/guides/dapps/frontend-guide',
      },
      position: { x: 520, y: -160 },
    },
    {
      id: 'frontend-hello',
      data: {
        label: 'Hello World',
        description: 'Simple dApp frontend walkthrough.',
        url: 'https://developers.stellar.org/docs/build/smart-contracts/getting-started/hello-world-frontend',
      },
      position: { x: 520, y: -80 },
    },
    {
      id: 'frontend-passkey',
      data: {
        label: 'Passkey Dapp',
        description: 'Build a passkey-enabled guestbook.',
        url: 'https://developers.stellar.org/docs/build/apps/guestbook/overview',
      },
      position: { x: 520, y: 0 },
    },
    {
      id: 'frontend-tools',
      data: {
        label: 'Dev Tools',
        description: 'SDKs and kits for frontend integration.',
        url: 'https://developers.stellar.org/docs/tools',
      },
      position: { x: 260, y: 80 },
    },
    {
      id: 'frontend-sdk',
      data: {
        label: 'Javascript SDK',
        description: 'Interact with Stellar via JS SDK.',
        url: 'https://stellar.github.io/js-stellar-sdk/',
      },
      position: { x: 700, y: 120 },
    },
    {
      id: 'frontend-wallet',
      data: {
        label: 'Stellar Wallet Kit',
        description: 'Integrate wallets into your UI.',
        url: 'https://github.com/Creit-Tech/Stellar-Wallets-Kit',
      },
      position: { x: 700, y: 200 },
    },
    {
      id: 'frontend-scaffold',
      data: {
        label: 'Scaffold Stellar',
        description: 'Spin up a dApp starter project.',
        url: 'https://developers.stellar.org/docs/tools/scaffold-stellar',
      },
      position: { x: 700, y: 280 },
    },
    {
      id: 'frontend-llms',
      data: {
        label: 'llms.txt',
        description: 'LLM-friendly reference for Stellar docs.',
        url: 'https://developers.stellar.org/llms.txt',
      },
      position: { x: 700, y: 360 },
    },
    {
      id: 'frontend-security',
      data: {
        label: 'Security',
        description: 'Best practices for securing web dApps.',
        url: 'https://developers.stellar.org/docs/build/security-docs/securing-web-based-projects',
      },
      position: { x: 260, y: 220 },
    },
  ],
  entrepreneurs: [
    {
      id: 'biz-intro',
      data: {
        label: 'Introducing Stellar',
        description: 'High-level overview of Stellar network.',
        url: 'https://stellar.org/learn/intro-to-stellar',
        variant: 'root',
      },
      position: { x: 0, y: 0 },
    },
    {
      id: 'biz-sdf',
      data: {
        label: 'Stellar Development Foundation',
        description: 'About SDF and its mission.',
        url: 'https://stellar.org/foundation',
      },
      position: { x: 260, y: -140 },
    },
    {
      id: 'biz-case',
      data: {
        label: 'Case Studies',
        description: 'Real-world Stellar deployments.',
        url: 'https://stellar.org/case-studies',
      },
      position: { x: 520, y: -220 },
    },
    {
      id: 'biz-events',
      data: {
        label: 'Events',
        description: 'Upcoming community events.',
        url: 'https://stellar.org/events',
      },
      position: { x: 520, y: -140 },
    },
    {
      id: 'biz-careers',
      data: {
        label: 'Careers',
        description: 'Work with the Stellar ecosystem.',
        url: 'https://stellar.org/foundation/careers',
      },
      position: { x: 520, y: -60 },
    },
    {
      id: 'biz-grants',
      data: {
        label: 'Grants & Funding',
        description: 'Funding opportunities for builders.',
        url: 'https://stellar.org/foundation/grants-and-funding',
      },
      position: { x: 260, y: 0 },
    },
    {
      id: 'biz-community-fund',
      data: {
        label: 'Stellar Community Fund',
        description: 'Apply for community grant rounds.',
        url: 'https://communityfund.stellar.org/',
      },
      position: { x: 520, y: -10 },
    },
    {
      id: 'biz-ecosystem',
      data: {
        label: 'Ecosystem',
        description: 'Explore companies and partners.',
        url: 'https://stellar.org/ecosystem',
      },
      position: { x: 520, y: 70 },
    },
    {
      id: 'biz-technology',
      data: {
        label: 'Technology',
        description: 'Understand the core technology stack.',
        url: 'https://developers.stellar.org/docs/learn/fundamental',
      },
      position: { x: 360, y: 140 },
    },
    {
      id: 'biz-stack',
      data: {
        label: 'Stellar Stack',
        description: 'Components of the Stellar stack.',
        url: 'https://developers.stellar.org/docs/learn/fundamentals/stellar-stack',
      },
      position: { x: 780, y: 120 },
    },
    {
      id: 'biz-lumens',
      data: {
        label: 'Lumens (XLM)',
        description: "Learn about the network's native asset.",
        url: 'https://developers.stellar.org/docs/learn/fundamentals/lumens',
      },
      position: { x: 780, y: 200 },
    },
    {
      id: 'biz-contracts',
      data: {
        label: 'Smart Contracts',
        description: 'Overview of contract capabilities.',
        url: 'https://developers.stellar.org/docs/learn/fundamentals/contract-development',
      },
      position: { x: 780, y: 280 },
    },
    {
      id: 'biz-roadmap',
      data: {
        label: 'Roadmap',
        description: 'View the Stellar roadmap.',
        url: 'https://stellar.org/foundation/roadmap',
      },
      position: { x: 780, y: 360 },
    },
    {
      id: 'biz-learn',
      data: {
        label: 'Learn',
        description: 'Documentation hub for deeper study.',
        url: 'https://developers.stellar.org/docs',
      },
      position: { x: 260, y: 340 },
    },
    {
      id: 'biz-quest',
      data: {
        label: 'Stellar Quest',
        description: 'Guided learning and rewards.',
        url: 'https://quest.stellar.org/',
      },
      position: { x: 700, y: 380 },
    },
  ],
};

const trackEdges = {
  contract: [
    { id: 'c-smart-started', source: 'contract-smart', target: 'contract-started' },
    { id: 'c-started-faucet', source: 'contract-started', target: 'contract-faucet' },
    { id: 'c-started-hello', source: 'contract-started', target: 'contract-hello' },
    { id: 'c-hello-ide', source: 'contract-hello', target: 'contract-open-ide' },
    { id: 'c-started-examples', source: 'contract-started', target: 'contract-examples' },
    { id: 'c-started-quest', source: 'contract-started', target: 'contract-quest' },
    { id: 'c-smart-guides', source: 'contract-smart', target: 'contract-guides' },
    { id: 'c-guides-auth', source: 'contract-guides', target: 'contract-auth' },
    { id: 'c-guides-storage', source: 'contract-guides', target: 'contract-storage' },
    { id: 'c-guides-ttl', source: 'contract-guides', target: 'contract-ttl' },
    { id: 'c-smart-migration', source: 'contract-smart', target: 'contract-migration' },
    { id: 'c-smart-tools', source: 'contract-smart', target: 'contract-tools' },
    { id: 'c-tools-cli', source: 'contract-tools', target: 'contract-cli' },
    { id: 'c-tools-ide', source: 'contract-tools', target: 'contract-online-ide' },
    { id: 'c-tools-oz', source: 'contract-tools', target: 'contract-oz' },
    { id: 'c-oz-wizard', source: 'contract-oz', target: 'contract-oz-wizard' },
    { id: 'c-tools-scaffold', source: 'contract-tools', target: 'contract-scaffold' },
    { id: 'c-tools-llms', source: 'contract-tools', target: 'contract-llms' },
  ],
  frontend: [
    { id: 'f-dapps-guides', source: 'frontend-dapps', target: 'frontend-guides' },
    {
      id: 'f-guides-frontend',
      source: 'frontend-guides',
      target: 'frontend-dapp-frontend',
    },
    { id: 'f-guides-hello', source: 'frontend-guides', target: 'frontend-hello' },
    { id: 'f-guides-passkey', source: 'frontend-guides', target: 'frontend-passkey' },
    { id: 'f-dapps-tools', source: 'frontend-dapps', target: 'frontend-tools' },
    { id: 'f-tools-sdk', source: 'frontend-tools', target: 'frontend-sdk' },
    { id: 'f-tools-wallet', source: 'frontend-tools', target: 'frontend-wallet' },
    { id: 'f-tools-scaffold', source: 'frontend-tools', target: 'frontend-scaffold' },
    { id: 'f-tools-llms', source: 'frontend-tools', target: 'frontend-llms' },
    { id: 'f-dapps-security', source: 'frontend-dapps', target: 'frontend-security' },
  ],
  entrepreneurs: [
    { id: 'e-intro-sdf', source: 'biz-intro', target: 'biz-sdf' },
    { id: 'e-sdf-case', source: 'biz-sdf', target: 'biz-case' },
    { id: 'e-sdf-events', source: 'biz-sdf', target: 'biz-events' },
    { id: 'e-sdf-careers', source: 'biz-sdf', target: 'biz-careers' },
    { id: 'e-intro-grants', source: 'biz-intro', target: 'biz-grants' },
    { id: 'e-grants-fund', source: 'biz-grants', target: 'biz-community-fund' },
    { id: 'e-grants-eco', source: 'biz-grants', target: 'biz-ecosystem' },
    { id: 'e-intro-tech', source: 'biz-intro', target: 'biz-technology' },
    { id: 'e-tech-stack', source: 'biz-technology', target: 'biz-stack' },
    { id: 'e-tech-lumens', source: 'biz-technology', target: 'biz-lumens' },
    { id: 'e-tech-contracts', source: 'biz-technology', target: 'biz-contracts' },
    { id: 'e-tech-roadmap', source: 'biz-technology', target: 'biz-roadmap' },
    { id: 'e-intro-learn', source: 'biz-intro', target: 'biz-learn' },
    { id: 'e-learn-quest', source: 'biz-learn', target: 'biz-quest' },
  ],
};

const nodeTypes = { link: LinkNode };

function useTrackData(track) {
  return useMemo(() => {
    const theme = trackThemes[track];
    const baseNodes = trackNodes[track];
    const xScale = 2.8;
    const yScale = 1.15;
    const minY = Math.min(...baseNodes.map((node) => node.position.y));
    const offsetX = Math.max(100, -minY * xScale + 100);
    const nodes = baseNodes.map((node) => ({
      ...node,
      position: {
        x: node.position.y * xScale + offsetX,
        y: node.position.x * yScale,
      },
      type: 'link',
      data: {
        ...node.data,
        accent: theme.accent,
        accentSoft: theme.accentSoft,
      },
    }));

    const edges = trackEdges[track].map((edge) => ({
      ...edge,
      type: 'smoothstep',
      animated: false,
      style: { stroke: theme.edge, strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 16,
        height: 16,
        color: theme.edge,
      },
    }));

    return { nodes, edges, theme };
  }, [track]);
}

export default function StellarFlowChart({ track }) {
  const { nodes, edges, theme } = useTrackData(track);

  const handleNodeClick = (_, node) => {
    if (!node?.data?.url) return;
    window.open(node.data.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="flow-wrapper">
      <div
        className="flow-card"
        style={{ '--accent': theme.accent, '--accent-soft': theme.accentSoft }}
      >
        <ReactFlow
          key={track}
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          nodesDraggable={false}
          nodesConnectable={false}
          panOnScroll
          onNodeClick={handleNodeClick}
        >
          <Background
            variant="dots"
            gap={22}
            size={1.2}
            color="rgba(148, 163, 184, 0.25)"
          />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </section>
  );
}
