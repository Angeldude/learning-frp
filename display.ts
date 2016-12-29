class Display {
  constructor(input, stream){
    stream.listen(num => {
      if(input.value === "0")
        input.value = num.toString()
      else if(num === "")
        input.value = "0";
      else
        input.value += num.toString();
    });
  }
}

export default Display;
