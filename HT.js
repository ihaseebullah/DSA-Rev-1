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
        return this.dataMap[index].filter((i)=> i[0]==key)[0][1]
    }
}


let myTable = new HashTable()
myTable.set("apple", 400)
myTable.set("appled", 400)
myTable.set("apples", 4000)



console.log(myTable.get('apples'))