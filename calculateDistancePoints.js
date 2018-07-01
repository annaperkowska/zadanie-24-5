const calculateDistancePoints = (hillSize, distance, kPoint) => {
  let points = 60;
	let converter;
	if (hillSize === 'skyFlying') {
		points = 120;
		converter = 1.2;
	}
	if (hillSize === 'large') {
		converter = 1.8;
	}
  	if (hillSize === 'normal') {
    converter = 2;
  	}
	if (distance > kPoint) {
		points += ((Math.round(distance*2)/2) - kPoint) * converter
	}
	else {
		points -= (kPoint - (Math.round(distance*2)/2)) * converter
	}
	return points;
};
	
module.exports = calculateDistancePoints;