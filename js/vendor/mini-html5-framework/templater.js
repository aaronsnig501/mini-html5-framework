function render(template, context) {

    var found = {},
        re = /{{\s*([^}]+)\s*}}/g,
        parsedArray = [],
        curMatch;

    while(curMatch = re.exec(template)) {
        parsedArray.push(curMatch);
    }

    parsedArray.forEach(function(match) {
        for (var prop in context) {
            found[match[0]] = context[prop];
        }
    });

    function parser(template) {
        var t, re;

        for (var property in found) {
            var propertyValue = property.replace("{{ ", "").replace(" }}", "");
            t = (t || template).replace(property, context[propertyValue]);
        }

        return t;
    }

    
    return parser(template);
}