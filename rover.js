var posX = 0;
var posY = 0;
var oldX = posX;
var oldY = posY;
var facing = "N";
var oldfacing = facing;

function write_pos()
{
	document.getElementById("posistion").innerHTML = "<b>Rover Position: X=" + posX + " Y=" + posY + " Facing " + facing + "</b>";
}

function position_control()
{
	if (posY > 99)
	{
		posY = 0;
	}
	if (posY < 0)
	{
		posY = 99;
	}
	if (posX > 99)
	{
		posX = 0;
	}
	if (posX < 0)
	{
		posX = 99;
	}
}

function move_forward()
{
	switch(facing)
	{
		case "N":
			posY += 1;
			position_control();
			break;
		case "S":
			posY -= 1;
			position_control();
			break;
		case "E":
			posX += 1;
			position_control();
			break;
		case "W":
			posX -= 1;
			position_control();
			break;
	}
}

function move_backward()
{
	switch(facing)
	{
		case "N":
			posY -= 1;
			position_control();
			break;
		case "S":
			posY += 1;
			position_control();
			break;
		case "E":
			posX -= 1;
			position_control();
			break;
		case "W":
			posX += 1;
			position_control();
			break;
	}
}

function move_left()
{
	switch(facing)
	{
		case "N":
			facing = "W";
			break;
		case "S":
			facing = "E";
			break;
		case "E":
			facing = "N";
			break;
		case "W":
			facing = "S";
			break;
	}
}

function move_right()
{
	switch(facing)
	{
		case "N":
			facing = "E";
			break;
		case "S":
			facing = "W";
			break;
		case "E":
			facing = "S";
			break;
		case "W":
			facing = "N";
			break;
	}
}

function reset()
{
	posX = 0;
	posY = 0;
	facing = "N"
	document.getElementById("movement").value = "";
	write_pos();
}

function move_rover()
{

	var commands = document.getElementById("movement").value;

	oldX = posX;
	oldY = posY;
	oldfacing = facing;

	for (i=0;i<commands.length;i++)
	{
		switch(commands[i])
		{
			case "f":
	  		move_forward();
	  		break;
			case "b":
	 			move_backward();
	  		break;
	  		case "l":
	 			move_left();
	  		break;
			case "r":
	 			move_right();
	  		break;
			default:
	  			alert("Syntax error!\nCommand -" + commands[i] + "- unkwown.");
		}
	}
  write_pos();
}
