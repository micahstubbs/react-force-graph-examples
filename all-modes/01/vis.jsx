const comps = [
  ForceGraph.ForceGraph2D,
  ForceGraph.ForceGraph3D,
  ForceGraph.ForceGraphVR
]
const compWidth = window.innerWidth / comps.length

ReactDOM.render(
  <div style={{ display: 'flex' }}>
    {comps.map(Comp => <Comp width={compWidth} graphData={genRandomTree()} />)}
  </div>,
  document.getElementById('graph')
)
