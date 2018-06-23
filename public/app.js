//config内の値は自分のプロジェクトの設定に合わせて指定
  var config = {
    apiKey: "AIzaSyBBFuLuDHdUWI-1yb76N9o8I7V5NSuAHZU",
    authDomain: "werewolf-c8340.firebaseapp.com",
    databaseURL: "https://werewolf-c8340.firebaseio.com",
    projectId: "werewolf-c8340",
    storageBucket: "werewolf-c8340.appspot.com",
    messagingSenderId: "531371010019"
  };

firebase.initializeApp(config);

var rootRef = firebase.database().ref();

$('#msgIn').keypress(function (e) {
    if (e.keyCode == 13) {
        var name = $('#nameIn').val();
        var text = $('#msgIn').val();
        rootRef.push({ 
            name: name,
            text: text,
            // 役職ごとにroomをset。村人は個人名にする
            chatroom:'werewolf'
        });
        $('#msgIn').val('');
    }
});

rootRef.on('child_added', function (ss) {
    var msg = ss.val();
    console.log(msg)
    dspChatMsg(msg);
});

function dspChatMsg(msg) {
    var name = msg.name
    var text = msg.text
    var chatroom = msg.chatroom
    if(text!="" && chatroom =='werewolf'){
        if(name=="長谷部"){
            $('<div class="right_name"/>').text(name).appendTo($('#msgDiv'));
            $('<div class="right_balloon"/>').text(text).appendTo($('#msgDiv'));
        }else{
            $('<div class="left_name"/>').text(name).appendTo($('#msgDiv'));
            $('<div class="left_balloon"/>').text(text).appendTo($('#msgDiv'));

        }
        $("html,body").animate({ scrollTop: $('#bottomDiv').offset().top }, 0);
}};