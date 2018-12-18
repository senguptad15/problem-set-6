/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  let ctx = document.getElementById("canvas1").getContext('2d');
  ctx.font = ("48px sans-serif");
  ctx.strokeText("Hello, World!", 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let height = prompt("Enter the height");
  let width = prompt("Enter the width");
  let x = prompt("Enter the x value");
  let y = prompt("Enter the y value");

  while (height < 1) {
    height = prompt("Your height was too small");
  }

  while (height > 512) {
    height = prompt("Your height was too big");
  }

  while (width < 1) {
    width = prompt("Your width was too small");
  }

  while (width > 1024) {
    width = prompt("Your width was too big");
  }

  while (x < 5) {
    x = prompt("Your x value was too small");
  }

  while (y < 5) {
    y = prompt("Your y value was too small");
  }

  let canvas = document.getElementById('canvas2')
  let ctx = canvas.getContext('2d');

  ctx.strokeRect(x, y, width, height);
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle(){
  let color = prompt("Color:");

  let canvas = document.getElementById('canvas3');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (color != "black" && color != "blue" && color != "green" && color != "orange" && color != "purple" && color != "red" && color != "yellow") {
    alert(color + " is not a supported color.");
  } else {
    context.fillStyle = color;
    context.fillRect(10, 10, 100, 50);
  }
}


/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let x=10;
  let y=10;
  let a;
  let b;
  let c;
  let canvas = document.getElementById("canvas4");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  while(true){
	a=Number(prompt("Enter side 1 length"));
	b=Number(prompt("Enter side 2 length"));
	c=Number(prompt("Enter hypotenuse length"));
	if(((a**2) + (b**2) == (c**2)) && a>0 && b>0 && c>0 && canvas.width-x-a>=0 && canvas.height-y-b>=0){
		break;
	}else{
		alert("That is not a valid triangle")
	}
  }
 //Line A
 context.beginPath(); //Begins a path
 context.moveTo(x,y); //Choses the starting point
 context.lineTo(x,y+a); //Line A coordinates: It is a vertical line, therefore the same x value but different y-value
 context.stroke(); //Draws the line
 //Line B
 context.beginPath();
 context.moveTo(x,y+a);
 context.lineTo(x+b,y+a);
 context.stroke();
 //Hypotenuse
 context.beginPath();
 context.moveTo(x,y);
 context.lineTo(x+b,y+a);
 context.stroke();
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
    var canvas5 = document.getElementById("canvas5");
    var text5 = canvas5.getContext("2d");
    text5.clearRect(0, 0, canvas5.width, canvas5.height);

    var radius = prompt("Enter radius:");

    var eyes = (Number(radius) * 0.10);
    var eyes_position1 = radius * 0.60;
    var eyes_position2 = radius * 1.35;
    var smile_position = radius * 0.97;
    var smile_radius = radius * 0.70;
    var smile_position1 = smile_position * 2.90;
    var smile_position2 = smile_position * 2.35; /* Below one = sad face. Above 1 = happy face */

    text5.beginPath();
    text5.arc(radius, radius, radius, 0, 2 * Math.PI, false);
    text5.closePath();
    text5.stroke();

    text5.beginPath();
    text5.arc(eyes_position1, eyes_position1, eyes, 0, 2 * Math.PI, false);
    text5.closePath();
    text5.stroke();

    text5.beginPath();
    text5.arc(eyes_position2, eyes_position1, eyes, 0, 2 * Math.PI, false);
    text5.closePath();
    text5.stroke();

  /*  text5.beginPath();
    text5.moveTo(smile_position, smile_position);
    text5.bezierCurveTo(smile_position, smile_position2, smile_position1, smile_position2, smile_position1, smile_position);
    text5.stroke(); */

    text5.beginPath();
    text5.arc(smile_position, smile_position, smile_radius, 1.9 * Math.PI, 1.20 * Math.PI, false);
    text5.stroke();

}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let ctx =document.getElementById('canvas6').getContext('2d');
    ctx.clearRect(0, 0, canvas6.width, canvas6.height);
      let outerR=Number(prompt("Enter an outer radius"));
      let innerR=Number(prompt("Enter an inner radius"));
      if (outerR<=innerR){
        ctx.clearRect(0, 0, canvas6.width, canvas6.height);
        alert("Outer radius must be larger than inner radius.")
      }
      if (innerR<1 || outerR<1) {
        ctx.clearRect(0, 0, canvas6.width, canvas6.height);
        alert("One of your dimensions are to small.")
      }
        let outerx=[];
        let outery=[];
        let innerx=[];
        let innery=[];
        for(let i=0;i<5;i++){
          outerx.push(Math.cos((Math.PI*2*i)/5-(Math.PI/2))*outerR+125);
          outery.push(Math.sin((Math.PI*2*i)/5-(Math.PI/2))*outerR+125);
          innerx.push(Math.cos(((Math.PI*2*i)/5)-(Math.PI/2)+(Math.PI/5))*innerR+125);
          innery.push(Math.sin(((Math.PI*2*i)/5)-(Math.PI/2)+(Math.PI/5))*innerR+125);
        }
        ctx.beginPath();
        ctx.moveTo(outerx[0], outery[0]);
        for(let j=0;j<outerx.length;j++){
          ctx.lineTo(innerx[j], innery[j]);
          ctx.lineTo(outerx[j+1], outery[j+1]);
        }
        ctx.lineTo(outerx[0], outery[0]);
        ctx.stroke();
        ctx.closePath();
  }

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  const canvas = document.getElementById('canvas7');
  const ctx = canvas.getContext('2d');
  let x = 10+40*Math.sqrt(2);
  let y = 10;
  let angle = 0;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.moveTo(x,y);
  for(let i = 0; i<8; i++){
    ctx.lineTo(x+80*Math.cos(angle),y-80*Math.sin(angle));
    x+=80*Math.cos(angle);
    y-=80*Math.sin(angle);
    angle-=Math.PI/4;
  }
  ctx.closePath();
  ctx.lineWidth=1;
  ctx.stroke();
  ctx.fillStyle="red";
  ctx.fill();
  ctx.fillStyle="white";
  ctx.font = '65px sans-serif';
  ctx.fillText('STOP', 18, 73+40*Math.sqrt(2));

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  const canvas = document.getElementById("canvas8");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let blockLength = prompt("Length:");
  blockLength = Number(blockLength);
  if(blockLength*5+10 > canvas.width || blockLength*5+10 > canvas.height){
    alert("The pyramid will not fit on the canvas")
  }else if(isNaN(blockLength)==true){
    alert("Your input is not a number");
  }else{
    let x = 10;
    let y = canvas.height - 10 - blockLength;
    for(let i = 0; i<5; i++){
      context.strokeStyle="black";
      context.strokeRect(x, y, blockLength, blockLength);
      x += blockLength;
    }
    x = 10;
    y -= blockLength;
    for(i=0; i<4; i++){
      context.strokeStyle="black";
      context.strokeRect(x+(.5*blockLength), y, blockLength, blockLength);
      x+= blockLength;
    }
    x = 10;
    y -= blockLength;
    for(i=0; i<3; i++){
      context.strokeStyle="black";
      context.strokeRect(x+blockLength, y, blockLength, blockLength);
      x+=blockLength;
    }
    x=10;
    y -= blockLength;
    for(i=0; i<2; i++){
      context.strokeStyle="black";
      context.strokeRect(x+1.5*blockLength, y, blockLength, blockLength);
      x+=blockLength;
    }
    x=10;
    y-=blockLength;
    context.strokeStyle="black";
    context.strokeRect(x+2*blockLength, y, blockLength, blockLength);
  }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

  let canvas = document.getElementById("canvas9");
  let context = canvas.getContext("2d");
  let x = 150;
  let houseHeight = 450;
  let y = canvas.height - houseHeight - 10;
  let houseLength = 600;
  let houseColor;
  let doorColor;

  context.clearRect(0, 0, canvas.width, canvas.height);

  while(true){
  doorColor=prompt("Please enter a valid color for your front door");
  houseColor=prompt("Please enter a valid color for your house");
  if((doorColor=="brown" || doorColor=="blue" || doorColor=="green" || doorColor=="orange" || doorColor=="purple" || doorColor=="red" || doorColor=="yellow")
  && (houseColor=="brown" || houseColor=="blue" || houseColor=="green" || houseColor=="orange" || houseColor=="purple" || houseColor=="red" || houseColor=="yellow")) {
    break;
  }
  else{
      alert("One of your colors is not supported");
  }
}

context.rect(x, y, houseLength, houseHeight);
context.fillStyle = houseColor;
context.beginPath();
context.fillStyle=houseColor;
context.fillRect(x,y,houseLength,houseHeight);
context.fillStyle=doorColor;
context.fillRect(x+(houseLength/2)-30,y+350,60,100);
context.fillStyle="gray";
context.moveTo(x,y);
context.lineTo(x+286,150);
context.lineTo(x+houseLength,y);
context.lineTo(x,y);
context.fill();
context.fillStyle="lightblue";
context.fillRect(300,y+100, 50, 50);
context.fillRect(526,y+100, 50, 50);
context.fillRect(300,y+200, 50, 50);
context.fillRect(526,y+200, 50, 50);
context.closePath();


}
