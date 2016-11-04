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
	setInterval("emojiUpdate(animateTopEmoji)", 7000);
})

function animateTopEmoji(data){
	// console.log('in animateTopEmoji')
	var emoji = data.emoji
 	for(i = emoji.length-1; i > emoji.length-10; i--){
			for (j = mostRecentTen.length-1; j > 0  ; j--){
				if (emoji[i].type == mostRecentTen[j]){
					// console.log('time to remove something')
					var remover = mostRecentTen.shift()
					stopAnimateEmoji(remover);
				}			
			}
		mostRecentTen.push(emoji[i].type);
		$('#'+emoji[i].type).addClass("growth pulse floater");
	}
	
}

function stopAnimateEmoji(data){
	console.log('removed' , data)
			$('#'+data).removeClass("growth pulse floater");
}

function template(data){
	var emoji = data.emoji
	// console.log(emoji)	
	for(i in emoji){
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
};


// function template(data){
// 	var emoji = data.emoji
// 	// console.log(emoji)	
// 	for (j in allEmoji){
// 		for(i in emoji){
// 			if (emoji[i].type == j){
// 					mostRecentTen.push(emoji[i].type);
// 			 			var html = 
// 								'<div>'+
// 									'<ul>'+
// 										'<li id="'+emoji[i].type+'"class="col-sm-1 emojisvg icon">'+
// 											emoji[i].type+
// 										'</li>'+
// 									'</ul>'+		
// 								'</div>';
// 						$('#emoji').append(html);
// 			}	
// 		}		
// 	}
		
// };



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
	  complete: function() {

	  },
	  error:function(){
	    console.log("errororororororororor")
	  }

	});
}
