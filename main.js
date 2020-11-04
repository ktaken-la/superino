
var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

var player_object="";
var block_img_object="";

function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
      top:player_y,
      left:player_x
        });
    canvas.add(player_object);
    }
    );
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img){
        block_img_object=Img;
    block_img_object.scaleToWidth(block_image_width);
    block_img_object.scaleToHeight(block_image_height);
    block_img_object.set({
      top:player_y,
      left:player_x
        });
    canvas.add(block_img_object);
    }
    );
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    

    if (keyPressed=='70'){
   new_image("head of iron man.png");
   console.log("iron man");
    }
    
    if (keyPressed=='76'){
        new_image("pants.jpg");
        console.log("some pants");
        }