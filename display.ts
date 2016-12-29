class Display {
  constructor(input, stream){
    stream.listen(num => {
      if(input.value === "0")
        input.value = num.toString()
      else
        input.value += num.toString();
    });
  }
}

export default Display;
