function show(page) {
	if (page == 'produit') {
		$('a').removeClass('active');
		$('a:contains(Produit)').addClass('active');
		$("#main-content").load("page/produit.html");
		event.preventDefault();
	}
	if(page == "statistiques"){
		$('a').removeClass('active');
		$('a:contains(Statistiques)').addClass('active');
		$("#main-content").load("page/statistiques.html");
		event.preventDefault();
	}
	if (page == 'marque') {
		$('a').removeClass('active');
		$('a:contains(Marque)').addClass('active');
		$("#main-content").load("page/marque.html");
		event.preventDefault();
	}

	if (page == 'machine') {
		$('a').removeClass('active');
		$('a:contains(Machine)').addClass('active');
		$("#main-content").load("page/machine.html");
		event.preventDefault();
	}
	if (page == 'charts') {
		$('a').removeClass('active');
		$('a:contains(Machine)').addClass('active');
		$("#main-content").load("page/machine.html");
		event.preventDefault();
	}
}
$('a').removeClass('active');
$('a:contains(Statistiques)').addClass('active');
$("#main-content").load("page/statistiques.html");




