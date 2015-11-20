(function(global) {
    'use strict';

    var JS_BASICS={};

    JS_BASICS.isNumberEven = function(i) {
        return i % 2 === 0;
    };

    JS_BASICS.getFileExtension = function(str) {
        return (str.indexOf(".") == -1) ? false : str.substr(str.lastIndexOf(".") + 1);
    };

    JS_BASICS.longestString = function(arr) {
        var myReturnWord = null
        for(var cpt = 0; cpt < arr.length; cpt++)
            if((typeof arr[cpt]) == "string" && (myReturnWord == null || myReturnWord.length < arr[cpt].length))
                myReturnWord = arr[cpt];

        return myReturnWord;
    };

    JS_BASICS.reverseString = function(str) {
        var word='';
        for(var i = str.length-1; i >= 0; i-- ){
         word = word.concat(str.charAt(i));
        }
        return word;
        // str will be an string
        // Return a new string who's characters are in the opposite order to str's.
    };

    JS_BASICS.isPalindrome = function(str)
    {
        str = str.toLowerCase();
        var myReturn = JS_BASICS.reverseString(str);

        //Arabic letter : give 2 char 1607 + 32 so slice the 32
        if(parseInt(str.charCodeAt(0)) > 127)
        {
            for(var cpt = 0; cpt < str.length; cpt++)
                if(str.charCodeAt(cpt) != str.charCodeAt(str.length - 1 - cpt) && str.charCodeAt(str.length - 1 - cpt) == 32 && cpt + 1 < str.length && str.charCodeAt(cpt + 1) == 32)
                    str = str.slice(0, cpt) + str.slice(cpt + 1, str.length);

            myReturn = JS_BASICS.reverseString(str);
        }
        return myReturn == str;

    // str will be an string
    // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.
};

    JS_BASICS.nestedSum = function(arr)
    {
        var myTotal = 0;
        for(var cpt = 0; cpt < arr.length; cpt++)
            if(Array.isArray(arr[cpt]))
                myTotal += JS_BASICS.nestedSum(arr[cpt]);
            else if(typeof arr[cpt] === "number")
                myTotal += arr[cpt];

        return myTotal;
    };

    global.JS_BASICS = JS_BASICS;
}(this));
