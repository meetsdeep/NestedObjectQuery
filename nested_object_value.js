var obj = {
  foo: { bar: 'baz' }
};

var deep_value = function(obj, path){
    for (var i=0, path=path.split('.'), len=path.length; i<len; i++){
        obj = obj[path[i]];
    };
    return obj;
};

alert(deep_value(obj, 'foo.bar'));