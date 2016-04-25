console.log("hello");
var myText = $('#myText').text("penguin");
var textA = $('#textA');

var version = "v3";
var congressNumber = 113;
var chamber = "house";
var responseFormat = ".json";
var optionalParams = "CA";
var APIkey = "0b1927347975561e82a94665127e27e2:19:71792148";

var membersEndpoint = "http://api.nytimes.com/svc/politics/" +
version + "/us/legislative/congress/" + 
congressNumber + "/" + 
chamber + "/members" + responseFormat + "?[" +
optionalParams + "]&api-key=" + APIkey;

$.get(membersEndpoint, function( response ) {
	textA.html( response.copyright );
}).done(function(response) {
	console.log('the whole response:', response);
	var insideTheResponse = response.results[0].members[3].first_name;
	console.log('one part of the response:', insideTheResponse);
	textA.html(insideTheResponse);
});