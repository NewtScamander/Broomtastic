function addToOwl(trigger){
	var id = trigger.id;
	var product = document.getElementById("product"+id).innerHTML;
	var username = document.getElementById("dropdownuser").innerHTML;
	trigger.disabled = true;

	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "/addToOwl?user=" + username + "&product=" + product, true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200){
			trigger.value = xhttp.responseText;
			trigger.disabled = false;
		}
	}
	xhttp.send();
}

function deleteFromOwl(trigger){
	var id = trigger.id; //Get id of button which triggered the function
	var product = document.getElementById("product"+id).innerHTML; //Get the id of the product
	var username = document.getElementById("dropdownuser").innerHTML;
	trigger.disabled = true;

	var xhttp = new XMLHttpRequest();
	xhttp.open("DELETE", "/deleteFromOwl?user=" + username + "&product=" + product, true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200){
			trigger.value = xhttp.responseText;
			trigger.disabled = false;
		}
	}
	xhttp.send();
}