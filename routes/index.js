var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//twitter setup//
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

router.get('/',function(req,res){
  res.render('index.html');
})


var http = require("http");
setInterval(function() {
    http.get("http://emojiconheattracker.herokuapp.com/api/listen");
}, 300000); // every 5 minutes (300000)

var Emoji = require("../models/model.js");

var allEmojis = ['😀','😬','😁','😂','😃','😄','😅','😆','😇','😉','😊','🙂','🙃','☺️','😋','😌','😍','😘','😗','😙','😚','😜','😝','😛','🤑','🤓','😎','🤗','😏','😶','😐','😑','😒','🙄','🤔','😳','😞','😟','😠','😡','😔','😕','🙁','☹️','😣','😖','😫','😩','😤','😮','😱','😨','😰','😯','😦','😧','😢','😥','😪','😓','😭','😵','😲','🤐','😷','🤒','🤕','😴','💤','💩','😈','👿','👹','👺','💀','👻','👽','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙌','👏','👋','👍','👊','✊','✌️','👌','✋','💪','🙏','☝️','👆','👇','👈','👉','🖕','🤘','🖖','✍️','💅','👄','👅','👂','👃','👁','👀','👤','🗣','👶','👦','👧','👨','👩','👱','👴','👵','👲','👳','👮','👷','💂','🕵','🎅','👼','👸','👰','🚶','🏃','💃','👯','👫','👬','👭','🙇','💁','🙅','🙆','🙋','🙎','🙍','💇','💆','💑','👩‍❤️‍👩','👨‍❤️‍👨','💏','👩‍❤️‍💋‍👩','👨‍❤️‍💋‍👨','👪','👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👩‍👩‍👦','👩‍👩‍👧','👩‍👩‍👧‍👦','👩‍👩‍👦‍👦','👩‍👩‍👧‍👧','👨‍👨‍👦','👨‍👨‍👧','👨‍👨‍👧‍👦','👨‍👨‍👦‍👦','👨‍👨‍👧‍👧','👚','👕','👖','👔','👗','👙','👘','💄','💋','👣','👠','👡','👢','👞','👟','👒','🎩','⛑','🎓','👑','🎒','👝','👛','👜','💼','👓','🕶','💍','🌂👦🏻','👧🏻','👨🏻','👩🏻','👴🏻','👵🏻','👶🏻','👱🏻','👮🏻','👲🏻','👳🏻','👷🏻','👸🏻','💂🏻','🎅🏻','👼🏻','💆🏻','💇🏻','👰🏻','🙍🏻','🙎🏻','🙅🏻','🙆🏻','💁🏻','🙋🏻','🙇🏻','🙌🏻','🙏🏻','🚶🏻','🏃🏻','💃🏻','💪🏻','👈🏻','👉🏻','☝️🏻','👆🏻','🖕🏻','👇🏻','✌️🏻','🖖🏻','🤘🏻','🖐🏻','✊🏻','✋🏻','👊🏻','👌🏻','👍🏻','👎🏻','👋🏻','👏🏻','👐🏻','✍🏻','💅🏻','👂🏻','👃🏻','🚣🏻','🛀🏻','🏄🏻','🏇🏻','🏊🏻','⛹🏻','🏋🏻','🚴🏻','🚵🏻👦🏼','👧🏼','👨🏼','👩🏼','👴🏼','👵🏼','👶🏼','👱🏼','👮🏼','👲🏼','👳🏼','👷🏼','👸🏼','💂🏼','🎅🏼','👼🏼','💆🏼','💇🏼','👰🏼','🙍🏼','🙎🏼','🙅🏼','🙆🏼','💁🏼','🙋🏼','🙇🏼','🙌🏼','🙏🏼','🚶🏼','🏃🏼','💃🏼','💪🏼','👈🏼','👉🏼','☝️🏼','👆🏼','🖕🏼','👇🏼','✌️🏼','🖖🏼','🤘🏼','🖐🏼','✊🏼','✋🏼','👊🏼','👌🏼','👍🏼','👎🏼','👋🏼','👏🏼','👐🏼','✍🏼','💅🏼','👂🏼','👃🏼','🚣🏼','🛀🏼','🏄🏼','🏇🏼','🏊🏼','⛹🏼','🏋🏼','🚴🏼','🚵🏼👦🏽','👧🏽','👨🏽','👩🏽','👴🏽','👵🏽','👶🏽','👱🏽','👮🏽','👲🏽','👳🏽','👷🏽','👸🏽','💂🏽','🎅🏽','👼🏽','💆🏽','💇🏽','👰🏽','🙍🏽','🙎🏽','🙅🏽','🙆🏽','💁🏽','🙋🏽','🙇🏽','🙌🏽','🙏🏽','🚶🏽','🏃🏽','💃🏽','💪🏽','👈🏽','👉🏽','☝️🏽','👆🏽','🖕🏽','👇🏽','✌️🏽','🖖🏽','🤘🏽','🖐🏽','✊🏽','✋🏽','👊🏽','👌🏽','👍🏽','👎🏽','👋🏽','👏🏽','👐🏽','✍🏽','💅🏽','👂🏽','👃🏽','🚣🏽','🛀🏽','🏄🏽','🏇🏽','🏊🏽','⛹🏽','🏋🏽','🚴🏽','🚵🏽👦🏾','👧🏾','👨🏾','👩🏾','👴🏾','👵🏾','👶🏾','👱🏾','👮🏾','👲🏾','👳🏾','👷🏾','👸🏾','💂🏾','🎅🏾','👼🏾','💆🏾','💇🏾','👰🏾','🙍🏾','🙎🏾','🙅🏾','🙆🏾','💁🏾','🙋🏾','🙇🏾','🙌🏾','🙏🏾','🚶🏾','🏃🏾','💃🏾','💪🏾','👈🏾','👉🏾','☝️🏾','👆🏾','🖕🏾','👇🏾','✌️🏾','🖖🏾','🤘🏾','🖐🏾','✊🏾','✋🏾','👊🏾','👌🏾','👍🏾','👎🏾','👋🏾','👏🏾','👐🏾','✍🏾','💅🏾','👂🏾','👃🏾','🚣🏾','🛀🏾','🏄🏾','🏇🏾','🏊🏾','⛹🏾','🏋🏾','🚴🏾','🚵🏾👦🏿','👧🏿','👨🏿','👩🏿','👴🏿','👵🏿','👶🏿','👱🏿','👮🏿','👲🏿','👳🏿','👷🏿','👸🏿','💂🏿','🎅🏿','👼🏿','💆🏿','💇🏿','👰🏿','🙍🏿','🙎🏿','🙅🏿','🙆🏿','💁🏿','🙋🏿','🙇🏿','🙌🏿','🙏🏿','🚶🏿','🏃🏿','💃🏿','💪🏿','👈🏿','👉🏿','☝️🏿','👆🏿','🖕🏿','👇🏿','✌️🏿','🖖🏿','🤘🏿','🖐🏿','✊🏿','✋🏿','👊🏿','👌🏿','👍🏿','👎🏿','👋🏿','👏🏿','👐🏿','✍🏿','💅🏿','👂🏿','👃🏿','🚣🏿','🛀🏿','🏄🏿','🏇🏿','🏊🏿','⛹🏿','🏋🏿','🚴🏿','🚵🏿🐶','🐱','🐭','🐹','🐰','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐙','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦','🐤','🐣','🐥','🐺','🐗','🐴','🦄','🐝','🐛','🐌','🐞','🐜','🕷','🦂','🦀','🐍','🐢','🐠','🐟','🐡','🐬','🐳','🐋','🐊','🐆','🐅','🐃','🐂','🐄','🐪','🐫','🐘','🐐','🐏','🐑','🐎','🐖','🐀','🐁','🐓','🦃','🕊','🐕','🐩','🐈','🐇','🐿','🐾','🐉','🐲','🌵','🎄','🌲','🌳','🌴','🌱','🌿','☘','🍀','🎍','🎋','🍃','🍂','🍁','🌾','🌺','🌻','🌹','🌷','🌼','🌸','💐','🍄','🌰','🎃','🐚','🕸','🌎','🌍','🌏','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌚','🌝','🌛','🌜','🌞','🌙','⭐️','🌟','💫','✨','☄','☀️','🌤','⛅️','🌥','🌦','☁️','🌧','⛈','🌩','⚡️','🔥','💥','❄️','🌨','🔥','💥','❄️','🌨','☃️','⛄️','🌬','💨','🌪','🌫','☂️','☔️','💧','💦','🌊🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🍍','🍅','🍆','🌶','🌽','🍠','🍯','🍞','🧀','🍗','🍖','🍤','🍳','🍔','🍟','🌭','🍕','🍝','🌮','🌯','🍜','🍲','🍥','🍣','🍱','🍛','🍙','🍚','🍘','🍢','🍡','🍧','🍨','🍦','🍰','🎂','🍮','🍬','🍭','🍫','🍿','🍩','🍪','🍺','🍻','🍷','🍸','🍹','🍾','🍶','🍵','☕️','🍼','🍴','🍽⚽️','🏀','🏈','⚾️','🎾','🏐','🏉','🎱','⛳️','🏌','🏓','🏸','🏒','🏑','🏏','🎿','⛷','🏂','⛸','🏹','🎣','🚣','🏊','🏄','🛀','⛹','🏋','🚴','🚵','🏇','🕴','🏆','🎽','🏅','🎖','🎗','🏵','🎫','🎟','🎭','🎨','🎪','🎤','🎧','🎼','🎹','🎷','🎺','🎸','🎻','🎬','🎮','👾','🎯','🎲','🎰','🎳','🚗','🚕','🚙','🚌','🚎','🏎','🚓','🚑','🚒','🚐','🚚','🚛','🚜','🏍','🚲','🚨','🚔','🚍','🚘','🚖','🚡','🚠','🚟','🚃','🚋','🚝','🚄','🚅','🚈','🚞','🚂','🚆','🚇','🚊','🚉','🚁','🛩','✈️','🛫','🛬','⛵️','🛥','🚤','⛴','🛳','🚀','🛰','💺','⚓️','🚧','⛽️','🚏','🚦','🚥','🏁','🚢','🎡','🎢','🎠','🏗','🌁','🗼','🏭','⛲️','🎑','⛰','🏔','🗻','🌋','🗾','🏕','⛺️','🏞','🛣','🛤','🌅','🌄','🏜','🏖','🏝','🌇','🌆','🏙','🌃','🌉','🌌','🌠','🎇','🎆','🌈','🏘','🏰','🏯','🏟','🗽','🏠','🏡','🏚','🏢','🏬','🏣','🏤','🏥','🏦','🏨','🏪','🏫','🏩','💒','🏛','⛪️','🕌','🕍','🕋','⛩⌚️','📱','📲','💻','⌨','🖥','🖨','🖱','🖲','🕹','🗜','💽','💾','💿','📀','📼','📷','📸','📹','🎥','📽','🎞','📞','☎️','📟','📠','📺','📻','🎙','🎚','🎛','⏱','⏲','⏰','🕰','⏳','⌛️','📡','🔋','🔌','💡','🔦','🕯','🗑','🛢','💸','💵','💴','💶','💷','💰','💳','💎','⚖','🔧','🔨','⚒','🛠','⛏','🔩','⚙','⛓','🔫','💣','🔪','🗡','⚔','🛡','🚬','☠','⚰','⚱','🏺','🔮','📿','💈','⚗','🔭','🔬','🕳','💊','💉','🌡','🏷','🔖','🚽','🚿','🛁','🔑','🗝','🛋','🛌','🛏','🚪','🛎','🖼','🗺','⛱','🗿','🛍','🎈','🎏','🎀','🎁','🎊','🎉','🎎','🎐','🎌','🏮','✉️','📩','📨','📧','💌','📮','📪','📫','📬','📭','📦','📯','📥','📤','📜','📃','📑','📊','📈','📉','📄','📅','📆','🗓','📇','🗃','🗳','🗄','📋','🗒','📁','📂','🗂','🗞','📰','📓','📕','📗','📘','📙','📔','📒','📚','📖','🔗','📎','🖇','✂️','📐','📏','📌','📍','🚩','🏳','🏴','🔐','🔒','🔓','🔏','🖊','🖊','🖋','✒️','📝','✏️','🖍','🖌','🔍','🔎❤️','💛','💙','💜','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟','☮','✝️','☪','🕉','☸','✡️','🔯','🕎','☯️','☦','🛐','⛎','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️','🆔','⚛','🈳','🈹','☢','☣','📴','📳','🈶','🈚️','🈸','🈺','🈷️','✴️','🆚','🉑','💮','🉐','㊙️','㊗️','🈴','🈵','🈲','🅰️','🅱️','🆎','🆑','🅾️','🆘','⛔️','📛','🚫','❌','⭕️','💢','♨️','🚷','🚯','🚳','🚱','🔞','📵','❗️','❕','❓','❔','‼️','⁉️','💯','🔅','🔆','🔱','⚜','〽️','⚠️','🚸','🔰','♻️','🈯️','💹','❇️','✳️','❎','✅','💠','🌀','➿','🌐','Ⓜ️','🏧','🈂️','🛂','🛃','🛄','🛅','♿️','🚭','🚾','🅿️','🚰','🚹','🚺','🚼','🚻','🚮','🎦','📶','🈁','🆖','🆗','🆙','🆒','🆕','🆓','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔢','▶️','⏸','⏯','⏹','⏺','⏭','⏮','⏩','⏪','🔀','🔁','🔂','◀️','🔼','🔽','⏫','⏬','➡️','⬅️','⬆️','⬇️','↗️','↘️','↙️','↖️','↕️','↔️','🔄','↪️','↩️','⤴️','⤵️','#️⃣','*️⃣','ℹ️','🔤','🔡','🔠','🔣','🎵','🎶','〰️','➰','✔️','🔃','➕','➖','➗','✖️','💲','💱','©️','®️','™️','🔚','🔙','🔛','🔝','🔜','☑️','🔘','⚪️','⚫️','🔴','🔵','🔸','🔹','🔶','🔷','🔺','▪️','▫️','⬛️','⬜️','🔻','◼️','◻️','◾️','◽️','🔲','🔳','🔈','🔉','🔊','🔇','📣','📢','🔔','🔕','🃏','🀄️','♠️','♣️','♥️','♦️','🎴','👁‍🗨','💭','🗯','💬','🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛','🕜','🕝','🕞','🕟','🕠','🕡','🕢','🕣','🕤','🕥','🕦','🕧','🇦🇫','🇦🇽','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇶','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇶','🇧🇦','🇧🇼','🇧🇷','🇮🇴','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇨🇻','🇰🇭','🇨🇲','🇨🇦','🇮🇨','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇳','🇨🇽','🇨🇨','🇨🇴','🇰🇲','🇨🇬','🇨🇩','🇨🇰','🇨🇷','🇭🇷','🇨🇺','🇨🇼','🇨🇾','🇨🇿','🇩🇰','🇩🇯','🇩🇲','🇩🇴','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇪🇹','🇪🇺','🇫🇰','🇫🇴','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇵🇫','🇹🇫','🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇮','🇬🇷','🇬🇱','🇬🇩','🇬🇵','🇬🇺','🇬🇹','🇬🇬','🇬🇳','🇬🇼','🇬🇾','🇭🇹','🇭🇳','🇭🇰','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇲','🇮🇱','🇮🇹','🇨🇮','🇯🇲','🇯🇵','🇯🇪','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮','🇱🇹','🇱🇺','🇲🇴','🇲🇰','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇾🇹','🇲🇽','🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷','🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇳🇺','🇳🇫','🇲🇵','🇰🇵','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇳','🇵🇱','🇵🇹','🇵🇷','🇶🇦','🇷🇪','🇷🇴','🇷🇺','🇷🇼','🇧🇱','🇸🇭','🇰🇳','🇱🇨','🇵🇲','🇻🇨','🇼🇸','🇸🇲','🇸🇹','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🇸🇽','🇸🇰','🇸🇮','🇸🇧','🇸🇴','🇿🇦','🇬🇸','🇰🇷','🇸🇸','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇿','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇱','🇹🇬','🇹🇰','🇹🇴','🇹🇹','🇹🇳','🇹🇷','🇹🇲','🇹🇨','🇹🇻','🇺🇬','🇺🇦','🇦🇪','🇬🇧','🇺🇸','🇻🇮','🇺🇾','🇺🇿','🇻🇺','🇻🇦','🇻🇪','🇻🇳','🇼🇫','🇪🇭','🇾🇪','🇿🇲','🇿🇼','🤣','🤠','🤡','🤥','🤤','🤢','🤧','🤴','🤶','🤵','🤷','🤦','🤰','🕺','🤳','🤞','🤙','🤛','🤜','🤚','🤝','🖤','🦍','🦊','🦌','🦏','🦇','🦅','🦆','🦉','🦎','🦈','🦐','🦑','🦋','🥀','🥝','🥑','🥔','🥕','🥒','🥜','🥐','🥖','🥞','🥓','🥙','🥚','🥘','🥗','🥛','🥂','🥃','🥄','🛑','🛴','🛵','🛶','🥇','🥈','🥉','🥊','🥋','🤸','🤼','🤽','🤾','🤺','🥅','🤹','🥁','🛒'];

