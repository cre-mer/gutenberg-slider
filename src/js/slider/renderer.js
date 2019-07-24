/**
* Wordpress dependencies
*/
const { InnerBlocks } = wp.blockEditor;

const Renderer = ( props ) => {
	// Deconstruct
	const { innerBlocks, attributes } = props;
	const { className } = attributes;
	const slides = innerBlocks.length;

	return (
		<div className={ `${ className }` }>
			<InnerBlocks.Content />
		</div>
	)
}

export default Renderer
