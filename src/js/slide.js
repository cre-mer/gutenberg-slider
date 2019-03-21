/*
* Internal dependencies
*/
import Editor from './slide/editor.js'
import Renderer from './slide/renderer.js'


/**
* Import Wordpress dependencies
*/
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


/*
* Define Slide settings
*/
let slideSettings = {
    title: __( 'Slide' ),

    parent: [ 'jonasm/slider' ],

    icon: 'format-image',

    description: __( 'A single slide within a slider block.' ),

    category: 'layout',

    supports: {
      anchor: true
    },

    attributes: {
        backgroundColor: {
            type: 'string',
            default: ''
        },
        backgroundImage: {
            type: 'string',
            default: ''
        },
        image_D: {
            type: 'string',
            default: ''
        },
        image_L: {
            type: 'string',
            default: ''
        },
        image_P: {
            type: 'string',
            default: ''
        },
        image_M: {
            type: 'string',
            default: ''
        },
    },

    edit: Editor,

    save: Renderer
}

/*
* Register Slide block
*/
registerBlockType( 'jonasm/slide', slideSettings );
