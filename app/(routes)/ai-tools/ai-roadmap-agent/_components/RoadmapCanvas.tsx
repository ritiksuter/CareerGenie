'use client'

import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Controls, MiniMap, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import TurboNode from './TurboNode';

const nodeTypes = {
    turbo: TurboNode,
}

function RoadmapCanvas({initialNodes, initialEdges}: any) {
    // const initialNodes = [
    //     {id: '1', position: {x: 0, y: 0}, data: {label: '1'}},
    //     {id: '1', position: {x: 0, y: 0}, data: {label: '1'}},
    // ]

    // const initialEdges = [
    //     { id: 'e1-2', source: '1', target: '2' },
    // ];

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} nodeTypes={nodeTypes}>
        <Controls />
        <MiniMap />
        {/* @ts-ignore */}
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}

export default RoadmapCanvas;