
const isTriangle = (side1, side2, side3) => {
	
	let isValidTriangle = false;
	
	if(
				
			(side1 + side2)	> side3 
			&&
			(side2 + side3)	> side1 
			&&
			(side3 + side1)	> side2 
	
	){
		isValidTriangle = true;
	}
	
	return isValidTriangle;
	
}

console.log("is this a valid triangle with sides as  10, 12, 15? "+isTriangle(10, 12, 15));
console.log("is this a valid triangle with sides as  10, 12, 1? "+isTriangle(10, 12, 1));