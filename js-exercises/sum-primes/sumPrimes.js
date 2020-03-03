const sumAllPrimeNumbers = (num) => {
	
		let allNumbers = Array.from({ length: num + 1 }, (v, k) => k).slice(2);

		let onlyPrimes = allNumbers.filter(n => {
			let m = n - 1;
			while (m > 1 && m >= Math.sqrt(n)) {
					if (n % m === 0) return false;
						m--;
			}
			return true;
		});
		
		document.write("Prime numbers between "+num+": ("+onlyPrimes+")");
		return onlyPrimes.reduce((a, b) => a + b);
		
		
	}
	
	document.write("<br>Sum of all primes: "+sumAllPrimeNumbers(20));