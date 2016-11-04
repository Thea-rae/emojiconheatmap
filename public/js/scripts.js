console.log('hello world from script.js');
var mostRecentTen = [];
var allEmoji = [1];
emojiCall(template);
// emojiUpdate(animateTopEmoji);

$(document).ready(function(){
	var linkys = document.getElementsByClassName('dropdown-toggle');
	for (var i = 0; i < linkys.length; ++i) {
	  linkys[i].onclick = function(e) {
	    this.focus(); 
	    e.preventDefault();
	  };
	}
	// setInterval("emojiCall(template)", 5000);
	setInterval("emojiUpdate(animateTopEmoji)", 3000);
})

function convertObjectToArray(dataObject){
	//works only for emoji data

	var arr = [];
	var emoji = dataObject.emoji;
	// console.log(emoji)
	if (emoji !== undefined){
		// console.log('emojiobject to convert')
		for ( i = emoji.length-1; i>0; i--){
			var temp = emoji[i].type
			// console.log('return temp', temp)
			arr.push(temp)
		
		}
		return arr
	}

}
function allEmojiDuplicateCheck(dataArray){
	// console.log('checking for dupes', dataArray)
	if (dataArray !== undefined){
		arr = dataArray;
		var sorted_arr = arr.slice().sort(); 
		var results = [];
		for (var i = 0; i < arr.length - 1; i++) {
		    if (sorted_arr[i + 1] == sorted_arr[i]) {
		        results.push(sorted_arr[i]);
		    }
		}
		
		if (results.length > 0) {
			// console.log('dupes found')
			return results
		} else {
			// console.log('dupes not found')
			return dataArray
		}
	} else {
		// console.log('undefined input to dupe checking')
		return 
	}
	
	
}


function findNewEmoji(data, oldArray){
	//compare incoming array with existing array and find the difference
	var emoji = data;
	var differentEmoji = [];
	if (emoji !== undefined) {
		jQuery.grep(emoji, function(el) {
	        if (jQuery.inArray(el, oldArray) == -1) differentEmoji.push(el);
		});
		// console.log("differentEmoji Array: ", differentEmoji);
		return differentEmoji
	}
}


function animateTopEmoji(data){
	updateTemplate(data);
	var emoji = convertObjectToArray(data);
	// console.log('mostRecentTen emoji array' , mostRecentTen)
	// console.log('emoji array' , emoji)

	if (emoji !== undefined) {
		// console.log('in animation', emoji)
		for (j = mostRecentTen.length; j > 0  ; j--){
				var remover = mostRecentTen.shift()
				// console.log('removed ',remover,' from topTen')
				stopAnimateEmoji(remover);
		}
	 	for(i = 0; i < 11; i++){
	 			mostRecentTen.push(emoji[i]);
				// console.log("didn't remove nothing'")				
		}
		startAnimateEmoji()	
	}
}
function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
function startAnimateEmoji(){
	for (i in mostRecentTen){
		$('#'+mostRecentTen[i]).addClass("growth pulse floater");
	}
}
function stopAnimateEmoji(type){
	// console.log('removed' , type)
	$('#'+type).removeClass("growth pulse floater");
}

function template(data){
	var emoji = allEmojiDuplicateCheck(convertObjectToArray(data));
	
	for(i in emoji){
			var html = 
				'<div>'+
					'<ul>'+
						'<li id="'+emoji[i]+'"class="col-sm-1 emojisvg icon">'+
							emoji[i]+
						'</li>'+
					'</ul>'+		
				'</div>';
		$('#emoji').append(html);
		allEmoji.push(emoji[i])
	}	
};


function updateTemplate(data){
	var dataToArray = convertObjectToArray(data)
	var removeDupes = allEmojiDuplicateCheck(convertObjectToArray(data))
	var emoji = findNewEmoji(allEmojiDuplicateCheck(convertObjectToArray(data)),allEmoji)
	if(emoji !== undefined){
		// console.log('new emoji', emoji)
		for(i in emoji){
			allEmoji.push(emoji[i]);
			var html = 
				'<div>'+
					'<ul>'+
						'<li id="'+emoji[i]+'"class="col-sm-1 emojisvg icon">'+
							emoji[i]+
						'</li>'+
					'</ul>'+		
				'</div>';
			$('#emoji').append(html);		
		}
	}	
};

//----------------------------------- ajax calls ----------------------------------------------

function emojiCall(callback){
	console.log("start emojiCall ajax request")
	$.ajax({
	  type: 'GET',
	  url: 'http://emojiconheattracker.herokuapp.com/api/getEmojis',
	  dataType : 'jsonp',
	  beforeSend:function(){
	 },
	  success: callback,
	  error:function(callback){
	    console.log("errororororororororor")
	 }

	});
}

function emojiTopUpdate(callback){
	console.log("start emojiUpdate ajax request")
	$.ajax({
	  type: 'GET',
	  url: 'http://emojiconheattracker.herokuapp.com/api/getTopEmojis',
	  dataType : 'jsonp',
	  beforeSend:function(){
	  },
	  success: callback
	  ,
	  error:function(callback){
	    console.log("errororororororororor")
	  }

	});
}

function emojiUpdate(callback){
	// console.log("start emojiUpdate ajax request")
	$.ajax({
	  type: 'GET',
	  url: 'http://emojiconheattracker.herokuapp.com/api/getAllLatestEmojis',
	  dataType : 'jsonp',
	  beforeSend:function(){
	  },
	  success: callback
	  ,
	 
	  error:function(){
	    console.log("errororororororororor")
	  }

	});
}
