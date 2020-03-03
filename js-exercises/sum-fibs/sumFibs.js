const fibSeries = (n) => {
	
		if(n<=0){
			return [];
		}
	
		if(n===1){
			return [0,1];
		}else{
			let fs = fibSeries(n-1);
			let sum_of_prev_two_items = fs[fs.length-1] + fs[fs.length-2];
			fs.push(sum_of_prev_two_items);
			return fs;
		}
		
		
	}
	
	const sumAll = (intArray) => {
	
		let total = 0;
		for(val of intArray){
			val = Number(val);
			if(isNaN(val))
				continue;
			total += val;
		}
		return total;
	}
	
	
	
	let fibsArray = fibSeries(5);
	document.write("Fib Series = "+fibsArray);

	document.write("<br>Sum All = "+sumAll(fibsArray));