router.get('/api/listen', function(req,res){
  client.stream('statuses/filter',{track: '#emojicon'}, function(stream){
    stream.on('data', function(tweet) { 
      console.log(tweet);
      checkForEmoji(tweet.text, tweet.created_at);
    });
    stream.on('error', function(error){
      console.log(error);
    });
  });
})

router.get('/api/getEmojis', function(req,res){
  var pull = Emoji.find().sort({num:-1});
  pull.exec(function(err, data){
      //console.log("pulling mongodb");
    // if err or no emojis found, respond with error 
    if(err || data == null){
      var error = {status:'ERROR', message: 'Could not find emojis'};
      console.log(error);
      return res.json(error);
    }

    // otherwise, respond with the data 
    var jsonData = {
      status: 'OK',
      emoji: data
    }

    return res.jsonp(jsonData);
  });
})

router.get('/api/getTenLatestEmojis', function(req,res){
  var pull = Emoji.find().sort({created_at:-1}).limit(10);
  pull.exec(function(err, data){
      //console.log("pulling mongodb");
    // if err or no emojis found, respond with error 
    if(err || data == null){
      var error = {status:'ERROR', message: 'Could not find emojis'};
      console.log(error);
      return res.json(error);
    }

    // otherwise, respond with the data 
    var jsonData = {
      status: 'OK',
      emoji: data
    }

    return res.jsonp(jsonData);
  });
})

