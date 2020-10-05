db.patientdata.insertMany([{ 'first name' : "max", "lastname": "schwarznueller", "age":32,"history":[{"disease":"cold", "treatment":"done"},{"disease":"fever","treatment":"done"}]},{"first name" : "jv", "lastname" : "venkatesh", "age":29}, {"first name" : "john", "lastname":"sena","age":40}])

db.patientdata.updateOne({'lastname':"venkatesh"},{$set:{"first name":"jeshvenkatesh","age":"25","history":[{"disease":"high fever","treatement":"done"}]}})

db.patientdata.find({"age":{"$gt":30}}).toArray()

db.patientdata.deleteMany({"history.disease":"cold"})