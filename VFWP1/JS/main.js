//
// Author: Harry Lee
// Creaed for: Visual Frameworks
// Mobile Development

//Working with the DOM
//wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){
	
	
	//getElementById Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}

    
    //Creating a select field element and option
	function makeCats(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "group");
		for(var i=0, j=categoryGroup.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = categoryGroup[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		//selectLi.appendChild(makeSelect);
	}

	//find selected box
	function getSelectedCheckbox(){
		var checkbox = document.forms(0).favorite;
		for(var i=0; i<checkBox.length; i++){
			if(checkBox.length[i].checked){
				favoriteValue = checkBox[i].value;
			}
		}	
	}
	
	function getCheckBoxValue(){
		if($('fav').checked){
			favoriteValue = $('fav').value;
		}else{
			favoriteValue = "No"
		}
	}
	
	function ToggleControls(n){
		switch(n){
			case "no":
				$('').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('book').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	}
	
	function storeData(key){
		//It there is on key new item and a key is needed.
		if(!key){
			var id 				= Math.floor(Math.random()*100000001);
		}else{
			//Set the id to the existing key
			id = key;
	}
	//Gather up all of aur field and store.
	getCheckBoxValue();
	getCheckBoxValue();
	var item						={};
		item.group					=["Group:", $('group').value];
		item.author					=["Author:", $('author').value];
		item.title					=["Title:", $('title').value];
		item.books					=["Books:", $('books').value];
		item.favorite				=["Favorite:", favoritevalue];
		item.date					=["Date:", $('date').value];
		item.checkbox				=["Checkbox:", $('checkbox').value];
		item.notes					=["Notes:", $('notes').value];
		//Save data into Local Storage.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Date Saved!");
	}
	
	function getData(){
		toggleControls("on");
		if(localStorage.length == 0){
			alert("There is no data in Local Storage default date wae added.");
			autoFillData();
		}
		//Write Date
		var makeDiv = docment.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.creaeElement('div');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; ivlen;i++){
			var makeli = document.createElement('li');
			var linksli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = locaStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.creatElement('ul');
			makeli.appendChild(makeSubList);
			getImage(obj.group[1], makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linkLi); // Create our edit and delet buttons.*/
		}
	}
	// get the image for the right category
	function getImage(catName, makeSubList){
		var imageLi = document.createElement('li');
		makeSubList.appendChild(imageLi);
		var setSrc = documen.createElement('img');
		varsetSrc = newImg.setAttribute("src", "images/"+catName + ".png");
		imageLi.appendChild(newImg);
	}
	
	//Auto Populate Local Storage
	function autoFillData(){
		//The actual Josn Object
		for(var n in json){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringfy(json[n]));
	}
}
	
	//make Item Links
	function makeItemLinks(key, linkLi){
		//add and edit single item link
		var editLink = doument.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Text";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = edltText;
		linksLi.appendChild(editLink);
		
		//add a break
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);
		
		//add a delete single item Link 
		var deleteLink = document.createElement('a');
		deleteLink.href = "book";
        deleteLink.href.key = key;
        var deleteText = "Dlete Text";
        deleteLink.addEventListener("clink", deleteItem);
        deleteLink.innerHTML = deleteText;
        linksLi.appendChild(deleteLink);
    }
    function editItem() {
    	//Grab data from items in local storage
    	var value = localStorage.getItem(this.key);
    	var item = JSON.parse(value);
    	
    	//show forms
    	toggleControls("off");
    	
    	//populate the from with local storage
    	$('group').value 	= item.group[1];
    	$('author').value 	= item.author[1];
    	$('title').value	= item.title[1];
    	$('book').value		= item.book[1];
    	var checkBok 		= document.forms[0].Value;
    	for(var i=0; i<checkBok.length; i++){
    			if(checkBox[i].value == "" && item.value[i] == ""){
    			checkBox[i].setAttribute("checked", "checked");
    		}else if(checkBox[i].value == "" && item.value[1] == ""){
    			checkBox[i].setAttribute("checked", "checked");
    		}
    	}
    	if (item.favorite[1] == "Yes") {
    		$('fav').setattribute("checked", "checked");
    		
    	}
    	$('CheckBox').value 	= item.CheckBox[1];
    	$('date').value 		= item.date[1];
    	$('notes').value 		= item.notes[1];
    	
    	//remove the intial lsitenerfrom input save button
    	save.removeEventListener("clink", storeData);
    	//change submit button
    	$('sumit').value = "edit";
    	var editSumbit = $('submit');
    	// save the key value
    	editSubmit.addEventListener("click", validate);
    	editSumit.key = this.key;
    	
    
	}
	
	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this Book?");
		if(ask){
			localStorage.removeItem(this.key);
			alert("Book was deleted!!");
			window.location.reload();
		}else{
			alert("Book was Not deleted.");
		}
	}
	
	function clearLocal() {
		if(localStorage.length === 0){
			alert("There is no data to clear.");
		}else{
			localStorage.clear();
			alert("All data deleted!");
			window.location.reload();
			return false;
		}
	}
	
	function validate(e){
		var getGroup = $('group');
		var getauthor = $('author');
		var gettitle =$('title');
	
	//Reset Error Messages
	errMsg.innerHTML = "";
	getGroup.style.border  = "1px solid black";
	getAuthor.style.border = "1px solid black";
	getTitle.style.border  = "1px solid black";
	
	//get error messages
	var messageAry = [];
	//group validation
		if(getGroup.value === "Category Group"){
		var getGroupError = "Please choose a group.";
		getGroup.style.border = "1px solid red";
		messageAry.push(groupError);
	}
		
	// author validation
	if(getAuthor.value === ""){
		var getAuthorError = "Please enter a author.";
		getAuthor.style.border = "1px solid red";
		messageAry.push(authorError);
	}	
	
	//title validation
	if(getTitle.value === ""){
		var getTitleError = "Please enter a title.";
		getTitle.style.border = "1px solid red";
		messageAry.push(groupTitle);
	}
	
	//It there were errors display them on the screen.
	if(messageAry.length >= 1){
		for(var i=o, j=messageAry.length; i < j; i++){
			txt.innerHTML + messageAry[i];
			errMsg.appendChild(txt);
		}
		e.preventDefault();
		return false;
		}else{
			  //It all is Ok save date!
			  StoreDate(this.key);
		}
	}
	
	function storeData(){
		localStorage.setItem();
	}
	
	// variable defaults
	var categoryGroup = ["Category Group", "Books Read", "Books I will read", "Books I might read"],
		value,
		favoriteValue = "No"
		errMsg = $('errors');
	
	//makeCats();
	
	//Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click",  getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("Click", storeData);

});