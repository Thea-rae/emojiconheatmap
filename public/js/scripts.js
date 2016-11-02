console.log('hello world from script.js');
emojiCall();
$(document).ready(function(){
	console.log('arty')
	
	$('#😩').addClass("growth pulse floater");

	var linkys = document.getElementsByClassName('dropdown-toggle');
	for (var i = 0; i < linkys.length; ++i) {
	  linkys[i].onclick = function(e) {
	    //if this isn't an http/https link
	    this.focus(); 
	    e.preventDefault();
	  };
	}
	
	// console.log(twemoji.parse('I '+twemoji.convert.fromCodePoint('1f633')+' emoji!'))
	// console.log(twemoji.parse(twemoji.convert.fromCodePoint('❤️')));
})

function template(data){
 	console.log('templating: ', data.emoji[0].type);
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

function emojiCall(){
	console.log("start emojiCall ajax request")
	$.ajax({
	  type: 'GET',
	  url: 'http://emojiconheattracker.herokuapp.com/api/getEmojis',
	  dataType : 'jsonp',
	  beforeSend:function(){
	 },
	  success:function(data){
		var emoji = data.emoji;
	   	template({emoji});
	  },
	  complete: function() {
	      // setTimeout(emojiCall, 5000);
	  },
	  error:function(callback){
	    console.log("errororororororororor")
	  }

	});
}
function emojiUpdate(){
	console.log("start emojiUpdate ajax request")
	$.ajax({
	  type: 'GET',
	  url: 'http://emojiconheattracker.herokuapp.com/api/getTopEmojis',
	  dataType : 'jsonp',
	  beforeSend:function(){
	 },
	  success:function(data){
		var emoji = data.emoji;
		console.log('top emojis: ', emoji)
	   	// template({emoji});
	  },
	  complete: function() {
	      // setTimeout(emojiCall, 5000);
	  },
	  error:function(callback){
	    console.log("errororororororororor")
	  }

	});
}

