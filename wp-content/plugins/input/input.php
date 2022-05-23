<?php
require_once plugin_dir_path(__FILE__);
/**
* @package formulaire
* @version 1.7.2
*/
/*
Plugin Name: formulaire
Plugin URI: http://wordpress.org/plugins/formulaire/
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

// $row = $wpdb->get_row( $wpdb->prepare( "SELECT id_form FROM $wpdb->form_inputs WHERE type_name = 'textarea'" ) );
echo "<pre>",print_r($wpdb),"</pre>";
// echo $wpdb->options;
}