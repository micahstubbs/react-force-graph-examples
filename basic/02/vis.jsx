fetch('miserables.json')
  .then(res => res.json())
  .then(data => {
    const { ForceGraph2D, ForceGraph3D, ForceGraphVR } = ForceGraph

    ReactDOM.render(
      <ForceGraphVR graphData={data} />,
      document.getElementById('graph')
    )
  })
