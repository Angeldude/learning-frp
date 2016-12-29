class Display {
  constructor(input, stream, clear){
    clear.listen(u => {
      if(u === "")
      input.value = "0";
    })
    
    stream.listen(num => {
      if(input.value === "0")
        input.value = num.toString()
      else
        input.value += num.toString();
    });
  }
}

export default Display;
