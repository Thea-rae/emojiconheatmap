console.log('hello world from script.js');
emojiCall(template);
$(document).ready(function(){
	var linkys = document.getElementsByClassName('dropdown-toggle');
	for (var i = 0; i < linkys.length; ++i) {
	  linkys[i].onclick = function(e) {
	    this.focus(); 
	    e.preventDefault();
	  };
	}
	emojiUpdate(animateTopEmoji)
})

function animateTopEmoji(data){
	// console.log('in animateTopEmoji')
	var emoji = data.emoji
 	for(i in emoji){
			$('#'+emoji[i].type).addClass("growth pulse floater");
	}
	// setTimeout(emojiUpdate(animateTopEmoji), 5000);
}



function template(data){
 		var emoji = data.emoji
 		for(i in data.emoji){
 			var html = 
					'<div>'+
						'<ul>'+
							'<li id="'+emoji[i].type+'"class="col-sm-1 emojisvg icon">'+
								emoji[i].type+
							'</li>'+
						'</ul>'+		
					'</div>';
			$('#emoji').append(html);
 		};
};

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
function emojiUpdate(callback){
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

