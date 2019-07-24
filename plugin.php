<?php
/**
 * Plugin Name:     Gutenberg Slider
 * Description:     A WordPress Gutenberg Slider
 * Author:          Jonas Merhej
 * Text Domain:     gutenberg-slider
 * Domain Path:     /languages
 * Version:         0.1.0.
 */

namespace jonasm\GutenbergSLider;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/*
 * Enqueue block script and backend stylesheet.
 */
add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_script('gutenberg-slider', plugins_url('/dist/js/block.js', __FILE__), [], filemtime(plugin_dir_path(__FILE__).'dist/js/block.js'), true);
    wp_enqueue_script('gutenberg-slider-ui-js', plugins_url('/src/ui-js/index.js', __FILE__), [ 'jquery' ], filemtime(plugin_dir_path(__FILE__).'src/ui-js/index.js'), true);
    wp_enqueue_style('gutenberg-slider-editor', plugins_url('dist/css/editor.css', __FILE__));
});

/*
 * Load translation
 */
add_action('plugins_loaded', function () {
    load_plugin_textdomain('gutenberg-slider', false, plugin_dir_path(__FILE__).'languages');
});
