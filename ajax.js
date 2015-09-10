$(document).ready(function() {
		var $mindi= $('.mindi');

		$.ajax({
			url: 'http://mindicador.cl/api',
			type: 'GET',
			dataType: 'json'
		})
		.done(function (data) {

			console.log(data);
				var html = '<div =class="capture">';
				html +='<h3>' +data.uf.valor+'</h3>';
				html += '</div>';

				console.log(html);

				$mindi.append(html);
		})
		.fail(function(jqXHR, textStatus, errorThrouwn) {
			console.log(errorThrouwn,textStatus);
		})
		.always(function() {
			console.log("complete");
		});
		
})