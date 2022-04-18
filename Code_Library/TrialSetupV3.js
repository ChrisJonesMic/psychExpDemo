//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

var faces = makeArray(1,32);
var trial = []
var extraRotate = [90,270];
extraRotate = shuffle(extraRotate)
var rotateAng = [0,0,0,0,0,0,0,0,0,270,270,270,270,90,90,90,90,extraRotate[0]]
var leftRight = repmat([0,1],9) //0 = left, 1 = right, 9 reps becauase 18 trials per condition. 
var targAB = repmat(['a','b'],9);
var stimNum = makeArray(1,36);
var delayShort = 0;
var delayLong = 5000;
var trialNum = 1;
var r = 0;
var targetSide = [];
var respSide = [];
var stimIndx = 0;

// stimOrder = shuffle(stimOrder)
targAB = shuffle(targAB); //making it so the target is randomly determined. Can't precisely counterbalance because of the 3 90 and 3 270
leftRight = shuffle(leftRight);//making it so target side is randomly determined 
stimNum = shuffle(stimNum) //shuffling stim order
for(i = 0; i < 18; i++) {
	trialNum = i + 1;

	if (leftRight[r] == 0) { //left
		targetSide = 0
		respSide = 1
	} 

	if (leftRight[r] == 1) { //right
		targetSide = 1
		respSide = 0
	}

	if (targAB[r] == 'a') { //left
		targSelect = 'a'
		respSelect = 'b'
	} 

	if (targAB[r] == 'b') { //right
		targSelect = 'b'
		respSelect = 'a'
	}

	trial[i] = {
	// id: 'trial' + trialNum,
	stim: 'Face',
	delay: delayShort,
	rotate: rotateAng[r],
	targetSide: targetSide,
	respSide: respSide,
	targSelect: targSelect,
	respSelect: respSelect,
	stimSet: stimNum[stimIndx]


};
r++
stimIndx ++


}

r = 0;
targAB = shuffle(targAB); //making it so the target is randomly determined. Can't precisely counterbalance because of the 3 90 and 3 270
leftRight = shuffle(leftRight);//making it so target side is randomly determined 

for (i = 18; i<36; i++) {

	trialNum = i + 1;
	if (leftRight[r] == 0) { //left
		targetSide = 0
		respSide = 1
	} 

	if (leftRight[r] == 1) { //right
		targetSide = 1
		respSide = 0
	}

	if (targAB[r] == 'a') { //left
		targSelect = 'a'
		respSelect = 'b'
	} 

	if (targAB[r] == 'b') { //right
		targSelect = 'b'
		respSelect = 'a'
	}

	trial[i] = {
	// id: 'trial' + trialNum,
	stim: 'Face',
	delay: delayLong,
	rotate: rotateAng[r],
	targetSide: targetSide,
	respSide: respSide,
	targSelect: targSelect,
	respSelect: respSelect,
	stimSet: stimNum[stimIndx]

};
r++
stimIndx ++



}

r = 0;
stimIndx = 0; //index of stimset (i.e. face1, face2, face3, etc)
targAB = shuffle(targAB); //making it so the target is randomly determined. Can't precisely counterbalance because of the 3 90 and 3 270
leftRight = shuffle(leftRight);//making it so target side is randomly determined 
stimNum = shuffle(stimNum) //shuffling stim order

for (i = 36; i<54; i++) {

	trialNum = i + 1;
	if (leftRight[r] == 0) { //left
		targetSide = 0
		respSide = 1
	} 

	if (leftRight[r] == 1) { //right
		targetSide = 1
		respSide = 0
	}

	if (targAB[r] == 'a') { //left
		targSelect = 'a'
		respSelect = 'b'
	} 

	if (targAB[r] == 'b') { //right
		targSelect = 'b'
		respSelect = 'a'
	}

	trial[i] = {
	// id: 'trial' + trialNum,
	stim: 'Object',
	delay: delayShort,
	rotate: rotateAng[r],
	targetSide: targetSide,
	respSide: respSide,
	targSelect: targSelect,
	respSelect: respSelect,
	stimSet: stimNum[stimIndx]

};
r++
stimIndx ++


}

