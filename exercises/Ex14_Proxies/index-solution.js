var target = function () {
    return 'You killed my father!';
};
var handler = {
    apply: function(receiver,...args){
        return receiver() + ' No, I am your father';
    }
};

var p = new Proxy(target, handler);
console.log(p());