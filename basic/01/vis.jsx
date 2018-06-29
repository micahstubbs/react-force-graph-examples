const { ForceGraph2D, ForceGraph3D, ForceGraphVR } = ForceGraph

ReactDOM.render(
  <ForceGraphVR graphData={genRandomTree()} />,
  document.getElementById('graph')
)
