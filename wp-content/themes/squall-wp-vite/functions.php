<?php

/**
 * Headless functions and definitions
 */

if (!defined('ABSPATH')) {
    exit;
} // Exit if accessed directly

// add featured images to posts
add_theme_support('post-thumbnails');

//register acf fields to Wordpress API, may not need with new ACF.
function create_ACF_meta_in_REST() {
    $postypes_to_exclude = ['acf-field-group','acf-field'];
    $extra_postypes_to_include = ["page"];
    $post_types = array_diff(get_post_types(["_builtin" => false], 'names'),$postypes_to_exclude);

    array_push($post_types, $extra_postypes_to_include);

    foreach ($post_types as $post_type) {
        register_rest_field( $post_type, 'ACF', [
            'get_callback'    => 'expose_ACF_fields',
            'schema'          => null,
       ]
     );
    }

}

function expose_ACF_fields( $object ) {
    $ID = $object['id'];
    return get_fields($ID);
}

// add_action( 'rest_api_init', 'create_ACF_meta_in_REST' );