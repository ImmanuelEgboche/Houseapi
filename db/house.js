db = connect("localhost:27017/house");

db.house.drop()

db.house.insertMany([{
        1:{ 
        owner: 'jack',
        address: {
            postcode: 'cr7 7lw',
            street_address: '1 sunny road'
        }
        },
        2:{ 
        owner: 'sally',
        address: {
            postcode: 'cr2 5lw',
            street_address: '88 sunny road'
        }
        },
        3:{ 
        owner: 'femi',
        address: {
            postcode: 'cr0 1lw',
            street_address: '22 sunny road'
        }
        }
    
    }
])

