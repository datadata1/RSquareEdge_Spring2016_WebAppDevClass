console.log("hello");

var myText = $('#myText').text("penguin");

var textA = $('#textA');

// example of using jQuery .get() API

// $.get("http://example.com", function( data){
// 	textA.html(data);
// });

// console.log("you will get an error here since 'http://example.com' will not allow access")
var APIKey = "dc8ca517757a0398150544463988072d:18:74941912"
var version = 'v3';
var congressNumber = 113;
var chamber = 'senate';
var responseFormat = '.json';
var optionalParams = 'CA';


var membersEndpoint = 'http://api.nytimes.com/svc/politics/' 	+ 
					version 									+ '/us/legislative/congress/'+
					congressNumber 								+ '/' +
					chamber 									+ '/members' +
					responseFormat 								+ '?[' + 
					optionalParams 								+ ']&api-key=' +
					APIKey; 

$.get(membersEndpoint, function(response){
	textA.html(response.copyright);
}).done(function(response){
	console.log('the whole response:', response);
	var insideTheResponse = response.results[0].members[3].twitter_account;
	console.log('twitter handle:', insideTheResponse);
	var insideTheResponse2 = response.results[0].members[3].first_name;
	console.log('First name:', insideTheResponse2);
	textA.html(insideTheResponse, insideTheResponse2);
});

// practice: make a loop to get data for all (or some) members and then put into a table