var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return '';
    if (strs.length == 1) return strs[0];
    var result = "";
    var p = 0;
    var check = true;
    while (check) {
        let c = "";
        for (let i = 0; i < strs.length; i++) {
            if (!strs[i][p]) {
                return result;
            }
            if (strs[i].length == 0) {
                return "";
            } 
            if (c == "") {
                c = strs[i][p];
            } else if (c != strs[i][p]) {
                return result; 
            } 
        } 
        result += c;
        p++;
    }
    return result;
}

strs = ["fl","f"]
console.log(longestCommonPrefix(strs));

strs2 = ["a"]
console.log(longestCommonPrefix(strs2));