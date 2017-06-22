// almacenar slider en una variables
var slider = $('#slider');
// almacenar variables
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider section:last').insertBefore('#slider section:first');
//mostrar la primera imagen con un margen del -100%
slider.css('margin-left','-'+100+'%');

function moverD(){
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,1300, function(){
		$('#slider section:first').insertAfter('#slider section:last');
		slider.css('margin-left','-'+100+'%');
});
}

function moverI(){
	slider.animate({
		marginLeft: 0
	} ,1300, function(){
		$('#slider section:last').insertBefore('#slider section:first');
		slider.css('margin-left','-'+100+'%');
});
}

siguiente.on('click',function (){
	moverD();
	clearInterval(interval);
	autoplay();
});

anterior.on('click',function (){
	moverI();
	clearInterval(interval);
	autoplay();
});

function autoplay(){
	interval = setInterval(function(){
		moverD();
	},10000);
};
autoplay();



const $frasco= document.getElementById('imgproducto');
window.addEventListener('scroll', function(e){
	console.log(window.scrollY);
	$frasco.style.opacity= window.scrollY * 0.0025 + 0.5;
	if (window.scrollY<200) {
		var escala = window.scrollY*0.003+.4
		$frasco.style.transform='scale('+escala+')';
	}
	else{
		$frasco.style.transform='scale(1)';
	}
	
});








// almacenar slider en una variables
var marcas = $('#marcas');
// almacenar variables
var marcas2 = $('#btn-marcas2');
var marcas1 = $('#btn-marcas1');

//mover ultima imagen al primer lugar
$('#marcas section:last').insertBefore('#marcas section:first');
//mostrar la primera imagen con un margen del -100%
marcas.css('margin-left','-'+100+'%');

function moverDe(){
	marcas.animate({
		marginLeft: '-'+200+'%'
	} ,1400, function(){
		$('#marcas section:first').insertAfter('#marcas section:last');
		marcas.css('margin-left','-'+100+'%');
});
}

function moverIz(){
	marcas.animate({
		marginLeft: 0
	} ,1400, function(){
		$('#marcas section:last').insertBefore('#marcas section:first');
		marcas.css('margin-left','-'+100+'%');
});
}

marcas2.on('click',function (){
	moverDe();
	clearInterval(interval);
	autoplay2();
});

marcas1.on('click',function (){
	moverIz();
	clearInterval(interval);
	autoplay2();
});

function autoplay2(){
	interval = setInterval(function(){
		moverDe();
	},5000);
};
autoplay2();