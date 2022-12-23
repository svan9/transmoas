class DateBase {
    constructor (dateBaseName) {
        this.extension = ".csv";
        this.Name = dateBaseName;
        this.filePath = path.join(__dirname, this.Name+this.extension);
    }
    /**
     * 
     * @returns {array<string>}
     */
    getTitle() {
        const head = this.read().split('\n')[0].split(",");
        return head;
    }
    /**
     * 
     * @param {{head: string, value: string}} title 
     * @returns 
     */
    setTitle(title) {
        var string = "";
        const head = this.read().split('\n')[0];
        if (head === "") { this.addString(title); return; }
        const file = this.read();
        this.setString(head+"\n", title);
    }
    /**
     * 
     * @param {array<string>} str 
     */
    setStringIfin(str) {
        const string = this.getString(this.getTitle()[0])
        if (string != '') 
            this.setString(this.getString({head: string, value: str[0]}), str);
    }
    /**
     * 
     * @param {string} str 
     * @param {array<string>} title 
     */
    setString(str, title) {
        var string = "";
        const file = this.read();
        title.forEach(element => {
            string += element ;
            if (title.at(-1) != element) string += ", ";
            if (title.at(-1) === element) string += "\n"; 
        });
        this.writeFull(file.replace(str, string));
    }
    /**
     * 
     * @param {{head: string, value: string}} head 
     * @returns {string}
     */
    getString(head) {
        const array = this.read().split('\n');
        const title = this.getTitle();
        const val = title.indexOf(head.head+"");
        var string = "";
        array.forEach(element => {
            let list = element.split(",");
            if (head.value+"" == list[val])
            {
                string = element;
                return; 
            }
        });
        return string;
    }
    getAll() {
        const array = this.read().split('\n');
        let all = [];
        array.forEach(e => {
            if (array.indexOf(e) != array.length-1)
                all.push(e.split(", "));
        });
        return all;
    }
    /**
     * 
     * @param {{head: string, value: string}} head 
     * @returns {array<string>}
     */
    getStringIfin(head) {
        const string = this.getString(head)
        if (string === '') 
            return [undefined, ""];
        return string.split(", ");
    }
    /**
     * 
     * @param {array<string>} head 
     */
    addStringIfin(head) {
        const string = this.getString({ head: this.getTitle()[0], value: head[0]});
        if (string === '') 
            this.addString(head);
    }
    /**
     * 
     * @param {array<string>} title 
     */
    addString(title) {
        var string = "";
        title.forEach(element => {
            string += element ;
            if (title.at(-1) != element) string += ", ";
            if (title.at(-1) === element) string += "\n";
        });
        this.write(string);
    }
    load() {
        const file = fs.openSync(this.filePath, "a+");
        fs.readFileSync(file, {encoding: "utf8"});
    }

    read() {
        const file = fs.openSync(this.filePath, "a+");
        return fs.readFileSync(file, {encoding: "utf8"});
    }
    write(data) {
        const file = fs.openSync(this.filePath, "a+");
        fs.writeFileSync(file, data, {encoding: "utf8"});
    }
    writeFull(data) {
        const file = fs.openSync(this.filePath, "w+");
        fs.writeFileSync(file, data, {encoding: "utf8"});
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
        let str = string.split(" ");
        let newStr = [];
        str.forEach(e => {
            let splited = e.split(/[\.\,\?\!\@\#\$\%\^\&\*\(\)\}\{\]\[\/\\]/);
            let symbol = e;
            newStr.push(splited[0]);
            if (splited.length >= 2) {
                for (let i in splited)
                    symbol = symbol.replace(new RegExp(splited[i], "g"), '')
                newStr.push(symbol);
            }
        });
        return newStr;
    }
      
}
