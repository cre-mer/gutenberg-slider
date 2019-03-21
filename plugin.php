<?php
/**
 * Plugin Name:     Gutenberg Slider
 * Description:     A WordPress Gutenberg Slider
 * Author:          Jonas Merhej
 * Text Domain:     gutenberg-slider
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         jonasm/gutenberg-slider
 */

namespace jonasm\GutenbergSLider;

//  Exit if accessed directly.
defined('ABSPATH') || exit;


/**
 * Enqueue block script and backend stylesheet.
 */
add_action( 'enqueue_block_editor_assets', function() {
	wp_enqueue_script( 'gutenberg-slider', plugins_url( '/dist/js/block.js', __FILE__ ), [], filemtime( plugin_dir_path( __FILE__ ) . 'dist/js/block.js' ), TRUE );
	wp_enqueue_style( 'gutenberg-slider-editor', plugins_url( 'dist/css/editor.css', __FILE__ ) );
	wp_enqueue_script( 'plain-js', plugins_url( '/src/ui-js/index.js', __FILE__ ), [], filemtime( plugin_dir_path( __FILE__ ) . 'src/ui-js/index.js'), TRUE);
	wp_enqueue_script( 'jquery-map', plugins_url( '/src/ui-js/jquery-3.3.1.min.js', __FILE__ ), [], filemtime( plugin_dir_path( __FILE__ ) . 'src/ui-js/jquery-3.3.1.min.js'), TRUE);
} );

/**
 * Enqueue styles for backend and frontend.
 */
add_action( 'enqueue_block_assets', function() {
	wp_enqueue_style( 'gutenberg-slider-style', plugins_url( '/dist/css/style.css', __FILE__ ), [], filemtime( plugin_dir_path( __FILE__ ) . 'dist/css/style.css' ) );
} );


/**
 * Load translation
 */
add_action( 'plugins_loaded', function(){
	load_plugin_textdomain( 'gutenberg-slider', false, plugin_dir_path( __FILE__ ) . 'languages' );
});
