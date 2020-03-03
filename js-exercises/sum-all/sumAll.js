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

	document.write("Sum All = "+sumAll([1,2,3,-1,null,"undefined",0,10.1,"20"]));