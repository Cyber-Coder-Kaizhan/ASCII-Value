canvas = document.getElementById("ctx");
ctx = canvas.getcontext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadImg; // setting a function, onloading this variable
	img_imgTag.src = img_image; // load image
}

function uploadImg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90))
		{
			AplhaBetKey();
			document.getElementById("d1").innerHTML = "You pressed alphabet key";
		}
    else if(keyPressed>=48 && keyPressed<=57){
		numberKey();
		document.getElementById("d1").innerHTMl = "You pressed a number key";
	}
	else if(keyPressed>=37 && keyPressed<=40){
		arrowKey();
		document.getElementById("d1").innerHTMl = "You pressed an arrow key";
	}
	else if(keyPressed== 17 || keyPressed==18|| keyPressed==27){
		specialKey();
		document.getElementById("d1").innerHTMl = "You pressed a special key";
	}
	else {
		otherKey();
		document.getElementById("d1").innerHTML = "You pressed symbol or other key";
	}
}

function AlphaBetKey() {
	img_image="Alpkey.png";
	add();

}

function numberKey() {
	img_image="numkey.png";
	add();
}

function arrowKey() {
	img_image="Arrkey.png";
	add();
}

function specialKey() {
	img_image="spkey.png";
	add();
}

function otherKey() {
	img_image = "otherkey.png";
	add();
}