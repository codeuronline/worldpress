<?php
// require_once plugin_dir_path(__FILE__);
/**
* @package input
* @version 1.7.2
*/
/*
Plugin Name: input
Plugin URI: http://wordpress.org/plugins/input/
Description: first try in creating a plugin
Author: hakime attoumani
Version: 1.7.2
Author URI: http://www.attoumani-hakime.com/
*/

add_action('wp_footer', 'affichage');

/**
* Create the date options fields for exporting a given post type.
*
* @global wpdb $wpdb WordPress database abstraction object.
* @global WP_Locale $wp_locale WordPress date and time locale object.
*
* @since 3.1.0
*
* @param string $post_type The post type. Default 'post'.
*/

function affichage()
{
global $wpdb;

$row = $wpdb->get_row( $wpdb->prepare( "SELECT id_input FROM $wpdb->mfp_input WHERE Type = 'text'" ) );
echo "<pre>",print_r($row),"</pre>";
// echo $wpdb->options;
}