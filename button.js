"use strict";
var sodiumjs_1 = require("sodiumjs");
var Button = (function () {
    function Button(name, id) {
        var _this = this;
        this.button = document.createElement('button');
        this.button.textContent = name;
        this.streamed = new sodiumjs_1.StreamSink();
        this.stream = this.streamed;
        this.button.addEventListener('click', function (event) {
            _this.streamed.send(sodiumjs_1.Unit.UNIT);
        });
        this.render(id);
    }
    Button.prototype.render = function (id) {
        var x = document.getElementById(id);
        x.appendChild(this.button);
        return this;
    };
    return Button;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
