
var prac = []
var rotateAng = [0, 0, 90, 270, 180, 180];
var leftRight = [0,1,0,1,0,1]; //0 = left, 1 = right, 3 reps becauase 6 trials in practice
var targAB = ['a','b','a','b','a','b'];
var stimNum = [1,3,5,2,4,6];
var delayShort = 0;
var delayLong = 5000;
var pracNum = 1;
var r = 0;
var targetSide = [];
var respSide = [];
var stimIndx = 0;
var delay = [delayShort, delayLong, delayShort, delayLong, delayShort, delayLong];

// stimOrder = shuffle(stimOrder)

for(i = 0; i < 6; i++) {


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

	prac[i] = {
	// id: 'trial' + trialNum,
	stim: 'Prac',
	delay: delay[r],
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

