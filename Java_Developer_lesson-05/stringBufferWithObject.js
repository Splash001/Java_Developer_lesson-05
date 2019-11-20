'use strict'

function makeBuffer() {
	var stringBuffer = '';
	
	return {
		print : () => stringBuffer,
		add: value => stringBuffer += value,
		clear: () => stringBuffer = ''
	};	
	
}

var buffer = makeBuffer();

buffer.add("GO ");
buffer.add("TO THE ");
buffer.add("BATHROOM ");
buffer.add("HARRY");
console.log(buffer.print());
buffer.clear();
buffer.add("I");
console.log(buffer.print());

var buffer2 = makeBuffer();
buffer2.add(2);
buffer2.add(3.56);
buffer2.add(-12);
console.log(buffer2.print());
buffer2.clear();
buffer2.add('CLEARED');
console.log(buffer2.print());