




function showPracTrial (whichImage) {
	trialRunning = true;
 
	$(document).ready(function(){ 
	setTimeout(function() {
	
	$('#Fixation').hide()
	$('#Prac' + whichImage).show();
		setTimeout(function() {
			$('#Prac' + whichImage).hide();
			$('#maskDiv').show();
			}, pracTargTime); //targTime is a variable for how long the target should be displayed. 

			// document.getElementById('#facePic' + whichImage).class == 'faceTrialImage'

		$(document).ready(function(){
			setTimeout(function() {
				$('#maskDiv').hide();
				$('#Fixation').show();
				if (document.getElementById('pracProbe' + whichImage).className == 'responseRight'){
					document.getElementById('pracTargPic' + whichImage).className = 'responseLeft';

				}
				if (document.getElementById('pracProbe' + whichImage).className == 'responseLeft') {
					document.getElementById('pracTargPic' + whichImage).className = 'responseRight';
				}
				// console.log (document.getElementById('pracTargPic' + whichImage).className)
			

			}, (maskTime + pracTargTime));

			setTimeout(function() {

				startProbeTime = new Date();
				$('#pracResponse' + whichImage).show();
				$('#Prac' + whichImage).show();
				trialRunning = false;
				


			}, (prac[pracIndex].delay + maskTime + pracTargTime))

			 


		})



		$(document).bind('keydown.keyCheck', function(event) {// 'keydown' is a command, but 'keyCheck' is a name I made up so I can control binding. 
			if (event.which == 70 & trialRunning == false) {
				endProbeTime = new Date();
				$(document).unbind('keydown.keyCheck');
			$('#Prac' + whichImage).append("<input type = 'hidden' name = 'prac" + whichImage + "Resp' value = '0' id = 'pracResp" + whichImage + "'>")
		
				endPracTrial(whichImage);
			}

			if (event.which == 74 & trialRunning == false) {
				endProbeTime = new Date();
				$(document).unbind('keydown.keyCheck');
				$('#Prac' + whichImage).append("<input type = 'hidden' name = 'prac" + whichImage + "Resp' value = '1' id = 'pracResp" + whichImage + "'>")
				
				endPracTrial(whichImage);


			}



		
	}); //listen for clicks only during trial. 
	},500);
	})
	}

function endPracTrial(whichImage) {
	var curTime = new Date();

	 		responseTime = endProbeTime - startProbeTime
			$('#Prac' + whichImage).append("<input type = 'hidden' name = 'Prac" + whichImage + "rt' value = '" + responseTime + "' id = 'rt" + whichImage + "'>")
			$('#Prac' + whichImage).append("<input type = 'hidden' name = 'Prac" + whichImage + "stim' value = '" + prac[pracIndex].stim + 
				"' id = 'stim" + whichImage + "'>")

			$('#Prac' + whichImage).append("<input type = 'hidden' name = 'Prac" + whichImage + 
				"rotate' value = '"+ prac[pracIndex].rotate +"' id = 'rotate" + whichImage + "'>")

			$('#Prac' + whichImage).append("<input type = 'hidden' name = 'Prac" + whichImage + "set' value = '"+ prac[pracIndex].stimSet +"' id = 'stimSet" + whichImage + "'>")
			$('#Prac' + whichImage).append("<input type = 'hidden' name = 'Prac" + whichImage + "delay' value = '"+ prac[pracIndex].delay +"' id = 'delay" + whichImage + "'>")
			$('#Prac' + whichImage).append("<input type = 'hidden' name = 'Prac" + whichImage + "targSide' value = '"+ prac[pracIndex].targetSide +"' id = 'targSide" + whichImage + "'>")
			$('#Prac' + whichImage).append("<input type = 'hidden' name = 'Prac" + whichImage + "targSelect' value = '"+ prac[pracIndex].targSelect +"' id = 'targSelect" + whichImage + "'>")

	$('#pracResponse' + whichImage).hide();
	$('#Prac' + whichImage).hide()
	curPrac++; /*adding 1 to curTrial*/
	pracIndex++;
	if (curPrac > nPracs) {
		$('#instructions3').hide();
		$('#container').hide();
		$('#instructions2').show();
		$('#startExperiment').show();
		$('#startExperimentButton').show();
		// $('#container').show();
	} else {
		showPracTrial(curPrac); /*calling a function to show our image*/
		startTrialTime = new Date();
	}

;
}