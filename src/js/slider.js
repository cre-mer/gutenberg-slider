/*
* Internal dependencies
*/
import Editor from './slider/editor.js'
import Renderer from './slider/renderer.js'

/*
* Import Wordpress dependencies
*/
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/*
* Define settings
*/
let sliderSettings = {
  title: __( 'Slider' ),

  icon: 'image-flip-horizontal',

  category: 'layout',

  supports: {
      anchor: true,
      align: true
  },

  keywords: [
      __( 'slider' ),
      __( 'slideshow' )
  ],

  attributes: {
      slides: {
          type: 'number',
      },
  },

  edit: Editor,

  save: Renderer,

}


/**
 * Register block
 */
registerBlockType('jonasm/slider', sliderSettings)
