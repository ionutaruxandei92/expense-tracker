/**
 * Created by ionut.aruxandei on 14/06/16.
 */

var randomString = function(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

module.export = randomString;