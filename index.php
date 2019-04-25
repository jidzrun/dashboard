<!DOCTYPE html>
<html lang="en" class="no-js">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>SMA Future Gate - Putra</title>
	<link rel="shortcut icon" href="favicon.ico" />
	<link rel="stylesheet" href="https://use.typekit.net/ncw8xrb.css">
	<link rel="stylesheet" type="text/css" href="css/base.css" />
	<link rel="stylesheet" type="text/css" href="css/styles.css" />
	<script>
	document.documentElement.className = "js";
	var supportsCssVars = function() {
		var e,
			t = document.createElement("style");
		return (
			(t.innerHTML = "root: { --tmp-var: bold; }"),
			document.head.appendChild(t),
			(e = !!(
				window.CSS &&
				window.CSS.supports &&
				window.CSS.supports("font-weight", "var(--tmp-var)")
			)),
			t.parentNode.removeChild(t),
			e
		);
	};
	supportsCssVars() ||
		alert(
			"Please view this demo in a modern browser that supports CSS Variables."
		);
	</script>
	<style>
		.title-klik{
		  /*float: right;*/
		  position: relative; // can be either relative, absolute, or fixed 
		  z-index: 10; // this fixes it but requires one of the above positions
		}
	</style>
</head>

<body>
	<main>
		
		<div class="content" id="app">
			<!-- the content -->
		</div>
	</main>
	<div class="cursor">
		<div class="cursor__inner cursor__inner--circle"></div>
		<div class="cursor__inner cursor__inner--dot"></div>
	</div>
	<script src="dist/index.js"></script>
</body>

</html>


<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.0.min.js"></script>
<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js">
<script type="text/javascript">
	$(document).ready(function() {
			event.preventDefault();
			
		$('.title-klik').click(function(event) {
			alert('title-klik');
		});
	});
</script>