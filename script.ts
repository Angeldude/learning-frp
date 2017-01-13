import Button from './button';
import Label from './label';

const red = new Button("red");
const green = new Button("green");

const sRed = red.stream.map(u => "Red");
const sGreen = green.stream.map(u => "Green");

const sColor = sRed.orElse(sGreen);

const result = sColor.hold("");

const sLabel = new Label("lbl", result );
