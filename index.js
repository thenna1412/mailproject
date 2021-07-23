                


    // function for grow and shrink

var open=false;

function template(){


document.getElementById('content').classList.remove("display");
if (!open) {
	open=true;
	

document.getElementById('content').classList.add("shrink");

}
else{
	open=false;

document.getElementById('content').classList.remove("shrink");
}
}





// function for default page without content

function content() {

	document.getElementById('content').classList.add("display");
}





// function for add background colour mailbox div

var mail=document.getElementByClassName("mail");

function orange(currentEle) {
	
 // document.getElementByClassName('mail').classList.remove("bg-mailbox");

 // document.querySelectorAll(".mail").classList.remove("bg-mailbox");



currentEle.classList.toggle("bg-mailbox");


 currentEle.classList.toggle("white");


};