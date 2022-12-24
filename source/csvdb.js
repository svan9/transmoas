// db for static js
class CSV {
    /**
     * 
     * @param {array<array<string>>} array 
     */
    constructor (array) {
        this.fullArray = array;
    }
    /**
     * 
     * @param {{title: string, value: string}} form 
     */
    getString(form) {
        const num = this.fullArray[0].indexOf(form.title);
        let out = [];
        this.fullArray.forEach(e => {
            if (e[num] == form.value)
                { out = e; return; }
        });
        if (out.length < 1)
            return [undefined, ''];
        return out;
    }

    static transToEng(word) {
        const a = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"А","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"};
        return word.split('').map(function (char) {
            return a[char] || char;
        }).join("");
    }
    static transToRus(word) {
        const a = {'sch': 'щ', 'yo': 'ё', 'ch': 'ч', 'sh': 'ш', 'yu': 'ю', 'ya': 'я', 'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д','e': 'е', 'z': 'з', 'и': 'i', 'y': 'й', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'f': 'ф', 'h': 'х', 'c': 'ц', 'y': 'ы', 'j': 'ж', 'i': 'и', 'q':'ку', 'w':'в'};
        for (const [key, value] of Object.entries(a)) {
            word = word.replaceAll(key, value);
        }
        return word;
    }
    static modernSplit(string) {
        const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
        const arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
        const special = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~', '\\', '.', ',', '/', '*', '(', ')', '[', ']', '{', '}', ';', '\'', '"', '<', '>', '|', ';', '`'];
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        let out_string = [];
        let typelast = "null";
        Array.from(string).forEach(e => {
            if (arr_en.indexOf(e) > -1 || arr_EN.indexOf(e) > -1 || arr_ru.indexOf(e) > -1 || arr_RU.indexOf(e) > -1) {
                if (typelast == "char")
                    out_string[out_string.length-1] += e;
                else 
                    out_string.push(e);
                typelast = "char";
            }
            else if (special.indexOf(e) > -1) {
                if (typelast == "special")
                    out_string[out_string.length-1] += e;
                else 
                    out_string.push(e);
                typelast = "special";
                
            }
            else if (numbers.indexOf(e) > -1) {
                if (typelast == "number")
                    out_string[out_string.length-1] += e;
                else 
                    out_string.push(e);
                typelast = "number";
                
            }
            else if (e == ' ') {
                if (typelast == "space")
                    out_string[out_string.length-1] += ' ';
                else 
                    out_string.push(e);
                typelast = "space";
            }
            else if (e == '\n') {
                if (typelast == "space")
                    out_string[out_string.length-1] += ' ';
                else 
                    out_string.push(e);
                typelast = "space";
            }
        });
        return out_string;
    }
}
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

String.prototype.replaceMoreFromArray = function(searchValues, replaceValue) {
    let str = this.toString();
    const array = searchValues;
    for (let i = 0; i < array.length; i++)
        str = str.replace(array[i], replaceValue);
    return str;
}
String.prototype.replaceMore = function(searchValues, replaceValue) {
    let str = this.toString();
    const array = Array.from(searchValues);
    for (let i = 0; i < array.length; i++)
        str = str.replace(array[i], replaceValue);
    return str;
}
String.prototype.parseCSV = function() {
    const lineArray = this.split('\n');
    let endStr = [];
    lineArray.forEach(el => {
        let str = [];
        let array = el.split(", ");
        array.forEach(e => {
            if (e.startsWith("[") && e.endsWith("]")) {
                str.push(e.replaceMore("[]", "").split('|'));
            }
            else str.push(e);
        });
        endStr.push(str);
    });
    return new CSV(endStr);
}


