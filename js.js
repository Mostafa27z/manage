let w = document.documentElement.clientWidth;
let cr = document.querySelectorAll(".cr");
let spn = document.querySelectorAll(".spn");
if(w<1240){
	$(".spns").show();
	for (var i = 1; i < cr.length; i++) {
		$(cr[i]).hide();
	}
	$(spn[0]).css("background-color","hsl(12, 88%, 59%)");
}
else{
	$(".spns").hide();
	for (var i = 1; i < cr.length; i++) {
		$(cr[i]).show();
	}
	
}
spn.forEach((e,j) =>{
	e.addEventListener("click", ()=>{
		for (var i = 0; i < cr.length; i++) {
		$(cr[i]).hide();
		}
		for (var i = 0; i < cr.length; i++) {
		$(spn[i]).css("background-color","white");
		}
		$(cr[j]).show();
		$(spn[j]).css("background-color","hsl(12, 88%, 59%)");
	})
})
window.addEventListener("resize", ()=>{
	w = document.documentElement.clientWidth;

if(w<1240){
	$(".spns").show();
	for (var i = 1; i < cr.length; i++) {
		$(cr[i]).hide();
	}
	$(spn[0]).css("background-color","hsl(12, 88%, 59%)");
	spn.forEach((e,j) =>{
	e.addEventListener("click", ()=>{
		for (var i = 0; i < cr.length; i++) {
		$(cr[i]).hide();
		}
		for (var i = 0; i < cr.length; i++) {
		$(spn[i]).css("background-color","white");
		}
		$(cr[j]).show();
		$(spn[j]).css("background-color","hsl(12, 88%, 59%)");
	})
})
}
else{
	$(".spns").hide();
	for (var i = 0; i < cr.length; i++) {
		$(cr[i]).show();
	}
}

});

let form = document.getElementsByTagName('form');
form[0].addEventListener('submit', (e)=>{
	let em = document.getElementById('email');
	e.preventDefault();
	if(em.value.trim()){
		$(".danger").css("opacity","0");
		$('#email').css("border-style","none");
	}
	else{
		$(".danger").css("opacity","1");
		$('#email').css("border-style","solid");
		$('#email').css("border-width","1px");
		$('#email').css("border-color","red");
	}
	
})