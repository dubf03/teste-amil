$(document).ready(function(){

	$("#save").on("click", function(){
		event.preventDefault()

		name = $("#name").val();
		email = $("#email").val();
		phone = $("#phone").val();

		if(validateName(name) && validateEmail(email) && validatePhone(phone)) {
			showContacts(name, email, phone);
		}
		
	});

	$("input").on("blur", function(){
		field = $(this).attr('name');
		val = $(this).val();
		switch (field) {
			case "name": 
				validateName(val); break;
			case "phone":
				validatePhone(val); break;
			case "email":
				validateEmail(val); break;
		}
	});

	$("#cancel").on("click", function(){
		event.preventDefault()
		clearAll();
	});

	var validateName = function(text) {
		regex = new RegExp("^[a-zA-Z\\s]+$");
		if (!regex.test(text) || text == "") {
			$("#messages").text("Preencha o campo nome corretamente.");
			return false;
		}else {
			return true;
		}
	};

	var validateEmail = function(email) {
		regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		if (!regex.test(email) || email == "") {
			$("#messages").text("Preencha o campo email corretamente.");
			return false;
		}else {
			return true;
		}
	};

	var validatePhone = function(phone) {
		regex = new RegExp(/^(\(11\) (9\d{4})-\d{4})|((\(1[2-9]{1}\)|\([2-9]{1}\d{1}\)) [5-9]\d{3}-\d{4})$/);
		if (!regex.test(phone) || phone == "") {
			$("#messages").text("Preencha o campo telefone corretamente.");
			return false;
		}else {
			return true;
		}
	};

	var showContacts = function(nome, email, phone){
		$("#contacts").append(nome+" - "+email+" - "+phone+"<br>");
		clearAll();
	}

	var clearAll = function(){
		$("#name").val("");
		$("#email").val("");
		$("#phone").val("");
	}

	$('#phone').mask('(00) 00000-0000');

});