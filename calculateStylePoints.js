const calculateStylePoints = (notesArray) => {
  
	function compareNumbers(a, b) {
   		return a - b
	};

	let sortedNotesArray = notesArray.sort(compareNumbers);
	const arrayLength = notesArray.length - 2;
	let cutNotesArray = sortedNotesArray.splice(1, arrayLength);
	let styleNote = cutNotesArray.reduce(function(x, y) {
  		return x + y;
	});

	return styleNote;

};

module.exports = calculateStylePoints;
