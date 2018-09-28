$(document).ready(function(){

	var scroll_bool = false;
	var i = 0;
	
	var stats = 6;

	

	$("#masnoticias").click(function(){
		if (i == 0){
			cargarJSON(i+1);
			i++;
		} else if (i == 1){
			cargarJSON(i+1);
			i++;
			$("#masnoticias").hide();
		} 
	});
	
	

	$(window).scroll(function(){
		if (($(window).scrollBottom()==0) && (scroll_bool)){
			if (i == 0){
				cargarJSON(i+1);
				i++;
			} else if (i == 1){
				cargarJSON(i+1);
				i++;
				$("#masnoticias").hide();
			}
		};		
	});

	$.fn.scrollBottom = function() { 
		return $(document).height() - this.scrollTop() - this.height(); 
	};
	

	function cargarJSON(i){
		
		fichero = "Data/" + i + ".json";	
		$.getJSON(fichero, function(jsonObject) {
	        ponerNoticias(jsonObject);
	    });
		
	}

	function ponerNoticias(json){
     $.each( json, function(j, item) {
		 var noticia_container = $('<div>');
		  var noticia = $('<div>');
		var img = $('<img>');
		var section = $('<section>');
		var h2  = $('<h2>');
		var datetime = $('<div>');
		var info = $('<div>');
		var p   = $('<p>');
     	var a = $('<a>');
		
		noticia.attr('id', item.id);

		noticia.attr('class', 'col-sm-8');
		h2.text(item.titulo);
		datetime.attr('class', 'datetime');
		datetime.text(item.datetime);
		info.attr('class', 'informacion');
		p.text(item.desc);
		datetime.attr('class', 'datetime');
		datetime.html('<span class=\"far fa-calendar-alt\"></span>' + item.datetime);
		img.attr('class', 'img-responsive img-thumbnail');
		img.attr('src', item.img);
		
		h2.appendTo(noticia);
		datetime.appendTo(noticia);
		info.appendTo(noticia);
		p.appendTo(info);
		img.appendTo(info);
     	noticia_container.appendTo('#noti');
		noticia.appendTo(noticia_container);
		 
		 
		 
		 

     }); 
}

});

