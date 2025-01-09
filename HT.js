//Hash Table js
class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }
    set(key, value) {
        let index = this._hash(key)
        if (!this.dataMap[index]) {
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key, value])
    }
    get(key) {
        let index = this._hash(key)
        if (!this.dataMap[index]) {
            return "404 Notfound!"
        }
        return this.dataMap[index].filter((i) => i[0] == key)[0][1]
    }
    keys() {
        let keys = []
        this.dataMap.forEach((index) => {
            if (index.length) {
                index.forEach(item => keys.push(item[0]))
            }
        })
        return keys;
    }
}


let myTable = new HashTable()
myTable.set("apple", 400)
myTable.set("appled", 400)
myTable.set("apples", 4000)



console.log(myTable.keys())

// Interview question regarding Hash Table
let a = [1, 3, 4]
let b = [1, 2, 5]
function isThereCommonElement(a, b) {
    let arr = {}
    a.forEach((item) => {
        arr[item] = true;
    })
    return b.some(e => arr[e])
}

console.log(isThereCommonElement(a, b))