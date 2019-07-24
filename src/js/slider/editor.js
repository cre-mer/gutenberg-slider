/**
 * External dependencies
 */
const { times } = lodash;
import memoize from 'memize';

/**
 * Wordpress dependencies
 */
const { createBlock } = wp.blocks;
const { PanelBody, RangeControl } = wp.components;
const { InnerBlocks, InspectorControls } = wp.blockEditor;
const { select } = wp.data;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In slider block, the only block allowed is 'jonasm/slide'.
 *
 * @constant
 * @type {string[]}
*/
const ALLOWED_BLOCKS = [ 'jonasm/slide' ]

/**
 * Standard Template
 */
const TEMPLATE = [
	[ 'jonasm/slide' ]
]


/*
* Slider edit component
*/
const Editor = ( { attributes, clientId, setAttributes } ) => {

	const sliderBlock = select('core/block-editor').getBlocksByClientId( clientId );
	const slides  = sliderBlock[0].innerBlocks.length;

	return (
		<div className='jonasm-slider__wrapper'>
			<div className={ `jonasm-slider has-${ slides }-slides` }>
				<InnerBlocks />
			</div>
		</div>
	)
}

export default Editor
