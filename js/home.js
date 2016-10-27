



function setup(){
	$.ajax({
		url: "php/home.php",
		dataType: 'json',
		type: 'GET',
		//data: {code:code},
		success: function(data){
			
			loadPage(data);
		},
		error: function(xhr,textStatus,errorThrown){
			console.log("error "+ textStatus + " " + errorThrown);
			console.log(xhr.responseText);
		}
	});
}

function loadPage(data){
	console.log(data);
	var toAppend = "";
	for(var i = 0; i<data.length;i++){
		//console.log(data[i][0][1].wine);
		toAppend = toAppend + '<div class="panel panel-default"><div class="panel-heading" role="tab" id="heading'
		+i+'"><h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'
		+i+'" aria-expanded="false" aria-controls="collapse'
		+i+'">'
		+data[i].producer+'</a></h4></div><div id="collapse'
		+i+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'
		+i+'"><div class="panel-body"><div class="list-group">';
		for(var j = 0; j<data[i][0].length;j++){
			console.log(data[i][0][j].wine);
			toAppend = toAppend + '<button type="button" class="list-group-item" href="#">'
			+data[i][0][j].wine+
			'</button>';
		}
		toAppend = toAppend +'</div></div></div></div>';
		
	}
	$('.producer-panel').append(toAppend);
}


$(document).ready(function(){
	setup();
});