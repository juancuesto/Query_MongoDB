
db.restaurants.find().pretty() // ejercicio 1 
db.restaurants.find({},{restaurant_id:1,name:1,borough:1,cuisine:1}) //ejercicio2
db.restaurants.find({},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0})  //ejercicio 3
db.restaurants.find({},{restaurant_id:1,name:1,borough:1,cuisine:1,"address.zipcode" :1,_id:0}) // ejercicio 4 
db.restaurants.find({'borough':"Bronx"}) // ejercicio 5
db.restaurants.find({'borough':"Bronx"}).limit(5).pretty() // ejercicio 6
db.restaurants.find({'borough':"Bronx"}).skip(5).limit(5).pretty() //ejercicio 7 
db.restaurants.find({'grades.score':{'$gt':90}}).pretty() // ejercicio 8
db.restaurants.find({$and:[{'grades.score':{$gt:80}},{'grades.score':{ $lt:100}}]}).pretty() // ejercicio 9
db.restaurants.find({'address.coord.0':{$lt:-95.754168}}).pretty() // ejercicio 10
db.restaurants.find({$and : [{"cuisine" : {$ne : "American "}},{'grades.score':{$gt:70}},{'address.coord.0':{$lt:-65.754168}}]}) //ejercicio 11
db.restaurants.find({cuisine:{$ne:'American '},'grades.score':{$gt:70},'address.coord.1':{$lt:-65.754168}})// ejercicio 12 



db.restaurants.find({$and:[{'cuisine' :{$ne:'American '}},{'grades.grade':{$eq:'A'}},{'borough':{$ne:'Brooklyn'}}]}).sort({cuisine:-1}) //ejercicio 13
db.restaurants.find({name:{$regex:'Wil.*'}},{restaurant_id:1,name:1,borough:1,cuisine:1}).sort({name:-1})// ejercicio 14
db.restaurants.find({name:{$regex:'.*ces'}},{restaurant_id:1,name:1,borough:1,cuisine:1}).sort({name:-1})// ejercicio 15
db.restaurants.find({name:{$regex:'.*Reg.*'}},{restaurant_id:1,name:1,borough:1,cuisine:1}).sort({name:-1})// ejercicio 16
db.restaurants.find({'borough':'Bronx',cuisine:{$in:['American ','Chinese']}})// ejercicio 17
db.restaurants.find({$and:[{borough:'Bronx'},{$or:[{cuisine:'American '},{cuisine:'Chinese'}]}]})// ejercicio 17
db.restaurants.find({$or:[{borough:'Bronxor Bronx'},{borough:'Queens'},{borough:'Staten Island'}]},{restaurant_id:1,name:1,borough:1,cuisine:1}).sort({borough:-1})// ejercicio 18
db.restaurants.find({borough:{$nin:["Staten Island","Queens","Brooklyn"]}},{restaurant_id:1,name:1,borough:1,cuisine:1}).sort({borough:1}) //ejercicio 19
db.restaurants.find({'grades.score':{$lte:10}},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0})// ejercicio 20
db.restaurants.find({$nor:[{cuisine:'Seafood'},{cuisine:{$in:['American ','Chinese']}},{name:/^Will/}]},{restaurant_id:1,name:1,borough:1,cuisine:1})// ejercicio 21
db.restaurants.find({'grades':{$elemMatch:{'grade':'A','date':ISODate ("2014-08-11T00:00:00Z"),'score':11}}}, {_id:0, restaurant_id:1, name:1, grades:1})//ejercicio 22
db.restaurants.find({$and:[{'grades.1.grade':'A'},{'grades.1.score':9},{"grades.1.date": ISODate("2014-08-11T00:00:00Z")}]},{_id:0, restaurant_id:1, name:1, grades:1})//ejercicio 23
db.restaurants.find({$and:[{'address.coord.1':{$gt:42}},{'address.coord.1':{$lt:52}}]},{_id:0,restaurant_id:1,name:1,address:1})// ejercicio 24
db.restaurants.find().sort({name:1})// ejercicio 25
db.restaurants.find().sort({name:-1})// ejercicio 26
db.restaurants.find({},{_id:0,cuisine:1,borough:1}).sort({cuisine:1,borough:-1})// ejercicio 27 
db.restaurants.find({'address.street':{$regex:/Street/}},{address:1,name:1}).pretty()// ejercicio 28
db.restaurants.find({'address.street':{$ne:{$regex:/Street/}}},{address:1,name:1}).pretty()// ejercicio 28
db.restaurants.find({'address.coord':{$type:'double'}})//ejercicio 29
db.restaurants.find({'grades':{$elemMatch:{'score':{$mod:[7,0]}}}},{_id:0, restaurant_id:1, name:1, grades:1})//ejercicio 30
db.restaurants.find({'name':{$regex:/mon/}},{_id:0, restaurant_id:1, name:1,borough:1, cuisine:1,'address.coord':1})//ejercicio 31
db.restaurants.find({'name':{$regex:/^Mad/}},{_id:0, restaurant_id:1, name:1,borough:1, cuisine:1,'address.coord':1})
