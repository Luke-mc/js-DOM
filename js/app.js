/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/


document.getElementById("name1").innerHTML = "Tay-tay" ;


/*2. Replace the n/a with the following: 

Project Manager*/

 document.getElementById("position2").innerHTML = "Project Manager";


/*3. Replace the n/a with the following:

Concatenation*/

 document.getElementById("alias3").innerHTML = "Concatenation";



/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

 var profile = document.getElementsByClassName("profile");

 var snoopsPro = profile[0];

 snoopsPro.innerHTML = "gansta lorem ipsum";

/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/

var profile = document.getElementsByClassName("profile");

 var samJack = profile[2];

 samJack.innerHTML = "lorem ipsum";



/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/

var newDiv = document.createElement("div");

var nameBox = document.getElementById("nameBox");

newDiv.setAttribute("id","name7")


newDiv.innerHTML = "Chuck Norris";


nameBox.appendChild(newDiv)


 

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

var newDiv = document.createElement("div");

var aliasBox = document.getElementById("aliasBox");

newDiv.setAttribute("id","alias8")

newDiv.innerHTML = "The Purple Monster";

aliasBox.appendChild(newDiv)




//Final Boss
/*8. Create your own profile.*/

var block = document.getElementsByClassName("block3");

var myBlock = block[2];


function newProfile(id,str){


var newDiv = document.createElement("div");

newDiv.setAttribute("id",id)

newDiv.innerHTML = str;

myBlock.appendChild(newDiv);

}

newProfile("name9","Luke");

newProfile("position9","developer");

newProfile("alias9","Luke mc");

newProfile("profile9","likes to code, workout and do fun stuff");














