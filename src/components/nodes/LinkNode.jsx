import { Handle, Position } from '@xyflow/react';

export default function LinkNode({ data }) {
  return (
    <div
      className={`flow-node ${data.variant ?? ''} ${data.url ? 'clickable' : ''}`}
      style={{
        '--accent': data.accent,
        '--accent-soft': data.accentSoft,
      }}
      aria-label={data.label}
    >
      <div className="node-title">{data.label}</div>
      {data.description ? <div className="node-hint">{data.description}</div> : null}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
