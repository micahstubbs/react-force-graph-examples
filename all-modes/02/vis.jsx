fetch('miserables.json')
  .then(res => res.json())
  .then(data => {
    // original data and two non-reference copies
    const datasets = [
      data,
      JSON.parse(JSON.stringify(data)),
      JSON.parse(JSON.stringify(data))
    ]
    const comps = [
      ForceGraph.ForceGraph2D,
      ForceGraph.ForceGraph3D,
      ForceGraph.ForceGraphVR
    ]
    const compWidth = window.innerWidth / comps.length

    ReactDOM.render(
      <div style={{ display: 'flex' }}>
        {comps.map((Comp, i) => (
          <Comp width={compWidth} graphData={datasets[i]} />
        ))}
      </div>,
      document.getElementById('graph')
    )
  })
