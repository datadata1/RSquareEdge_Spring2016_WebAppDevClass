console.log("1hello")
var myText=$('#myText').text("penguin");
var textA = $('#textA');

var version = 'v3';
var congressNumber = 113;
var chamber = 'senate';
var responseFormat = '.json';
var optionalParams = 'CA';
var APIKey = 'e301c98824aeeb3784ef579589f41386:17:74941928';

//this is an example of how you use jQuery .get() API
var membersEndpoint = 'http://api.nytimes.com/svc/politics/'+
					  version+'/us/legislative/congress/'+
					  congressNumber+'/'+
					  chamber+'/members'+
					  responseFormat + '?[' +
					  optionalParams + ']&api-key=' +
					  APIKey;

$.get( membersEndpoint, function( response ) {
	textA.html( response.copyright );
	console.log(response)
}).done(function(response) {
	console.log('the whole response:', response);
	var insideTheResponse = response.results[0].members[3].first_name;
	console.log('one part of the response:', insideTheResponse);
	textA.html(insideTheResponse);

});

