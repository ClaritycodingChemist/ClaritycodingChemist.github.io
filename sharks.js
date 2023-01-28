(function(){
	
	window.alert("The JavaScript program has loaded!");
}());
	
	var wNumber = Math.ceil(Math.random() * 100 + 800);
	var repX = 0;
	var repY = 0;
	var input = document.querySelector("#reps");
	var input1 = document.querySelector("#weight");
	var button = document.querySelector("#pump");
	var button1 = document.querySelector("#invis");
	var sharky = document.querySelector("#sharklift");
	var sharky1 = document.querySelector("#sharkliftup");
	var para = document.querySelector("p");

	button.style.cursor = "pointer";
	button1.style.cursor = "pointer";
	button.addEventListener("click", clickHandler, false);
	button1.addEventListener("click", clickHandler1, false);
	
	window.addEventListener("keydown", keydownHandler, false);
		
		function keydownHandler(event)
		{
			if(event.keyCode === 13)
			{
				Inputs();
			}
			
		}
	function Inputs()
	{
		if(input)
		{
			validateInput();
			if(input1)
			{
				clickHandler1();
			}
		}
	
	}
	function validateInput()
{
	repX = parseInt(input.value);  
	repY = parseInt(input1.value);
	
	if(isNaN(repX))
	{
		input.value = "Please enter a number.";
		
	}
	else 
	{
		Sharklift();
	}
	

	
}
	function clickHandler()
	{
		validateInput();
	}
	
	function Sharklift()
	{
		repX = parseInt(input.value); 
		if(repX > 0 && repX < 50)
		{
			sharky.style.opacity = "0.0";
			sharky1.style.display = "block";
			sharky1.style.animation = "sprite 1.5s steps(2) " + repX;
			input1.style.display = "block";
			button1.style.display = "block";
			endgame()
		}
		else
		{
			input.value = "Number between 1-50.";
		}
		
		
		
		
		
	}
		
	function validateInput1()
{
	repX = parseInt(input.value);  
	repY = parseInt(input1.value);
	
	if(isNaN(repY))
	{
		input1.value = "Number between 800-900";
		
	}
	else 
	{
		Sharklift1();
	}
	

	
}
	function clickHandler1()
	{
		validateInput1();
	}
	function endgame()
	{
		input.disabled = true;
		button.disabled = true;
	}
	
	function Sharklift1()
	{
		console.log(wNumber);
		
		if(repY < wNumber)
		{
			para.innerHTML = "Too low";
		}
		else if(repY > wNumber)
		{
			para.innerHTML = "Too high";
		}
		else if(repY == wNumber)
		{
			if(wNumber > 850)
			{
				para.innerHTML = "Super Strong";
				endgame1();
			}
			if(wNumber < 850)
			{
				para.innerHTML = "Wicked Weak";
				endgame1();
			}
		
		}
		
		
	}
	function endgame1()
	{
		input1.disabled = true;
		button1.disabled = true;
	}