$(document).ready(function() {
		
		var $mindi= $('.mindi');
		var $resultado= $('.resultado');
		var valor;
		var interes=0.03;

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
				valor=data.uf.valor;
		})
		.fail(function(jqXHR, textStatus, errorThrouwn) {
			console.log(errorThrouwn,textStatus);
		})
		.always(function() {
			console.log("complete");
		});

		$("button").click(function(event) {

			console.log(valor);	
			var pedido= $(".pedido").val();
			var cuota= $("[type=number]").val();
			console.log(pedido);	
			console.log(cuota);	
			var valorInicial=valor*pedido;
			var total=valorInicial*interes;
			var comi;
			if(total != 0){
				comi=(valor*interes)+valor;
			}else comi=0;

			
			var totalisimo= valorInicial+total;
	

			console.log(valorInicial);	
			console.log(total);
			console.log(totalisimo);
			var hmlT='<div><p>valor total de las '+pedido+' UF es: '+valorInicial+'</p>';
			hmlT+=	  '<p>el valor a cobrar por comision sera:'+total+'</p>';
			hmlT+=	  '<p>cada cuota a pagar tendra un valor de: '+Math.floor(comi)+'</p>';
			hmlT+=	  '<p>el total a pagar con la comision sera; '+Math.floor(totalisimo)+'</p></div>';
			$resultado.html(hmlT);


		});

		

})

