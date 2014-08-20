console.log('Simply.js demo!');

simply.on('singleClick', function(e) {
  console.log(util2.format('single clicked $button!', e));
  simply.subtitle('Pressed ' + e.button + '!');
});

simply.on('longClick', function(e) {
  console.log(util2.format('long clicked $button!', e));
  simply.vibe();
  simply.scrollable(e.button !== 'select');
});

simply.on('accelTap', function(e) {
  console.log(util2.format('tapped accel axis $axis $direction!', e));
  simply.subtitle('Tapped ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});




ajax({ url: 'http://maxxcrawford.com/pebble/test.json' }, function(data){
  var headline = data.title[0];
  console.log(headline);
});


var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

simply.setText({
  title: person.firstName,
  body: person.eyeColor,
}, true);


/*ajax({ url: 'http://maxxcrawford.com/pebble/test.json' }, function(data){
  var headline = data.match(/<h1>(.*?)<\/h1>/)[1];
  simply.title(headline);
});*/
