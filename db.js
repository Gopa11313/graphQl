const {

    DataStore

} = require('tempDatabase');

const store = new DataStore('./data');

module.exports = {

    users: store.collection('users')

};