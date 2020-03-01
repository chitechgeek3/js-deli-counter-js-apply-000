var katzDeli = [];
var numberInLine = 0 
var takeANumber = function (katzDeliLine)
	katzDeliLine.push();
	numberInLine = +1
	return(`Welcome. You are number ${numberInLine} in line.`)
}



var nowServing = function (katzDeliLine) {
	if (katzDeliLine.length === 0) {
		return("There is nobody waiting to be served!") }

	var nowServingCustomer = katzDeliLine[0];
	katzDeliLine.shift();
	return(`Currently serving ${nowServingCustomer}.`);
}

nowServing(katzDeli);

var currentLine = function (katzDeliLine) {
var line = [];
var i = 0;

	while (i < katzDeliLine.length) {
		line.push(' ' + [i+1] + '. ' + katzDeliLine[i]) // 
		i++;
	}
	if (katzDeliLine.length === 0) { 
	  
		return "The line is currently empty.";
	} 
	return(`The line is currently:` + line);
}