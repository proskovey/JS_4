var n = Math.floor(Math.random() * 10);
let res = -1;

const logString  = '';
const fs = require('fs');

function getLogName(){
	let s = 'guessNumber ';
	const date = new Date();
	let dd = date.getDate();
	let mm = date.getMonth()+1;
	let yy = date.getFullYear();
	
	s+=dd+'-'+mm+'-'+yy+' ';
	
	let hh = date.getHours();
	mm = date.getMinutes();
	let ss = date.getSeconds();
	s+=hh+':'+mm+':'+ss+'.log';
	return s;
}
const filename = getLogName();

function addLog(fn, s){
	fs.appendFile(fn, s, (err)=>{
		if (err){
			console.log(err);
		}
	}); 
}

var readline = require('readline');
const rl = readline.createInterface(
	{ 
		input: process.stdin, 
		output: process.stdout 
	});

function guessNumber(tries=1){
	let logRecord='попытка №'+tries+'\n';
	console.log(logRecord);
	addLog(filename, logRecord);
	rl.question("Угадайте число: ",(num) => {
		
		num = Number(num);
		if (Number.isInteger(num)){
			addLog(filename, 'Угадайте число: '+num+'\n')
			if (num < n){
				logRecord = 'больше\n';
			}
			else
				if (num > n){
					logRecord = 'меньше\n';
				}
				else {
					logRecord = 'Угадали! Число попыток '+ tries+'\n';
					console.log(logRecord);
					addLog(filename,logRecord);
					rl.close();
					return;
				}
			console.log(logRecord);
			addLog(filename,logRecord);
		}
		else
		{
			logRecord ='Необходимо ввести число'; 
			console.log(logRecord);
			addLog(filename,logRecord);
		}
		guessNumber(tries+1);
	});
}

guessNumber();
