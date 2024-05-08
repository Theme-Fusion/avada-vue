<?php
/**
 * Avada Vue
 *
 * Plugin Name: Avada Vue
 * Plugin URI:  https://avada.com
 * Description: Small vueJS test project for Avada developer.
 * Version:     1
 * Author:      ThemeFusion
 * Author URI:  https://avada.com/about-us/
 * 
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Invalid request.' );
}

// Plugin Folder URL.
if ( ! defined( 'AVADA_VUE_PLUGIN_URL' ) ) {
	define( 'AVADA_VUE_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}

class Avada_Vue {

	public function __construct() {
		add_action( 'plugins_loaded', [ $this, 'init' ] );
		add_filter( 'script_loader_tag', [ $this, 'add_type_att_to_script' ], 10, 3 );
	}

	public function init() {
		register_activation_hook( __FILE__, [ $this, 'activate' ] );
		add_action( 'admin_menu', [ $this, 'add_menu_page' ] );
	}

	/**
	 * Set defaults on activation.
	 */
	public function activate() {
		register_uninstall_hook( __FILE__, [ $this, 'uninstall' ] );
	}

	/**
	 * Register a page.
	 */
	public function add_menu_page() {
		add_menu_page(
			__( 'Avada Vue', 'avada-vue' ),
			__( 'Avada Vue', 'avada-vue' ),
			'manage_options',
			'avada-vue',
			[ $this, 'page_content' ],
		);	
	}

	/**
	 * Page Content.
	 */
	public function page_content() {
		echo '<div id="awb-vue-app"></div>';
		wp_enqueue_script( 'avada-vue--module', AVADA_VUE_PLUGIN_URL . '/dist/assets/app.js', [], '1.0', false );
		wp_enqueue_style( 'avada-vue--css', AVADA_VUE_PLUGIN_URL . '/dist/assets/main.css' );
	}

	/**
	 * Add type attribute to script.
	 *
	 * @access public
	 * @since 3.7
	 */
	public function add_type_att_to_script( $tag, $handle, $src ) {
		if ( strpos( $handle, '--module' ) === false ) {
			return $tag;
		}

		$tag = '<script type="module" src="' . esc_url( $src ) . '"></script>';
		return $tag;
	}


	/**
	 * Delete the options on uninstall.
	 */
	public function uninstall() {
	}
}

new Avada_Vue();


