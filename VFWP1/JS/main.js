//
// Author: Harry Lee
// Creaed for: Visual Frameworks
// Mobile Development

//Working with the DOM
//wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){

	function $(x){
		var theElement = document.getElementByID(x);
		return theElement;
	}
	
	//Creating a select field element and option
	function makeCats(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "groups");
		for(var i=0, j=categoryGroup.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = categoryGroup.length [i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
		
	}
	
	//find selected box
		var checkbox = document.forms(0).favorite;
		for(var i=0; i<checkbox.length; i++){
			if(checkbox[i].checked){
				favoriteValue = checkbox[i].value
		}
	  }
	}
	function getCheckboxValue(){
		if($("fav").checked){
			favoriteValue = $("fav").value;
		}else{
			favoriteValue = "No"
		}
	}
/*	
	function ToggleControls(n){
		switch(n){
			case "No";*/
			
	function storeData(){
		var id 				= Math.floor(Math.random()*100000001);
	}
	//
	//Gather up all of aur field and store.
	getCheckboxValue();
	getCheckboxValue();
	var item						={};
		item.group					=["Group", $("group").value];
		item.books Read				=["Books Read", $("Books Read").value];
		item.books I will read		=["Books I will read", $("Books I will read").value];
		item.books I might read		=["Books I might read", $("Books I might read").value];
		item.favorite				=["Favorite", $("favorite").value];
		item.date					=["Date", $("date").value];
		item.checkbox				=["Checkbok",$("checkbok"
		item.notes					=["Notes", $("notes").value];
		localStorage.setItem(id, JSON.Stringify(item));
		alert("date Saved!");
	}
	
	function GetData(){
		toggleControls("no");
		if(localStorage.length === 0){
			alert("There is no date in Local Storage.")  
	
	
	// variable defaults
	var SelectYouCategoryGroup = ["Books Read", "Books I will read", "Books I might read"];
		value,
		favoriteValue = "No"
	;
	
	makeCats();
	
	
	function clearLocal(){
		if(localStorage.length ===0){
			alert("There is no data to clear.")
		}else{
			localStorage.colear
			alert("All data deleted!");
			window.location.reload():
			return false;
		
	//Set Link & Submit Click Events
	var displayLink = $("displayLink");
	displayLink.addEventListenr("click",  getData);
	var clear = $( "clear" );
	clear.addEventListenr("clear", clearLocal);
	var submit = $("submit");
	submit.addEventListenr("Click", storData);
});

