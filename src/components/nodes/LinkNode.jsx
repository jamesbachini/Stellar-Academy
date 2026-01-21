import { Handle, Position } from '@xyflow/react';

export default function LinkNode({ data }) {
  const clickable = Boolean(data.url);

  return (
    <div
      className={`flow-node ${data.variant ?? ''} ${clickable ? 'clickable' : ''}`}
      style={{
        '--accent': data.accent,
        '--accent-soft': data.accentSoft,
      }}
      aria-label={data.label}
    >
      <div className="node-title">{data.label}</div>
      {clickable && <div className="node-hint">Open resource</div>}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
