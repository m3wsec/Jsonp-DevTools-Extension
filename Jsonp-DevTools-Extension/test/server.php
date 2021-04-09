<?php

$username = $_GET['username'];
$password = $_GET['password'];

$callback = $_GET['callback'];


$arr = array(
	"username" => $username,
	"password" => $password
);

echo $callback."(".json_encode($arr).")";