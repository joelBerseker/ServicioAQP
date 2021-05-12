<?php
include('global_variable.php');
include('data_base.php');
?>

<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title><?= $titulo_html ?> - ServicioAQP</title>

	<link rel="stylesheet" type="text/css" href="<?= $dirEjec ?>/frontend/bootstrap-4.5.0-dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="<?= $dirEjec ?>/frontend/css/style.css">

	<link rel="stylesheet" type="text/css" href="<?= $dirEjec ?>/frontend/fontawesome-free-5.13.1-web/css/all.min.css">
	<link rel="icon" href="<?= $dirEjec ?>/frontend/images/page_icon.png">
</head>
<body>
	<div class="container position-fixed fixed-top mt-5 pt-2" style="height: 0px;" aria-live="polite">
		<div class="float-right clearfix  noti_push">

		</div>
	</div>
	<nav id="pri" class="container-fluid navbar navbar-expand-lg navbar-light position-fixed fixed-top">
		<div class="container">
			<a class="ani_ico" href="<?= $dirEjec ?>/"><img src="<?= $dirEjec ?>/frontend/images/logo.png" height="35" alt="logo"></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ml-auto">
					<form class="form-inline mr-0 mr-lg-2 mt-lg-0 mt-2 primero_buscar" method="GET" action="<?= $dirEjec ?>/servicios">
						<input class="form-control form-control-sm  segundo_buscar" name="q" type="search" placeholder="Busca un servicio">
						<button style="font-size: 14px; color: white;" class="nav-link menu_link btn p-0"  type="submit"><em class="fas fa-search"></em></button>
					</form>
					<li class="nav-item">
						<a class="nav-link menu_link <?php if ($inicio) { ?>select<?php } ?>" href="<?= $dirEjec ?>/"> Inicio</a>
					</li>	
				</ul>
			</div>
		</div>
	</nav>