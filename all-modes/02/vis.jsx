fetch('miserables.json')
  .then(res => res.json())
  .then(data => {
    const comps = [
      ForceGraph.ForceGraph2D,
      ForceGraph.ForceGraph3D,
      ForceGraph.ForceGraphVR
    ]
    const compWidth = window.innerWidth / comps.length

    ReactDOM.render(
      <div style={{ display: 'flex' }}>
        {comps.map(Comp => <Comp width={compWidth} graphData={data} />)}
      </div>,
      document.getElementById('graph')
    )
  })
