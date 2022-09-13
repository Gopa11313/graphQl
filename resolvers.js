const {

    DataStore

} = require('tempDatabase');

const store = new DataStore('./data');

const Query = {

    users: () => store.collection('users').list(),

}

module.exports = {

    Query 

}