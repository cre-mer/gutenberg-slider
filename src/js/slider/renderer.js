/**
* Wordpress dependencies
*/
const {
  InnerBlocks
} = wp.editor


const Renderer = ( props ) => {
  // UI
  return (
    <div className='slider'>
      <InnerBlocks.Content />
    </div>
  )
}

export default Renderer
