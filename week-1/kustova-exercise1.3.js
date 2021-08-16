var url = require("url");
var parsedURL = url.parse("https://www.amazon.com/Vivere-Double-Hammock-Space-Saving-Tropical/dp/B004YJCP7O/?_encoding=UTF8");
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);