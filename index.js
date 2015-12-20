var generateUUID = require('node-uuid').v1;

function getString(){
  return generateUUID().replace(/-/g,'');
};

function geterateUUID(){
  return getString();
};

function getBuffer(){
  return new Buffer(getString(), 'hex');
};

function binToString(hex){
  return hex.toString('hex');
};

function stringToBin(str){
  var localStr = ''+str;
  return new Buffer(str.replace(/-/g,''), 'hex');;
};

module.exports = {
	generate: geterateUUID,
	getString: getString,
	getBuffer: getBuffer,
	binToString: binToString,
	stringToBin: stringToBin
};