router.get('/api/getAllLatestEmojis', function(req,res){
  var pull = Emoji.find().sort({created_at:-1});
  pull.exec(function(err, data){
      //console.log("pulling mongodb");
    // if err or no emojis found, respond with error 
    if(err || data == null){
      var error = {status:'ERROR', message: 'Could not find emojis'};
      console.log(error);
      return res.json(error);
    }

    // otherwise, respond with the data 
    var jsonData = {
      status: 'OK',
      emoji: data
    }

    return res.jsonp(jsonData);
  });
})

router.get('/api/getTopEmojis', function(req,res){
   var topTenEmojis = Emoji.find().sort({num:-1}).limit(10);
   topTenEmojis.exec(function(err,data){
    if (err){return err;}
    var jsonData={
      status: 'OK',
      emoji: data
    }
    console.log(jsonData);
    return res.jsonp(jsonData);
   })
})

function checkForEmoji(tweet, tweetDate){
  var emojis =[], x=0, boo;
  for(var i in allEmojis){
     if(tweet.includes(allEmojis[i])){
      //console.log(allEmojis[i]);
      emojis[x] = allEmojis[i];
      x++;
      boo = true;
     }
  }
  if(boo){
    for(var i in emojis){
      checkforEmojiOnServer(emojis[i], tweetDate);
    }
  }
}

