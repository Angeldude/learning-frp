import Button from './button';
import Label from './label';

const red = new Button("red");
const green = new Button("green");

const sRed = red.stream.map(u => "Red");
const sGreen = green.stream.map(u => "Green");

const sMerged = sRed.orElse(sGreen);

const result = sMerged.hold("");

const sLabel = new Label("lbl", result );
