db.persons.aggregate([ 
    { $match: {gender: "female"}},
    { $group: {_id: { state: "$location.state", totalPersons: { $sum: 1} } }},
    { $sort: {totalPersons: 1} } 
]).pretty()


db.persons.aggregate([ 
    { $match: {gender: "female"}},
    { $group: {_id: "$location.state", totalPersons: { $sum: ""}  }} 
]).pretty()