function checkforEmojiOnServer(e, tweetDate, res){
  console.log("searching server for "+e);
  Emoji.find({type: e}, function(err,data){
    if(data==null || data.length==0){
      var message = {status:'NO RESULTS', message: 'We couldn\'t find any results'};
      postToServer(e, tweetDate);   
    } else{
     // console.log("got to updating count");
      var jsonData = {
          status: 'OK',
          emoji: data
      } 
      console.log(jsonData.emoji[0]._id);
      updateEmojiCount(jsonData.emoji[0]._id, jsonData.emoji[0].num, tweetDate);
    }
  });
} 

function updateEmojiCount(id, count, tweetDate, res){
  console.log("updating emoji count");
  var requestedId = id;

   var dataToUpdate = {}; // a blank object of data to update

    var number = count+1;
    dataToUpdate['num'] = number;
    dataToUpdate['created_at'] = tweetDate;

    Emoji.findByIdAndUpdate(requestedId, dataToUpdate, function(err,data){
      console.log(data);
    })
}

function postToServer(tweetEmojis, tweetDate, res){
  console.log("posting to server"+tweetEmojis);
   var type = tweetEmojis;
   var num = 0;
    var emojiObj ={
      type: type,
      num: num,
      created_at: tweetDate
    };
    var emoji = new Emoji(emojiObj);
  emoji.save(function(err,data){
      if(err){
        var error ={status:'ERROR', message: 'Error saving emoji'};
        console.log(error);
        return res.json(error);
      }
      console.log('saved new emoji: '+emojiObj);

    })
 } 

module.exports = router;