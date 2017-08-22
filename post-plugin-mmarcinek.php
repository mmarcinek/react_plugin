<?php
/*
Plugin Name: Post-Plugin-MMarcinek
Description: A simple plugin for viewing and editing Wordpress Posts   
Version:     0.0.1
Author:      Michael Marcinek
*/
class WP_React_Boilerplate {
	public $plugin_domain;
	public $views_dir;
	public $version;

		public function admin_menu() {
			$title = __( 'WP React Boilerplate', $this->plugin_domain );

			$hook_suffix = add_management_page( $title, $title, 'export', $this->plugin_domain, array(
				$this,
					'load_admin_view',
			));

			add_action( 'load-' . $hook_suffix, array( $this, 'load_bundle' ) );
		}

		public function load_bundle() {
			wp_enqueue_script( $this->plugin_domain . '-bundle', plugin_dir_url( __FILE__ ) . 'dist/bundle.js', array(), $this->version, 'all' );
		}
	}

?>