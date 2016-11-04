console.log('hello world from script.js');
var mostRecentTen = [];
var allEmoji = [1];
emojiCall(template);
emojiUpdate(animateTopEmoji);

$(document).ready(function(){
	var linkys = document.getElementsByClassName('dropdown-toggle');
	for (var i = 0; i < linkys.length; ++i) {
	  linkys[i].onclick = function(e) {
	    this.focus(); 
	    e.preventDefault();
	  };
	}
	// setInterval("emojiCall(template)", 5000);
	setInterval("emojiUpdate(animateTopEmoji)", 2000);
})

function convertObjectToArray(dataObject){
	//works only for emoji data
	var arr = [];
	var emoji = dataObject.emoji;
	// console.log('length of emoji to convert', emoji.length)
	for (i = 0 ;i < emoji.length; i++){
		var temp = emoji[i].type
		// console.log('return temp', temp)
		arr.push(temp)
	
	}
	
	return arr
}
function allEmojiDuplicateCheck(dataArray){
	// console.log('checking for dupes', dataArray)
	arr = dataArray;
	var sorted_arr = arr.slice().sort(); 
	var results = [];
	for (var i = 0; i < arr.length - 1; i++) {
	    if (sorted_arr[i + 1] == sorted_arr[i]) {
	        results.push(sorted_arr[i]);
	    }
	}
	return results
}


function findNewEmoji(data, oldArray){
	//compare incoming array with existing array and find the difference
	var emoji = convertObjectToArray(data);
	var differentEmoji = [];
	jQuery.grep(emoji, function(el) {
        if (jQuery.inArray(el, oldArray) == -1) differentEmoji.push(el);
	});
	console.log("returnEmoji Array: ", differentEmoji);

}


function animateTopEmoji(data){
	updateTemplate(data);
	var emoji = data.emoji;
 	for(i = emoji.length-1; i > emoji.length-11; i--){
			for (j = mostRecentTen.length-1; j > 0  ; j--){
				if (emoji[i].type !== mostRecentTen[j]){
					// 
					var remover = mostRecentTen.shift()
					stopAnimateEmoji(remover);

				}
				else{
					console.log("didn't remove nothing'")
				}	
			}
		mostRecentTen.push(emoji[i].type);
		$('#'+emoji[i].type).addClass("growth pulse floater");
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
	var emoji = findNewEmoji(data,all)
	console.log('new emoji', emoji)
	// checking if new emoji have been tweeted
	// making sure that the new emoji get added
	for(i in emoji){
		for (j in allEmoji){
			if (emoji[i].type == allEmoji[j]){

	 			var html = 
						'<div>'+
							'<ul>'+
								'<li id="'+emoji[i].type+'"class="col-sm-1 emojisvg icon">'+
									emoji[i].type+
								'</li>'+
							'</ul>'+		
						'</div>';
				$('#emoji').append(html);
			}	
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
	console.log("start emojiUpdate ajax request")
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
