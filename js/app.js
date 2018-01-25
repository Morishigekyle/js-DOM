/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var divElem = document.getElementById("name1");
divElem.innerHTML = "Tay-Tay";


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var divElem = document.getElementById("position2");
divElem.innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var divElem = document.getElementById("alias3");
divElem.innerHTML = "Concatenation";


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var divElem = document.getElementsByClassName("profile")[0];
divElem.innerHTML = '"Dearly beloved, We are gathered here today, To get through this thing called life."';

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var divElem = document.getElementsByClassName("profile")[1];
divElem.innerHTML = "Knowing is not enough, we must apply. Willing is not enough, we must do.";

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var divElem = document.getElementsByClassName("alias")[2];
divElem.innerHTML = "Jules Winnfield";


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var dElem = document.createElement("div");
dElem.id = "name7";
dElem.innerHTML = "Peter Griffin";
nameParent.appendChild(dElem);


 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var dElem = document.createElement("div");
dElem.id = "alias8";
dElem.innerHTML = "Old Man Riverwalk";
aliasParent.appendChild(dElem);



//Final Boss
/*9. Create your own profile.*/
document.getElementsByClassName("block3 col-sm-4")[2].getElementsByTagName("img")[0].src = "https://trishryanonline.files.wordpress.com/2017/02/chicken.jpg"

var dElem = document.createElement("div");
var classChild = document.getElementsByClassName("block3 col-sm-4")[2];
dElem.id = "name8";
dElem.innerHTML = "Birdie";
classChild.appendChild(dElem);

var dElem = document.createElement("div");
dElem.id = "position8";
dElem.innerHTML = "Coop King";
classChild.appendChild(dElem);

var dElem = document.createElement("div");
dElem.id = "alias8";
dElem.innerHTML= "The One Who Could FLy";
classChild.appendChild(dElem);

var dElem = document.createElement("div");
dElem.id = "bio8";
dElem.innerHTML = "Chirp Chirp Chirp";
classChild.appendChild(dElem);
