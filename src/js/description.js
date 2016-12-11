var request = new XMLHttpRequest();
request.open("GET", "json/ls.json", false);
request.send(null)
var ls = JSON.parse(request.responseText);
console.log("ok");

var addMinus = function() {
	if($('#copy-input').val() === "ls ") {
			$('#copy-input').val($('#copy-input').val() + '-');
	}
};
var removeMinus = function() {
	if($('#copy-input').val() === "ls -") {
		$('#copy-input').val($('#copy-input').val().replace('-', ""));
	}
};

var createOptions = function() {
	var counter = 0;
	var counterTr = 0;
	var optionHtml = "";
	optionHtml += ( "<form><table border='0px'><thead><tr><th colspan='3'>Options</th></tr></thead><tbody>" );
	for ( var i = 0; i < ls.OPTIONS.length; i++) {
		var obj = ls.OPTIONS[i];
		var option;
		var description;
		for ( var key in obj) {
			option = key;
			description = obj[key].toString();
			if(counterTr === 0) {
				optionHtml += ("<tr>");
			}
			var counterS = counter.toString();
			var id = "checkboxes-" + counterS;
			optionHtml += ("<td><input title='" + description + "' type='checkbox' name='checkboxes' id='" + id + "' value='" + option + "'>");
			optionHtml += ("<label for='" + id + "'> " + option + "</label></td>");
			counter += 1;
			counterTr += 1;
			if(counterTr === 3) {
				optionHtml += ("</tr>");
				counterTr = 0;
			}
		}
	}
	optionHtml += ( "</tbody></table></form>" );
	return optionHtml;
}

$(document).ready(function() {

	var man = "http://linuxcommand.org/man_pages/" + "ls" + ".html";
	$("#man").attr("href", man)
	$("#command").text("ls");
	$("#name").text(ls.NAME);
	$("#synopsis").text(ls.SYNOPSIS);
	$("#examples").text(ls.EXAMPLES);

	$('#description').click(function() {
		window.alert(ls.DESCRIPTION);
	});

	$('#copy-input').val("ls ");

	$('#copy-input').blur(function() {
    	if( !$(this).val() ) {
          $(this).val($('#copy-input').val() + 'ls ');
    	}
	});

	$(".options").html(createOptions());

	for(let j = 0; j < ls.OPTIONS.length; j++) {
		let obj2 = ls.OPTIONS[j];
		for (let opt in obj2) {
			$("#checkboxes-" + j).click(function() {
				addMinus();
				let option_add = opt.substr(1);
				if (this.checked) {
					$('#copy-input').val($('#copy-input').val() + option_add);
				} else {
					$('#copy-input').val($('#copy-input').val().replace(option_add, ""));
					removeMinus();
				}
			});
		}
	}
	
});