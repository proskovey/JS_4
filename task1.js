function getPasswordChecker (password){
	return function checkPassword(toCheck){
		if (password == toCheck)
			return true;
		else
			return false;
	}
}

if (process.argv.length !=3 ){
	console.log('Пароль должен быть аргументом в командной строке');
}
else
{
	const check = getPasswordChecker('12345');
	console.log(check(process.argv[2]));
}

