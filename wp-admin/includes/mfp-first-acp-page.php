<div class="wrap">
    <?php //require_once 'Database.php';
//$connexion= new Database;;
//$input_type = ["number","textearea","date","color","email","checkbox","color","date-time","file","image","month","password","radio","range","search","tel","text","time","url","week","select"];
/**foreach ($input_type as $value){
    $req = $connexion->getPDO()->prepare("INSERT INTO wp_mfp_input(Type) VALUES(:valeur)");
    $req->bindParam(":valeur", $value, PDO::PARAM_STR);
    $req->execute();
}*/
//var_dump("insertion des inputs ok");
// $req = $connexion->getPDO()->prepare("SELECT name FROM wp_terms INNER JOIN
// wp_term_taxonomy WHERE wp_terms.term_id=wp_term_taxonomy.term_id AND wp_term_taxonomy.taxonomy='category'");
// $req->execute();

// $result = $req->fetchAll();
  require_once '../../wp-load.php';
  require_once '../../wp-includes/functions.php';
  require_once '../../wp-includes/pluggable.php';
  require_once '../../wp-includes/class-wp-query.php';
 
//$objet = new WP_query;
//$objet->get_queried_object();
$terms = get_categories( [
    'taxonomy' => 'category',
    'name'=>  'composition florale',
    'hide_empty' => false,
]);
//$category = get_categories(['name'=>'composition florale']);
//var_dump($category);
var_dump($terms);


// var_dump($query); --> -->
// var_dump($result);
// require_once plugin_dir_path(__FILE__);
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

// add_action('wp_footer', 'affichage');

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

// function affichage()
// {
// global $wpdb;

// // $row = $wpdb->get_row( $wpdb->prepare( "SELECT id_form FROM $wpdb->form_inputs WHERE type_name = 'textarea'" ) );
// echo "
// <pre>",print_r($wpdb),"</pre>";
// // echo $wpdb->options;
// } ?>
</div>