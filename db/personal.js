db = connect("localhost:27017/personal");

db.personal.drop()

db.personal.insertMany([
    {
    1:{
        name: 'jack',
        age: 77,
        no_in_house: 2
        },
        2:{
        name: 'sally',
        age: 37,
        no_in_house: 4
        },
        3:{
        name: 'femi',
        age: 27,
        no_in_house: 1
        }
    }])