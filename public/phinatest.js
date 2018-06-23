// phina

phina.globalize();

phina.define('MainScene', {
  superClass: 'CanvasScene',
  
  init: function() {
    this.superInit();
    	// ここに処理を書く
    	require('./app.js')
    },
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
  });
  
  app.run();
});