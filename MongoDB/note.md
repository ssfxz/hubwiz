# MongoDB

基于分布式文件存储的数据库


MongoDB中数据的基本单元称为文档(Document)，它是MongoDB的核心概念，由多个键极其关联的值有序的放置在一起组成，数据库中它对应于关系型数据库的行。

数据在MongoDB中以BSON（Binary-JSON）文档的格式存储在磁盘上。


## 基本操作
### 增
```
db.collection.insert(document);
db.collection.insert([doc1, doc2, ...]);

db.person.insert({name:"Liuy", age: 27});
```

### 查
```
show collections
db.collection.find();
db.collection.find(criteria,projection);

db.person.find({age:{$gt:18}},{name:1}).sort({age:1}).limit(5);
```
* criteria – 查询条件，文档类型，可选。
* projection– 返回的字段，文档类型，可选,若需返回所有字段，则忽略此参数。

### 改
```
db.collection.update(query,update,{upsert:boolean,multi:boolean});
db.collection.save(document);

db.person.update({age:{$gt:18}},{$set:{status:"A"}},{multi:true});
db.person.save({name:"Tony",age:12,gender:"man"});
```

save命令可以**更新**或**插入**一个新文档

* query：查询条件，文档，和find中的查询条件写法一致。
* update：修改内容，文档。
* upsert(可选)：如果值为true，那么当集合中没有匹配文档时，创建文档。默认false。
* multi(可选)：如果值为true，那么将更新全部符合条件的文档，否则仅更新一个文档，默认false。

### 删
```
db.collection.remove(query,justOne);

db.person.remove({status:"D"});
```
* query：BSON类型，删除文档的条件。
* justOne：布尔类型，true：只删除一个文档，false：默认值，删除所有符合条件的文档。


## 字段查询
### 相等条件
```
db.person.find({status:"A"});
```

### 比较条件
```
db.person.find({age:{$gt:40}});
```

### 数组条件
> 当字段包含数组，可以进行数组完全匹配或匹配特定的值 

```
// 数组完全匹配
db.inventory.find( { tags: [ 'fruit', 'food', 'citrus' ] } );

// 单个元素匹配
db.inventory.find( { tags: 'fruit' } );

// 特定元素匹配  特定元素匹配需要"字段.索引"形式传入参数。
db.inventory.find( { 'tags.0' : 'fruit' } );
```

### 子文档条件
```
db.mycol.find({"access.level":5});
```


## 复合查询 AND/OR
```
db.collection.find({$and:[doc1,doc2,...]})
db.collection.find({$or:[doc1,doc2,...]})

db.person.find({$and:[{age:{$gt:30}},{name:"Lucy"}]});
db.person.find({$or:[{status:"A"},{age:30}]});
```

## 游标与结果集
### cursor游标
> find命令并不直接返回结果，而是返回一个结果集的迭代器，即游标。

可以使用next方法来遍历游标

```
var myCursor = db.inventory.find( { type: "food" } );
var myDocument = myCursor.hasNext() ? myCursor.next() : null;
if (myDocument) {
    var myItem = myDocument.item;
    print(tojson(myItem));
}
```

使用forEach方法也能实现游标的遍历
```
var myCursor =  db.inventory.find( { type: "food" } );
myCursor.forEach(printjson);
```

### 结果集
限制条件  
```
db.collection.find().limit(Num)
db.person.find({},{name:1})
```
