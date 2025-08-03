// JavaScript Document


		var buttons;
		var snoekButton;
		var baarsButton;
		var snoekbaarsButton;
		var meervalButton;


		var tDL = false;

		function timeDelay()
		{

			window.onload = setTimeout(function() {

				tDL = true;
	
			}, 3000);

			

		}

		function strobo()
		{
	


			var logo = document.getElementById("bfLogo");
			var logoY = document.getElementById("bfLogoY");

			logo.onload = setTimeout(function() {

				logo.style.animationName = "stroboLogo";			
				logo.style.animationDuration = "0.4s";
				logo.style.transition = "ease-in-out";
				logo.style.animationTimingFunction = "cubic-bezier(1, 0.44, 1, 0.09);";


			}, 5880);

			logoY.onload = setTimeout(function() {

				logoY.style.animationName = "stroboLogoY";			
				logoY.style.animationDuration = "0.24s";
				logoY.style.transition = "ease-out";
				logoY.style.animationFillMode = "forwards";
				logoY.style.animationIterationCount = "2";

				logoY.style.animationTimingFunction = "cubic-bezier(0.68, -0.55, 0.265, 1.55)";


			}, 6280);

			logoY.on= setTimeout(function() {

		
				logoY.style.animationName = "stroboLogoYF";			
				logoY.style.animationDuration = "0.16s";
				logoY.style.transition = "ease-out";
				logoY.style.animationIterationCount = "4";
				logoY.style.animationFillMode = "forwards";

			}, 7380);

		}


		/* wijs elementen (menu knoppen) toe aan variabelen */

		function getElementsID()
		{
			snoekButton = document.getElementById("snoekButton");
			baarsButton = document.getElementById("baarsButton");
			snoekbaarsButton = document.getElementById("snoekbaarsButton");
			meervalButton = document.getElementById("meervalButton");
			
			
			/* zet elementen op volgorde in lijst */
			
			buttons = [snoekButton,baarsButton,snoekbaarsButton,meervalButton];
		}
		
		
		/* (snoek) button: laad documenten in iframes, afbeelding en beschrijving. Bewerk styling */

		function snoekLaad_Pagina()
		{	
			
			/* neem elementen */
			
			getElementsID();

			/* laad documenten */
			
			document.querySelector('iframe[name="roofvisAfbeelding"]').src = 'pages/roofvis/snoek-afbeelding.html';
			document.querySelector('iframe[name="roofvisInfo"]').src = 'pages/roofvis/snoek-beschrijving.html';
			
			
			/* styling: geselecteerd item */
			
			buttons[0].style.color = "#96f4ff";
			buttons[0].style.paddingBottom = "10px";
			buttons[0].style.backgroundSize = "51px 8px";
			buttons[0].style.textShadow = "2px 2px black";
			
			/* andere menu items uitgezonderd deze, inactief (styling) */
			
			for (var i=0;i<buttons.length;i++)
			{
				if (i!=0)
				{
					buttons[i].style.color = "#44d9bd";
					buttons[i].style.backgroundSize = "0px 0px";
					buttons[i].style.textShadow = "0px 0px";
				
				}
			}	
		}

		
		/* (baars) button: laad documenten in iframes, afbeelding en beschrijving. Bewerk styling */

		function baarsLaad_Pagina()
		{
			/* neem elementen */
			
			getElementsID();
			
			/* laad documenten */
			
			document.querySelector('iframe[name="roofvisAfbeelding"]').src = 'pages/roofvis/baars-afbeelding.html';
			document.querySelector('iframe[name="roofvisInfo"]').src = 'pages/roofvis/baars-beschrijving.html';
			
			/* styling: geselecteerd item */
			
			buttons[1].classList.add("actief");
			buttons[1].style.color = "#96f4ff";
			buttons[1].style.paddingBottom = "10px";
			buttons[1].style.backgroundSize = "51px 8px";
			buttons[1].style.textShadow = "2px 2px black";
			
			/* andere menu items uitgezonderd deze, inactief (styling) */
			
			for (var i=0;i<buttons.length;i++)
			{
				if (i!=1)
				{
					buttons[i].style.color = "#44d9bd";
					buttons[i].style.backgroundSize = "0px 0px";
					buttons[i].style.textShadow = "0px 0px";
				}
			}	
		}

		
		/* (snoekbaars) button: laad documenten in iframes, afbeelding en beschrijving. Bewerk styling */

		function snoekbaarsLaad_Pagina()
		{
			/* neem elementen */
			getElementsID();
			
			/* laad documenten */
			document.querySelector('iframe[name="roofvisAfbeelding"]').src = 'pages/roofvis/snoekbaars-afbeelding.html';
			document.querySelector('iframe[name="roofvisInfo"]').src = 'pages/roofvis/snoekbaars-beschrijving.html';
			
			/* styling: geselecteerd item */
			buttons[2].classList.add("actief");
			buttons[2].style.color = "#96f4ff";
			buttons[2].style.paddingBottom = "10px";
			buttons[2].style.backgroundSize = "51px 8px";
			buttons[2].style.textShadow = "2px 2px black";
			
			/* andere menu items uitgezonderd deze, inactief (styling) */
			for (var i=0;i<buttons.length;i++)
			{
				if (i!=2)
				{
					buttons[i].style.color = "#44d9bd";
					buttons[i].style.backgroundSize = "0px 0px";
					buttons[i].style.textShadow = "0px 0px";
				}
			}	
		}
		
		/* (meerval) button: laad documenten in iframes, afbeelding en beschrijving. Bewerk styling */

		function meervalLaad_Pagina()
		{
			/* neem elementen */
			getElementsID();
			
			/* laad documenten */
			document.querySelector('iframe[name="roofvisAfbeelding"]').src = 'pages/roofvis/meerval-afbeelding.html';
			document.querySelector('iframe[name="roofvisInfo"]').src = 'pages/roofvis/meerval-beschrijving.html';
			
			/* styling: geselecteerd item */
			buttons[3].classList.add("actief");
			buttons[3].style.color = "#96f4ff";
			buttons[3].style.paddingBottom = "10px";
			buttons[3].style.backgroundSize = "51px 8px";
			buttons[3].style.textShadow = "2px 2px black";
			
			/* andere menu items uitgezonderd deze, inactief (styling) */
			for (var i=0;i<buttons.length;i++)
			{
				if (i!=3)
				{
					buttons[i].style.color = "#44d9bd";
					buttons[i].style.backgroundSize = "0px 0px";
					buttons[i].style.textShadow = "0px 0px";
				}
			}	
		}


	   /* titel pagina: menu icon, fade in animatie */

	   function animeerMenuIcon_Over()
	   {

		var menuIcon;

		menuIcon = document.getElementById("menuIcon");
		   
		if (tDL) 
		{

			menuIcon.style.animationFillMode = "none";
			menuIcon.style.transition = "opacity 0.25s steps(2)";
			menuIcon.style.opacity = "1";
			menuIcon.style.width="55px";
			menuIcon.style.height="57px";

		}

	   }

		
	  /* titel pagina: menu icon, fade out animatie */

	  function animeerMenuIcon_Out()
	  {
		
		var menuIcon;

		menuIcon = document.getElementById("menuIcon");

		if (tDL) 
		{
	
			menuIcon.style.transition = "opacity 0.25s steps(3)";
			menuIcon.style.opacity = "0.5";
			menuIcon.style.width="50px";
			menuIcon.style.height="52px";

		}

	  }


	  /* selecteer gallerij button voor styling */

	  function gallerijButton_Activeer(actief)
	  {
		 
		 /* wijs elementen toe aan variabelen */
		  
		 var gallerijButtons = [document.getElementById("gallerijButton1"),document.getElementById("gallerijButton2"),document.getElementById("gallerijButton3"),document.getElementById("gallerijButton4")];
		
		 /* style actief element */
		  
		 gallerijButtons[actief].style.border = "inset 3px rgb(166, 119, 255)";
		 gallerijButtons[actief].style.boxShadow = "0px 0px 1px 2px rgba(0,0,0,0.5)";
		 gallerijButtons[actief].style.outline = "solid 1px rgba(218, 165, 32, 0.5)";

		 /* style inactieve elementen */	
		 for (var i=0;i<gallerijButtons.length;i++)
		 {	
			if (i!=actief)
			{
				gallerijButtons[i].style.border = "inset 4px rgba(208, 178, 255,0.55)";
				gallerijButtons[i].style.boxShadow = "0px 0px 2px 2px rgba(0,0,0,0.3)";
				gallerijButtons[i].style.outline = "solid 1px rgba(218, 165, 32, 0.5)";
			}
		 }  
	  }


	  /* controleer contact formulier op lege velden (validatie) */	

	  function formValidatie()
	  {
		  
		  /* wijs elementen toe aan variabelen */
		  
		  var vnaam = document.getElementById("voornaam");
		  var anaam = document.getElementById("achternaam");
		  var email = document.getElementById("email");
		  var bericht = document.getElementById("bericht");
		  
		  /* controleer velden */
		  
		  if (vnaam.value=="") vnaam.value="Wat is jouw voornaam?";
		  
		  if (anaam.value=="") anaam.value="Wat is jouw achternaam?";
		  
		  if (email.value=="") email.value="e-mail adres?";
		  
		  if (bericht.value=="") bericht.value="Wil je wat zeggen?";
		  
	  }


	  function createFPOverlay()
	  {
				document.write('<div style="position:absolute;width:inherit;height:inherit;display:block;pointer-events: none;filter:blur(0px);">');

				document.write('<div style="position:absolute;width:4px;height:999px;background-image:url(images/achtergrondPatroon2.png);filter:invert();opacity:0.75;display:inline-block;margin-left:-2px;border-right:dashed 1px greenyellow;box-shadow:-1px 0px 0px 0px rgba(139,53,139,0.4);border-left:1px ridge rgba(0,139,139,0.18);filter:blur(1px);"></div>');


				document.write('<div style="width:1px;height:inherit;background:rgba(0,0,0,0.4);display:inline-block;margin-left:-9px;box-shadow: -8px 0px 0px 0.0002cm rgba(240, 55, 230, 0.23),-4px 0px 0px 0.0002cm rgba(255, 255, 128, 0.17);">');
				
				document.write('<div style="width:1px;height:inherit;background:rgba(20,10,60,0.42);margin-left:12px;"></div>');	
				document.write('</div>');
				document.write('<div style="position:absolute;width:1px;height:inherit;background:rgba(0,0,0,0.4);display:inline-block;margin-left:1346px;box-shadow: 8px 0px 0px 0.0002cm rgba(240, 55, 230, 0.23),4px 0px 0px 0.0002cm rgba(255, 255, 128, 0.17);">');


				
				
				
				document.write('<div style="width:1px;height:inherit;background:rgba(20,10,60,0.42);margin-left:-12px;"></div>');

				document.write('</div>');
				document.write('</div>');




				document.write('    <div style="height:calc(var(--overlayH1) + 2px);width:4px;background:rgba(120, 15, 115, 0.27);margin-left:-513px;display:inline-block;position:absolute;filter:drop-shadow(3px 2px 0.02cm rgba(119, 90, 237, 0.86));border-left: 1px dashed rgba(229, 96, 234, 0.31);border-right:1px solid rgba(55,55,100,0.25);background-image:url(images/achtergrondPatroonSV2-BxFP.png);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) + 8px);width:1px;background:linear-gradient(rgba(0, 0, 255, 0.5),rgba(0,255,255,0.5),rgba(0, 0, 255, 0.5),rgba(0,255,255,0.5),rgba(230,130,238,0.5),rgba(0, 0, 255, 0.5));margin-left:-525px;display:inline-block;position:absolute;opacity:0.31;filter:blur(0px);"></div>');

				
				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;background:peachpuff;box-shadow:1px 0px 0px 0px darkorchid;margin-left:-517px;display:inline-block;position:absolute;opacity:0.14;"></div>');
				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;display:inline-block;position:absolute;border-left:dashed 1px darkcyan;box-shadow:-1px 0px 8px 0px rgba(153,245,230,0.1);border-right:double 3px rgba(165,150,145,0.27);opacity:0.53;margin-left:-526px;"></div>');



				document.write('<div style="position:absolute;width:inherit;height:inherit;display:block;transform:scaleX(-1);">');

				document.write('<div style="position:absolute;width:4px;height:999px;background-image:url(images/achtergrondPatroon2.png);filter:invert();opacity:0.75;display:inline-block;margin-left:-2px;border-right:dashed 1px greenyellow;box-shadow:-1px 0px 0px 0px rgba(139,53,139,0.4);border-left:1px ridge rgba(0,139,139,0.18);filter:blur(1px);"></div>');



				document.write('    <div style="height:calc(var(--overlayH1) + 2px);width:4px;background:rgba(120, 15, 115, 0.27);margin-left:-513px;display:inline-block;position:absolute;filter:drop-shadow(3px 2px 0.02cm rgba(119, 90, 237, 0.86));border-left: 1px dashed rgba(229, 96, 234, 0.31);border-right:1px solid rgba(55,55,100,0.25);background-image:url(images/achtergrondPatroonSV2-BxFP.png);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) + 8px);width:1px;background:linear-gradient(rgba(0, 0, 255, 0.5),rgba(0,255,255,0.5),rgba(0, 0, 255, 0.5),rgba(0,255,255,0.5),rgba(230,130,238,0.5),rgba(0, 0, 255, 0.5));margin-left:-525px;display:inline-block;position:absolute;opacity:0.31;filter:blur(0px);"></div>');

				
				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;background:peachpuff;box-shadow:1px 0px 0px 0px darkorchid;margin-left:-517px;display:inline-block;position:absolute;opacity:0.14;"></div>');
				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;display:inline-block;position:absolute;border-left:dashed 1px darkcyan;box-shadow:-1px 0px 8px 0px rgba(153,245,230,0.1);border-right:double 3px rgba(165,150,145,0.27);opacity:0.53;margin-left:-526px;"></div>');



				document.write('</div>');

	  }




	


	  function createOverlay(bl_U, bl_D, sdw_C, bl_I)
	  {
	
				document.write('<div style="position:absolute;width:inherit;height:inherit;display:block;pointer-events:none;margin-top:-2px;z-index:0;">');


				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(64, 80, 153, 0.382);border-right:dashed 1px rgba(118,60,255,1);border-left:dashed 1px rgba(0,0,139,0.1);box-shadow:-1px 0px 0px 0px rgba(139,139,139,0.36);display:inline-block;margin-left:-9px;">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(50,70,230,0.23);margin-left:12px;margin-top:50px;border-right:1px inset rgba(0,139,139,0.5);box-shadow:1px 0px 1px 1px rgba(185, 107, 247,0.3);border-left:1px outset rgba(107,142,35,0.66);filter:drop-shadow(-1px 0px 0px rgba(0,0,0,0.1));"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1px;height:var(--overlayH2);background:rgba(120, 156, 255, 0.33);box-shadow:-1px 0px 3px 0px rgba(153, 50, 204,0.33);margin-left:-15px;margin-top:50px;display:inline-block;position:absolute;"></div>');
				document.write('    <div style="height:1px;width:504px;background:rgba(120, 156, 255, 0.25);margin-left:-506px;margin-top:-5px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255,0.67));border-top: 1px dashed rgba(255, 255, 255, 0.091);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) - 50px);width:4px;background:rgba(120, 15, 115, 0.27);margin-top:50px;margin-left:-513px;display:inline-block;position:absolute;filter:drop-shadow(3px 2px 0.02cm rgba(119, 90, 237, 0.86));border-left: 1px dashed rgba(229, 69, 234, 0.31);border-right:1px solid rgba(55,55,160,0.25);background-image:url(images/achtergrondPatroonSV2-Bx.png);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;background:linear-gradient(rgba(0, 0, 255, 0.5),rgba(0,255,255,0.5),rgba(0, 0, 255, 0.5),rgba(0,255,255,0.5),rgba(230,130,238,0.5),rgba(0, 0, 255, 0.5));margin-left:-525px;display:inline-block;position:absolute;opacity:0.31;filter:blur(0px);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;background:peachpuff;box-shadow:1px 0px 0px 0px darkorchid;margin-left:-517px;display:inline-block;position:absolute;opacity:0.14;"></div>');
				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;display:inline-block;position:absolute;border-left:dashed 1px darkcyan;box-shadow:-1px 0px 8px 0px rgba(153,245,230,0.1);border-right:double 3px rgba(165,150,145,0.27);opacity:0.53;margin-left:-526px;"></div>');
				
				document.write('    <div style="height:calc(var(--overlayH1) - 60px);width:2px;background-image:url(images/bgR.png);margin-top:59px;margin-left:2px;display:inline-block;position:absolute;filter:invert();opacity:0.44;></div>');


				



				document.write('<div style="width:100px;height:47px;background:linear-gradient(to left,rgba(128, 0, 128, 0.8),rgba(238, 130, 238,0.6),rgba(128, 128, 128,0.4),rgba(0, 255, 255,0.75));position:absolute;display:inline-block;margin-left:-513px;opacity:0.05;border-right:4px dashed black;filter:drop-shadow(1px 1px 1px rgba(255, 192, 203,0.8));"></div>');
				document.write('<div style="width:100px;height:47px;position:absolute;display:inline-block;margin-left:-513px;opacity:1;background-image:url(images/aPb2C.png);"></div>');

				document.write('<div style="width:2px;height:47px;background:rgba(235, 206, 250,0.3);position:absolute;display:inline-block;margin-left:-408px;opacity:0.3;border-right:inset 2px rgba(128,64,196,0.65);filter:drop-shadow(-1px 1px 1px rgba(0,0,255,1));"></div>');
				document.write('<div style="width:90px;height:28px;background:rgba(0, 0, 0,0.1);position:absolute;display:inline-block;margin-left:-505px;margin-top:10px;opacity:0.32;"></div>');



			
				document.write('    <div style="height:1px;width:492px;background:rgba(170, 116, 255, 0.3);margin-left:-508px;margin-top:48px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255, 0.67));border-top: 1px dashed rgba(255, 155, 25, 0.25);border-bottom:dashed 1px rgba(180,40,255,0.6);"></div>');
			
			    document.write('    <div style="height:1px;width:498px;background:#4259b7;margin-left:-508px;margin-top:-2px;display:inline-block;position:absolute;border-top:dashed 1px rgba(255,0,60,0.42);"></div>');
				document.write('    <div style="height:1px;width:498px;background:#365ca7;margin-left:-508px;margin-top:-1px;display:inline-block;position:absolute;border-bottom:dashed 1px rgba(0,255,255,0.15);"></div>');
			
				document.write('    <div style="height:2px;width:492px;background:rgba(64, 150, 255, 0.33);margin-left:-510px;margin-top:50px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 93, 0.24));border-top: 1px dashed rgba(44, 94, 93, var(--'+bl_I+'));opacity:var(--'+bl_D+');filter:blur(1px);"></div>');
				
				document.write('    <div style="height:2px;width:492px;background:rgba(64, 150, 255, 1);margin-left:-506px;margin-top:-10px;display:inline-block;position:absolute;background:red;background-image:linear-gradient(darkorchid,peachpuff);filter:blur(1px);opacity:0.48;border-top:dashed 1px black;"></div>');
				document.write('    <div style="height:1px;width:492px;margin-left:-506px;margin-top:-8px;display:inline-block;position:absolute;background:darkcyan;opacity:1;box-shadow:0px -1px 2px 1px rgba(255,0,255,0.2);"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(60, 40, 20, 0.23);margin-left:-510px;margin-top:-8px;transform:scaleY(-1);display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 193, 0.87));box-shadow:0px 1px 0px 0px rgba(255, 192, 203,0.2);border-top: 1px dashed rgba(194, 64, 93,var(--'+bl_I+'));opacity:var(--'+bl_U+');"></div>');
			
				document.write('    <div style="height:2px;width:492px;background:rgba(16, 64, 128, 0.25);margin-left:-507px;margin-top:53px;display:inline-block;position:absolute;border-top:dashed 1px rgba(127,60,255,0.6);border-bottom:dashed 1px rgba(0,255,255,0.3);"></div>');
				document.write('    <div style="height:1px;width:492px;background:rgba(16, 64, 128, 0.16);margin-left:-507px;margin-top:-8px;display:inline-block;position:absolute;border-top:dashed 1px rgba(25,19,55,0.15);border-bottom:dashed 1px rgba(0,255,255,0.25);"></div>');
				document.write('    <div style="height:2px;width:492px;background:darkblue;margin-left:-507px;margin-top:58px;display:inline-block;position:absolute;opacity:0.4;filter:blur(1px);"></div>');
		    	document.write('    <div style="height:3px;width:492px;background:rgba(216, 117, 240,0.47);box-shadow:0px -1px 2px 0px darkmagenta;border-top:dashed rgba(255,0,0,0.2) 1px;border-bottom:dashed 1px black;margin-left:-507px;margin-top:58px;display:inline-block;position:absolute;opacity:0.4;filter:blur(1px);"></div>');

				document.write(' <div style="height:57px;width:1px;position:absolute;display:inline-block;background-image:url(images/bcRt.png);z-index:1;border-left:double 3px peachpuff;margin-left:2px;opacity:0.25;box-shadow:1px 0px 0px 0px rgba(173, 255, 47,0.73);margin-top:3px;transform:scaleX(1);filter:invert();"></div> ');
				document.write(' <div style="height:57px;width:2px;position:absolute;display:inline-block;background-image:url(images/bcRt.png);opacity:0.55;margin-left:3px;margin-top:3px;transform:scaleX(1);filter:invert()"></div>');
			


			
				
				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(41, 100, 153, 0.882);display:inline-block;margin-right:-9px;transform:scaleX(-1);">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(200,50,100,0.23);margin-right:12px;margin-top:50px;"></div>');
				document.write('    </div>');


				document.write('</div>');

				document.write('<div style="position:absolute;width:inherit;height:inherit;display:block;pointer-events:none;margin-top:-2px;transform:scaleX(-1);z-index:0;">');


				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(64, 80, 153, 0.382);border-right:dashed 1px rgba(118,60,255,1);border-left:dashed 1px rgba(0,0,139,0.1);box-shadow:-1px 0px 0px 0px rgba(139,139,139,0.36);display:inline-block;margin-left:-9px;">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(50,70,230,0.23);margin-left:12px;margin-top:50px;border-right:1px inset rgba(0,139,139,0.5);box-shadow:1px 0px 1px 1px rgba(185, 107, 247,0.3);border-left:1px outset rgba(107,142,35,0.66);filter:drop-shadow(-1px 0px 0px rgba(0,0,0,0.1));"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1px;height:var(--overlayH2);background:rgba(120, 156, 255, 0.33);box-shadow:-1px 0px 3px 0px rgba(153, 50, 204,0.33);margin-left:-15px;margin-top:50px;display:inline-block;position:absolute;"></div>');
				document.write('    <div style="height:1px;width:504px;background:rgba(120, 156, 255, 0.25);margin-left:-506px;margin-top:-5px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255,0.67));border-top: 1px dashed rgba(255, 255, 255, 0.091);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) - 50px);width:4px;background:rgba(120, 15, 115, 0.27);margin-top:50px;margin-left:-513px;display:inline-block;position:absolute;filter:drop-shadow(3px 2px 0.02cm rgba(119, 90, 237, 0.86));border-left: 1px dashed rgba(229, 69, 234, 0.31);border-right:1px solid rgba(55,55,160,0.25);background-image:url(images/achtergrondPatroonSV2-Bx.png);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;background:linear-gradient(rgba(0, 0, 255, 0.5),rgba(0,255,255,0.5),rgba(0, 0, 255, 0.5),rgba(0,255,255,0.5),rgba(230,130,238,0.5),rgba(0, 0, 255, 0.5));margin-left:-525px;display:inline-block;position:absolute;opacity:0.31;filter:blur(0px);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;background:peachpuff;box-shadow:1px 0px 0px 0px darkorchid;margin-left:-517px;display:inline-block;position:absolute;opacity:0.14;"></div>');
				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;display:inline-block;position:absolute;border-left:dashed 1px darkcyan;box-shadow:-1px 0px 8px 0px rgba(153,245,230,0.1);border-right:double 3px rgba(165,150,145,0.27);opacity:0.53;margin-left:-526px;"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) - 60px);width:2px;background-image:url(images/bgR.png);margin-top:59px;margin-left:2px;display:inline-block;position:absolute;filter:invert();opacity:0.44;></div>');



				document.write('<div style="width:100px;height:47px;background:linear-gradient(to left,rgba(128, 0, 128, 0.8),rgba(238, 130, 238,0.6),rgba(128, 128, 128,0.4),rgba(0, 255, 255,0.75));position:absolute;display:inline-block;margin-left:-513px;opacity:0.05;border-right:4px dashed black;filter:drop-shadow(1px 1px 1px rgba(255, 192, 203,0.8));"></div>');
				document.write('<div style="width:100px;height:47px;position:absolute;display:inline-block;margin-left:-513px;opacity:1;background-image:url(images/aPb2C.png);"></div>');

				document.write('<div style="width:2px;height:47px;background:rgba(235, 206, 250,0.3);position:absolute;display:inline-block;margin-left:-408px;opacity:0.3;border-right:inset 2px rgba(128,64,196,0.65);filter:drop-shadow(-1px 1px 1px rgba(0,0,255,1));"></div>');
				document.write('<div style="width:90px;height:28px;background:rgba(0, 0, 0,0.1);position:absolute;display:inline-block;margin-left:-505px;margin-top:10px;opacity:0.32;"></div>');



			
				document.write('    <div style="height:1px;width:492px;background:rgba(170, 116, 255, 0.3);margin-left:-508px;margin-top:48px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255, 0.67));border-top: 1px dashed rgba(255, 155, 25, 0.25);border-bottom:dashed 1px rgba(180,40,255,0.6);"></div>');
			
			    document.write('    <div style="height:1px;width:498px;background:#4259b7;margin-left:-508px;margin-top:-2px;display:inline-block;position:absolute;border-top:dashed 1px rgba(255,0,60,0.42);"></div>');
				document.write('    <div style="height:1px;width:498px;background:#365ca7;margin-left:-508px;margin-top:-1px;display:inline-block;position:absolute;border-bottom:dashed 1px rgba(0,255,255,0.15);"></div>');
			
				document.write('    <div style="height:2px;width:492px;background:rgba(64, 150, 255, 0.33);margin-left:-510px;margin-top:50px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 93, 0.24));border-top: 1px dashed rgba(44, 94, 93, var(--'+bl_I+'));opacity:var(--'+bl_D+');filter:blur(1px);"></div>');
				
				document.write('    <div style="height:2px;width:492px;background:rgba(64, 150, 255, 1);margin-left:-506px;margin-top:-10px;display:inline-block;position:absolute;background:red;background-image:linear-gradient(darkorchid,peachpuff);filter:blur(1px);opacity:0.48;border-top:dashed 1px black;"></div>');
				document.write('    <div style="height:1px;width:492px;margin-left:-506px;margin-top:-8px;display:inline-block;position:absolute;background:darkcyan;opacity:1;box-shadow:0px -1px 2px 1px rgba(255,0,255,0.2);"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(60, 40, 20, 0.23);margin-left:-510px;margin-top:-8px;transform:scaleY(-1);display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 193, 0.87));box-shadow:0px 1px 0px 0px rgba(255, 192, 203,0.2);border-top: 1px dashed rgba(194, 64, 93,var(--'+bl_I+'));opacity:var(--'+bl_U+');"></div>');
			
				document.write('    <div style="height:2px;width:492px;background:rgba(16, 64, 128, 0.25);margin-left:-507px;margin-top:53px;display:inline-block;position:absolute;border-top:dashed 1px rgba(127,60,255,0.6);border-bottom:dashed 1px rgba(0,255,255,0.3);"></div>');
				document.write('    <div style="height:1px;width:492px;background:rgba(16, 64, 128, 0.16);margin-left:-507px;margin-top:-8px;display:inline-block;position:absolute;border-top:dashed 1px rgba(25,19,55,0.15);border-bottom:dashed 1px rgba(0,255,255,0.25);"></div>');
				document.write('    <div style="height:2px;width:492px;background:darkblue;margin-left:-507px;margin-top:58px;display:inline-block;position:absolute;opacity:0.4;filter:blur(1px);"></div>');
		    	document.write('    <div style="height:3px;width:492px;background:rgba(216, 117, 240,0.47);box-shadow:0px -1px 2px 0px darkmagenta;border-top:dashed rgba(255,0,0,0.2) 1px;border-bottom:dashed 1px black;margin-left:-507px;margin-top:58px;display:inline-block;position:absolute;opacity:0.4;filter:blur(1px);"></div>');

			
				document.write(' <div style="height:57px;width:1px;position:absolute;display:inline-block;background-image:url(images/bcRt.png);z-index:1;border-left:double 3px peachpuff;margin-left:2px;opacity:0.25;box-shadow:1px 0px 0px 0px rgba(173, 255, 47,0.73);margin-top:3px;transform:scaleX(1);filter:invert();"></div> ');
				document.write(' <div style="height:57px;width:2px;position:absolute;display:inline-block;background-image:url(images/bcRt.png);opacity:0.55;margin-left:3px;transform:scaleX(1);filter:invert();margin-top:3px;"></div>');


				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(41, 100, 153, 0.882);display:inline-block;margin-right:-9px;transform:scaleX(-1);">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(200,50,100,0.23);margin-right:12px;margin-top:50px;"></div>');
				document.write('    </div>');


				document.write('</div>');




				document.write('<div style="margin-top:-4px;width:1323px;height:4px;opacity:0.2;background-image:url(images/Bl.png);pointer-events:none;position:absolute;z-index:1;filter:drop-shadow(1px 6px 1px rgba(85, 237, 248, 1));"></div>');
				document.write('<div style="margin-left:4px;margin-top:2px;width:1322px;height:40px;background-image:url(images/achtergrondPatroonSV2.png);pointer-events:none;position:absolute;"></div>');

				document.write('<div style="margin-top:-3px;pointer-events:none;">');
				document.write('    <div style="position:absolute;width:3px;height:var(--overlayH3);background:linear-gradient(cyan,magenta,cyan,magenta,cyan);opacity:0.15;">');
				document.write('        <div style="width:8px;height:100%;background-image:url(images/bS.png);margin-left:-6px;"></div>');
				document.write('    </div>');
				document.write('    <div style="position:absolute;width:3px;height:var(--overlayH3);background:linear-gradient(cyan,magenta,cyan,magenta,cyan);opacity:0.15;float:left;margin-left:1327px;transform:scaleX(-1);">');
				document.write('        <div style="width:8px;height:100%;background-image:url(images/bS.png);margin-left:-6px;"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.31);margin-top:5px;margin-left:4px;">');
				document.write('        <div style="width:1323px;height:6px;background-color: rgba(255,255,255,0.13);position:absolute;margin-top:5px;"></div>');
				document.write('        <div style="width:1323px;height:2px;background-color: rgba(30, 196, 160, 0.424);position:absolute;margin-top:-2px;"></div>');
				document.write('        <div style="width:1323px;height:1px;background-color: rgba(61, 136, 180, 0.224);position:absolute;margin-top:-3px;"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.13);margin-left:4px;">');
				document.write('        <div style="width:1323px;height:2px;background-color: rgba(255,255,255,0.185);position:absolute;margin-top:-2px;"></div>');
				document.write('        <div style="width:1323px;height:4px;background-color: rgba(255,255,255,0.135);position:absolute;margin-top:8px;"></div>');
				document.write('        <div style="width:1323px;height:1px;background-color: rgba(0,0,0,0.2);position:absolute;margin-top:2px;"></div>');
				document.write('    </div>');
				document.write('    <div style="transform: scaleY(-1);opacity:0.5;position:absolute;margin-top:-17px;margin-left:4px;">');
				document.write('        <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.27);margin-top:5px;">');
				document.write('            <div style="width:1323px;height:2px;background-color: rgba(255, 255, 255, 0.17);position:absolute;margin-top:5px;"></div>');
				document.write('            <div style="width:1323px;height:2px;background-color: rgba(87, 230, 255, 0.350);position:absolute;margin-top:-3px;box-shadow: 0px 10px 8px #ffffff5e, 0px -10px 5px var(--'+sdw_C+');"></div>');
				document.write('        </div>');
				document.write('        <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.15);">');
				document.write('            <div style="width:1323px;height:1px;background-color: rgba(255, 255, 255, 0.25);position:absolute;margin-top:-2px;"></div>');
				document.write('            <div style="width:1323px;height:1px;background-color: rgba(255,255,255,0.365);position:absolute;margin-top:8px;"></div>');
				document.write('            <div style="width:1323px;height:3px;background-color: rgba(0,0,0,0.2);position:absolute;margin-top:2px;"></div>');
				document.write('        </div>');
				document.write('    </div>');
				document.write('</div>');
	  }


	  

	
	  function createBorderOverlay(wrapperH)
	  {
		document.write('<div style="position:absolute;width:500px; height:100%;margin-top:calc(var(--'+wrapperH+') - 80px);">');
		document.write('<div style="position: relative; height:100%;filter:drop-shadow(1px 1px 1px rgba(1, 17, 161, 0.699));">');
		document.write('<img src="images/pointer.png" style="opacity:0.73;position:absolute;margin-left:415px;">');
		document.write('<img src="images/pointer.png" style="opacity:0.65;position:absolute;margin-left:415px;filter:blur(1px);">');
		document.write('<img src="images/visje.png" style="width:35px;height:35px;position:absolute;margin-left:375px;margin-top:-35px;transform:rotate(45deg);opacity:var(--visjeOP1);filter:drop-shadow(1px 1px 1px rgb(0, 0, 0,var(--vis1SHD)));filter:hue-rotate(var(--vis1HUE));">');
		document.write('<img src="images/visje.png" style="width:37px;height:37px;position:absolute;margin-left:340px;margin-top:-80px;transform:rotate(65deg);opacity:var(--visjeOP2);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis2SHD)));filter:hue-rotate(var(--vis2HUE));">');
		document.write('<img src="images/visje.png" style="width:42px;height:42px;position:absolute;margin-left:310px;margin-top:-130px;transform:rotate(70deg);opacity:var(--visjeOP3);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis3SHD)));filter:hue-rotate(var(--vis3HUE));">');
		document.write('<img src="images/visje.png" style="width:45px;height:45px;position:absolute;margin-left:290px;margin-top:-180px;transform:rotate(67deg);opacity:var(--visjeOP4);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis4SHD)));filter:hue-rotate(var(--vis4HUE));">');
		document.write('<img src="images/visje.png" style="width:44px;height:44px;position:absolute;margin-left:270px;margin-top:-230px;transform:rotate(77deg);opacity:var(--visjeOP5);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis5SHD)));filter:hue-rotate(var(--vis5HUE));">');
		document.write('<img src="images/visje.png" style="width:43px;height:43px;position:absolute;margin-left:250px;margin-top:-280px;transform:rotate(55deg);opacity:var(--visjeOP6);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis6SHD)));filter:hue-rotate(var(--vis6HUE));">');
		document.write('<img src="images/visje.png" style="width:42px;height:42px;position:absolute;margin-left:220px;margin-top:-330px;transform:rotate(40deg);opacity:var(--visjeOP7);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis7SHD)));filter:hue-rotate(var(--vis7HUE));">');
		document.write('<img src="images/visje.png" style="width:41px;height:41px;position:absolute;margin-left:175px;margin-top:-350px;transform:rotate(15deg);opacity:var(--visjeOP8);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis8SHD)));filter:hue-rotate(var(--vis8HUE));">');
		document.write('<img src="images/visje.png" style="width:40px;height:40px;position:absolute;margin-left:120px;margin-top:-345px;transform:rotate(-25deg);opacity:var(--visjeOP9);filter:drop-shadow(1px 1px 1px rgb(0, 0, 0,var(--vis9SHD)));filter:hue-rotate(var(--vis9HUE));">');
		document.write('<img src="images/visje.png" style="width:35px;height:35px;position:absolute;margin-left:75px;margin-top:-310px;transform:rotate(-55deg);opacity:var(--visjeOP10);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis10SHD)));filter:hue-rotate(var(--vis10HUE));">');
		document.write('<img src="images/visje.png" style="width:28px;height:28px;position:absolute;margin-left:60px;margin-top:-260px;transform:rotate(-70deg);opacity:var(--visjeOP11);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis11SHD)));filter:hue-rotate(var(--vis11HUE));">');
		document.write('<img src="images/visje.png" style="width:21px;height:21px;position:absolute;margin-left:55px;margin-top:-215px;transform:rotate(-105deg);opacity:var(--visjeOP12);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis12SHD)));filter:hue-rotate(var(--vis12HUE));">');
		document.write('</div>');
		document.write('</div>');
	
		document.write('<div style="position:absolute;width:500px; height:100%;margin-top:calc(var(--'+wrapperH+') - 80px);transform:scaleX(-1);margin-left:1865px;">');
		document.write('<div style="position: relative; height:100%;filter:drop-shadow(1px 1px 1px rgba(1, 17, 161, 0.699));">');
		document.write('<img src="images/pointer.png" style="opacity:0.73;position:absolute;margin-left:430px;">');
		document.write('<img src="images/pointer.png" style="opacity:0.65;position:absolute;margin-left:430px;filter:blur(1px);">');
		document.write('<img src="images/visje.png" style="width:35px;height:35px;position:absolute;margin-left:390px;margin-top:-35px;transform:rotate(45deg);opacity:var(--visjeOP1);filter:drop-shadow(1px 1px 1px rgb(0, 0, 0,var(--vis1SHD)));filter:hue-rotate(var(--vis1HUE));">');
		document.write('<img src="images/visje.png" style="width:37px;height:37px;position:absolute;margin-left:355px;margin-top:-80px;transform:rotate(65deg);opacity:var(--visjeOP2);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis2SHD)));filter:hue-rotate(var(--vis2HUE));">');
		document.write('<img src="images/visje.png" style="width:42px;height:42px;position:absolute;margin-left:325px;margin-top:-130px;transform:rotate(70deg);opacity:var(--visjeOP3);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis3SHD)));filter:hue-rotate(var(--vis3HUE));">');
		document.write('<img src="images/visje.png" style="width:45px;height:45px;position:absolute;margin-left:305px;margin-top:-180px;transform:rotate(67deg);opacity:var(--visjeOP4);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis4SHD)));filter:hue-rotate(var(--vis4HUE));">');
		document.write('<img src="images/visje.png" style="width:44px;height:44px;position:absolute;margin-left:285px;margin-top:-230px;transform:rotate(77deg);opacity:var(--visjeOP5);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis5SHD)));filter:hue-rotate(var(--vis5HUE));">');
		document.write('<img src="images/visje.png" style="width:43px;height:43px;position:absolute;margin-left:265px;margin-top:-280px;transform:rotate(55deg);opacity:var(--visjeOP6);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis6SHD)));filter:hue-rotate(var(--vis6HUE));">');
		document.write('<img src="images/visje.png" style="width:42px;height:42px;position:absolute;margin-left:235px;margin-top:-330px;transform:rotate(40deg);opacity:var(--visjeOP7);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis7SHD)));filter:hue-rotate(var(--vis7HUE));">');
		document.write('<img src="images/visje.png" style="width:41px;height:41px;position:absolute;margin-left:190px;margin-top:-350px;transform:rotate(15deg);opacity:var(--visjeOP8);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis8SHD)));filter:hue-rotate(var(--vis8HUE));">');
		document.write('<img src="images/visje.png" style="width:40px;height:40px;position:absolute;margin-left:135px;margin-top:-345px;transform:rotate(-25deg);opacity:var(--visjeOP9);filter:drop-shadow(1px 1px 1px rgb(0, 0, 0,var(--vis9SHD)));filter:hue-rotate(var(--vis9HUE));">');
		document.write('<img src="images/visje.png" style="width:35px;height:35px;position:absolute;margin-left:90px;margin-top:-310px;transform:rotate(-55deg);opacity:var(--visjeOP10);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis10SHD)));filter:hue-rotate(var(--vis10HUE));">');
		document.write('<img src="images/visje.png" style="width:28px;height:28px;position:absolute;margin-left:75px;margin-top:-260px;transform:rotate(-70deg);opacity:var(--visjeOP11);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis11SHD)));filter:hue-rotate(var(--vis11HUE));">');
		document.write('<img src="images/visje.png" style="width:21px;height:21px;position:absolute;margin-left:70px;margin-top:-215px;transform:rotate(-105deg);opacity:var(--visjeOP12);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis12SHD)));filter:hue-rotate(var(--vis12HUE));">');
	
		document.write('</div>');
		document.write('</div>');


	  }





	  function borderDetail()
	  {
		
		document.write('<div style="width:1342px;height:1px;background:rgb(0, 255, 255);display:inline-block;position:absolute;margin-top:-6px;margin-left:-6px;opacity:0.21;border-bottom:1px dashed darksalmon;transform:scaleY(1);pointer-events:none;"></div>');
		document.write('<div style="width:1323px;height:1px;display:inline-block;position:absolute;margin-top:-10px;margin-left:4px;background:rgba(110,90,170,0.4);border-bottom:1px dashed rgba(75,200,125,0.15);box-shadow:0px 2px 0px 0px rgba(243,183,55,0.1);pointer-events:none;"></div>')
		document.write('<div style="width:1324px;height:1px;background:rgb(0, 255, 255);display:inline-block;position:absolute;margin-top:53px;margin-left:3px;opacity:0.2;border-bottom:3px double rgb(30, 24, 68);pointer-events:none;"></div>');
		document.write('<div style="width:1324px;height:1px;display:inline-block;position:absolute;margin-top:51px;margin-left:3px;opacity:0.8;border-bottom:1px dashed rgba(48, 47, 95,0.72);filter:blur(1px);border-top:double 3px rgba(160,139,139,0.4);pointer-events:none;;"></div>');
		document.write('<div style="width:1324px;height:3px;background:rgb(0, 119, 255);display:inline-block;position:absolute;margin-top:-10px;margin-left:3px;opacity:0.35;pointer-events:none;;"></div>');
		document.write('<div style="width:1324px;height:1px;background:rgb(102, 116, 197);display:inline-block;position:absolute;margin-top:-9px;margin-left:3px;opacity:0.8;pointer-events:none;;"></div>');
		document.write('<div style="width:1324px;height:1px;background:peachpuff;display:inline-block;position:absolute;margin-top:-11px;margin-left:3px;opacity:0.3;filter:blur(1px);pointer-events:none;"></div>');
		document.write('<div style="width:1324px;height:1px;background:cyan;border-top:1px dashed darkorchid;display:inline-block;position:absolute;margin-top:58px;margin-left:3px;opacity:0.16;pointer-events:none;"></div>');
		document.write('<div style="width:1324px;height:0px;border-bottom:2px ridge rgba(143,0,255);margin-top:56px;margin-left:3px;position:absolute;pointer-events:none;opacity:0.53;"></div>');

		document.write('<div style="display:inline-block;position:absolute;width:5px;height:137px;background:linear-gradient(peachpuff,darkmagenta);margin-left:-513px;margin-top:-150px;opacity:0.12;filter:blur(4px);pointer-events:none;"></div>');
		document.write('<div style="display:inline-block;position:absolute;width:5px;height:137px;background:linear-gradient(darkmagenta,peachpuff);margin-left:-513px;margin-top:50px;opacity:0.12;filter:blur(2px);pointer-events:none;"></div>')

		document.write('<div style="display:inline-block;position:absolute;width:5px;height:137px;background:linear-gradient(peachpuff,darkmagenta);margin-left:1837px;margin-top:-150px;opacity:0.12;filter:blur(4px);pointer-events:none;"></div>');
		document.write('<div style="display:inline-block;position:absolute;width:5px;height:137px;background:linear-gradient(darkmagenta,peachpuff);margin-left:1837px;margin-top:50px;opacity:0.12;filter:blur(2px);pointer-events:none;"></div>')

		document.write('<div style="width:1324px;height:5px;display:inline-block;margin-left:4px;margin-top:49px;position:absolute;filter:drop-shadow(0px -3px 0px orange);box-shadow:0px 1px 0px 0px darkorchid;background-image:url(images/bdrPtr.png);pointer-events:none;opacity:0.25;"></div>');


		document.write('<div style="width:1323px;height:1px;display:inline-block;position:absolute;margin-top:-9px;margin-left:4px;background:orange;opacity:0.09;pointer-events:none;"></div>')


	  }



	