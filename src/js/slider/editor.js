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
const { InnerBlocks, InspectorControls } = wp.editor;
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
    [ 'jonasm/slide' ],
    [ 'jonasm/slide' ]
]


/*
* Slider edit component
*/
const Editor = ( { attributes, setAttributes } ) => {

    const { slides } = attributes;

    return (
        <div className='jonasm-slider__wrapper'>
            <div className={ `jonasm-slider has-${ slides }-slides` }>
                <InnerBlocks
                    allowedBlocks={ ALLOWED_BLOCKS }
                    template={ TEMPLATE }
                    templatelock
                />
            </div>
        </div>
    )
}

export default Editor