r = 0;
targAB = shuffle(targAB); //making it so the target is randomly determined. Can't precisely counterbalance because of the 3 90 and 3 270
leftRight = shuffle(leftRight);//making it so target side is randomly determined 

for (i = 54; i<72; i++) {

	if (leftRight[r] == 0) { //left
		targetSide = 0
		respSide = 1
	} 

	if (leftRight[r] == 1) { //right
		targetSide = 1
		respSide = 0
	}

	if (targAB[r] == 'a') { //left
		targSelect = 'a'
		respSelect = 'b'
	} 

	if (targAB[r] == 'b') { //right
		targSelect = 'b'
		respSelect = 'a'
	}

	trial[i] = {
	// id: 'trial' + trialNum,
	stim: 'Object',
	delay: delayLong,
	rotate: rotateAng[r],
	targetSide: targetSide,
	respSide: respSide,
	targSelect: targSelect,
	respSelect: respSelect,
	stimSet: stimNum[stimIndx]

};
r++ 
stimIndx ++


}

r = 0;
stimIndx = 0;
targAB = shuffle(targAB); //making it so the target is randomly determined. Can't precisely counterbalance because of the 3 90 and 3 270
leftRight = shuffle(leftRight);//making it so target side is randomly determined 
stimNum = shuffle(stimNum) //shuffling stim order


for (i = 72; i<90; i++) {
	if (leftRight[r] == 0) { //left
		targetSide = 0
		respSide = 1
	} 

	if (leftRight[r] == 1) { //right
		targetSide = 1
		respSide = 0
	}

	if (targAB[r] == 'a') { //left
		targSelect = 'a'
		respSelect = 'b'
	} 

	if (targAB[r] == 'b') { //right
		targSelect = 'b'
		respSelect = 'a'
	}

	trial[i] = {
	// id: 'trial' + trialNum,
	stim: 'Scene',
	delay: delayShort,
	rotate: rotateAng[r],
	targetSide: targetSide,
	respSide: respSide,
	targSelect: targSelect,
	respSelect: respSelect,
	stimSet: stimNum[stimIndx]

};
r++
stimIndx ++

}

r = 0;
targAB = shuffle(targAB); //making it so the target is randomly determined. Can't precisely counterbalance because of the 3 90 and 3 270
leftRight = shuffle(leftRight);//making it so target side is randomly determined 


for (i = 90; i<108; i++) {

	if (leftRight[r] == 0) { //left
		targetSide = 0
		respSide = 1
	} 

	if (leftRight[r] == 1) { //right
		targetSide = 1
		respSide = 0
	}

	if (targAB[r] == 'a') { //left
		targSelect = 'a'
		respSelect = 'b'
	} 

	if (targAB[r] == 'b') { //right
		targSelect = 'b'
		respSelect = 'a'
	}

	trial[i] = {
	// id: 'trial' + trialNum,
	stim: 'Scene',
	delay: delayLong,
	rotate: rotateAng[r],
	targetSide: targetSide,
	respSide: respSide,
	targSelect: targSelect,
	respSelect: respSelect,
	stimSet: stimNum[stimIndx]

};
r++ 
stimIndx ++
}

trial = shuffle(trial)



//new Object() ;

// var ['trial' + i] = {
// 	stim: 'face' + i,
// 	delay: 0,
// 	rotate: 180

// };





function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function makeArray(startVal,maxVal) {

	let min = startVal;
	let max = maxVal;
	let step = 1;
	let arr = [];

	for(let i = min; i <= max; i += step){
    arr.push(i);

   }

return arr
// body...
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function repmat(array, count) {
  let result = [];
  while (count--) {
    result = result.concat(array);
  }
  return result;
}
