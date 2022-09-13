const { DataStore } = require("tempDatabase");

const store = new DataStore("./data");

const CreatePhotoMutation = {
  createUser: (root, args, context, info) => {
    let todoObj = store.collection("todo");

    let idCount = todoObj.list().length;

    const newTodo = {
      id: `${idCount++}`,

      title: args.title,

      completed: args.completed,
    };

    todoObj.create(newTodo);

    return newTodo;
  },
};

const UpdateMutation = {
  // Update user detail based on id

  updatePhoto: (root, args, context, info) => {
    let todoList = store.collection("todo");

    todoList.update({
      id: args.id,

      url: args.url,
    });

    return todoList.list();
  },
};

const ReadQueryUser = {
  todos: () => store.collection("todo").list(),
};

const DeleteUserMutation = {
  deleteTodo: (root, args, context, info) => {
    let useTodoListrList = store.collection("todo");

    useTodoListrList.delete(args.id);

    return useTodoListrList.list();
  },
};

module.exports = {
  CreatePhotoMutation,
  UpdateMutation,
  ReadQueryUser,
  DeleteUserMutation,
};
