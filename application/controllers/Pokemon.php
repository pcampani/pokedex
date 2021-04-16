<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pokemon extends CI_Controller {

	public function index() {
		$this->load->view('pokemon');
	}
}
