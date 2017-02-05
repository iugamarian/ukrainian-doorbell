let exec = require( 'child_process' ).spawnSync;
let GPIO = require('onoff').Gpio;

let log = (data) => {
	console.log('[-] ' + data);
}

function playInitAudio(){
	playAudio(__dirname + '/audio/init.mp3');
}

function playDoorBellAudio(){
	playAudio(__dirname + '/audio/dorbell.mp3');
}

function playAudio(filePath){
	log('playing audio:' + filePath);
	exec('mpg123', [filePath]);
}

let btn = new GPIO(4, 'in', 'both');

btn.watch((err, val) => {
	log('btn: ' + val);
	if(val == 0) playDoorBellAudio();
});

playInitAudio();