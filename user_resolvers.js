const { DataStore } = require("tempDatabase");

const store = new DataStore("./data");

const CreateMutation = {
  createUser: (root, args, context, info) => {
    let userObj = store.collection("users");

    let idCount = userObj.list().length;

    const newUser = {
      id: `${idCount++}`,

      name: args.name,

      username: args.username,

      email: args.email,

      phone: args.phone,
    };

    userObj.create(newUser);

    return newUser;
  },
};

const UpdateMutation = {
  // Update user detail based on id

  updateUser: (root, args, context, info) => {
    let userList = store.collection("users");

    userList.update({
      id: args.id,

      name: args.name,
    });

    return userList.list();
  },
};

const ReadQueryUser = {
  users: () => store.collection("users").list(),
};

const DeleteUserMutation = {
  deleteUser: (root, args, context, info) => {
    let userList = store.collection("users");

    userList.delete(args.id);

    return userList.list();
  },
};

module.exports = {
  Mutation,
  UpdateMutation,
  ReadQueryUser,
  DeleteUserMutation,
};
