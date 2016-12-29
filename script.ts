import { Cell, StreamSink} from 'sodiumjs';

function currentText(input : HTMLInputElement) : Cell<string>{
  var sKeyPress = new StreamSink<string>(),
  text = sKeyPress.hold(input.value);

  input.addEventListener('keyup', function(e){
    sKeyPress.send(input.value);
  })
  return text;
}

(function(){
  var a = currentText(<HTMLInputElement>document.getElementById('a'))
             .map(txt => parseInt(txt));
  var b = currentText(<HTMLInputElement>document.getElementById('b'))
            .map(txt => parseInt(txt));
  var cSpan = document.getElementById('c');
  var c = a.lift(b, function(x,y){
    return x + y;
  })

  c.listen(z => {
    isNaN(z) ?
      cSpan.innerHTML = "" :
      cSpan.innerHTML = (z).toString();
  })

})()
