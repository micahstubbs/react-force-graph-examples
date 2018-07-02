fetch('miserables.json')
  .then(res => res.json())
  .then(data => {
    const components = [ForceGraph.ForceGraph2D, ForceGraph.ForceGraph3D]
    const componentWidth = window.innerWidth / components.length

    // same data structure `data` is passed by reference to each component
    // on interaction (like dragging a node),
    // the component that the user interacts with mutates the shared `data`
    // which causes both components to re-render
    ReactDOM.render(
      <div style={{ display: 'flex' }}>
        {components.map(Component => (
          <Component width={componentWidth} graphData={data} />
        ))}
      </div>,
      document.getElementById('graph')
    )
  })
