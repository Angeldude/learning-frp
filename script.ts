import { StreamSink, Unit } from 'sodiumjs';

class Observable extends StreamSink<any> {
  fromEvent(obj, event){
    obj.addEventListener(event, x => {
      this.send(x);
    });
  }
}
var mouseDown  = new Observable();

var canv = <HTMLCanvasElement>document.getElementById('canvas');
mouseDown.fromEvent(canv, 'mousedown');

var initial = {x0: 0, y0: 0, x1:0, y1: 0};
var sLines = mouseDown.accum(initial, (e, last) => {
  var x = e.pageX - canv.offsetLeft;
  var y = e.pageY - canv.offsetTop;
  return {x0: last.x1, y0: last.y1, x1: x, y1: y};
});

var subs = sLines.listen(l => {
  var ctx = canv.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(l.x0, l.y0);
  ctx.lineTo(l.x1, l.y1);
  ctx.stroke();
});
