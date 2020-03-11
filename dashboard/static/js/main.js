(function($) {

	"use strict";

	let fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

function adicionaLinha() {
	if (document.getElementById('qtdVenda').value) {
		let tabela = document.getElementById('table-products');
		let numeroLinhas = tabela.rows.length;
		let linha = tabela.insertRow(numeroLinhas);
		let celula1 = linha.insertCell(0);
		let celula2 = linha.insertCell(1);   
		let celula3 = linha.insertCell(2);
		let celula4 = linha.insertCell(3);
		let celula5 = linha.insertCell(4);
		let quant = document.getElementById('qtdVenda').value
		let preco = document.getElementById('valor').value
		celula1.innerHTML = document.getElementById('codigo').value
		celula2.innerHTML = document.getElementById('descricao').value
		celula3.innerHTML = quant
		celula4.innerHTML = preco
		celula5.innerHTML = (preco * quant)
		$('#btn-add').click(function() {
			$('#modalProdutos').modal('hide');
		});
	}else {
		document.getElementById('qtdVenda').style.background = 'RED'
		document.getElementById('qtdVenda').placeholder = 'Campo requerido'
	}

}