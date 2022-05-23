<?php 
require_once "../../wp-load.php";
$query = new WP_Query( array( 
    'type_post'=>'post',
    'tax_query'=> array(
            "taxonomy"=>"category",    
            )
    )
);
if($query->have_posts()) : while($query->have_posts()):$query->the_post();


endwhile;
endif;

?>
<select name="event-dropdown">
    <option value=""><?php echo esc_attr_e( 'Select Event', 'textdomain' ); ?></option>
    <?php 
    //$categories = get_categories( array( 'toxomany' => "category" ) ); 
  
    //
    foreach ( $categories as $category ) {
        printf( '<option value="%1$s">%2$s (%3$s)</option>',
            esc_attr( '/category/archives/' . $category->cat_name ),
            esc_html( $category->cat_nicename ),
            esc_html( $category->ID )
        );
    }
    ?>
</select>