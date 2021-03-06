'use strict';
var bookshelf = require('bookshelf')(require('./database'))
  , User
  , UserFriend

UserFriend = bookshelf.Model.extend({
    tableName: 'auth_user_friend',
    idAttribute:'auth_user_friend_id'
});

User = bookshelf.Model.extend({
    tableName: 'auth_user',
    idAttribute:'auth_user_id',
    friends: function(){
        return this.belongsToMany(User, 'auth_user_id','auth_friend_id')
                    .through(UserFriend,'auth_user_id','auth_friend_id');
    }
});


module.exports = User;
