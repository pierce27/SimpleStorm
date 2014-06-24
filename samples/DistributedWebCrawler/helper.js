var url = require('url');

exports.urlParser = function (regexArray, link){

	// Get PathName of URL
	var urldata = url.parse(link);
	var pathName = urldata.pathname
	var isPost


	// Remove leading slash
	pathName = pathName.replace(/\/?/, '')
	
	// Append trailing slash if none exists
	if(pathName.substr(pathName.length - 1) != '/'){
		pathName = pathName + '/'
	}
	
	// Split all parts of pathname into an array
	var parts = pathName.match(/.*?\//g)



	// Remove slash from all parts
	for(var i = 0; i< parts.length; i++){
		parts[i] = parts[i].replace(/\//, '')
	}

	console.log(parts)

	var matchstring
	var regex 

	if (parts == ''){
		return false
	}else{
		for(var x = 0; x < parts.length; x++){
			console.log(regexArray[x])

			// If there is no regex pattern for a part of URL then return false
			if (regexArray[x] == null) {return false};
			if (parts[x] == '') {return false};

			// There should only be one result for the regex match because it should match exactly ex: d{2} should be true for 2013
			matchstring = parts[x].match(regexArray[x])
			console.log(matchstring)
			if(matchstring.length > 1){
				return false
			}
		}
	}

	return true

	// var partMatch = parts[part].match(regex)

	// if( partMatch ){
	// 	console.log(partMatch)
	// 	return true
	// } else{
	// 	return false
	// }

}

// var testregex = [/\d{4}/g, /\d{2}/g, /\d{2}/g, /(\w+\-){1,}\w+/g]

// var link = 'http://www.towleroad.com/2013/01/news-gun-rally-norovirus-balkanization-16-bit.html?cid=6a00d8341c730253ef017c364b4a5a970b#comment-6a00d8341c730253ef017c364b4a5a970b#comments'

// urldata = url.parse(link)

// console.log(link)
// link = link.replace(urldata.hash, '')
// link = link.replace(urldata.search, '')
// console.log(link)

// var match = test(testregex, 'http://www.rawstory.com/2014/07/09/sdfdsf-sdfdsfds-sdf/')

// if (urlParser(testregex, 'http://www.joystiq.com/2014/06/17/joystiq-streams-the-incredible-adventures-of-van-helsing-2/#comments')){
// 	console.log('true')
// } else {
// 	console.log('false')
// }




