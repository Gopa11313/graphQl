const { DataStore } = require("tempDatabase");

const store = new DataStore("./data");

const CreatePhotoMutation = {
  createUser: (root, args, context, info) => {
    let photoObj = store.collection("photo");

    let idCount = photoObj.list().length;

    const newPhoto = {
      id: `${idCount++}`,

      title: args.title,

      url: args.url,

      thumbnailUrl: args.thumbnailUrl,
    };

    photoObj.create(newPhoto);

    return newPhoto;
  },
};

const UpdateMutation = {
  // Update user detail based on id

  updatePhoto: (root, args, context, info) => {
    let photoList = store.collection("photo");

    photoList.update({
      id: args.id,

      url: args.url,
    });

    return photoList.list();
  },
};

const ReadQueryUser = {
  photos: () => store.collection("photo").list(),
};

const DeleteUserMutation = {
  deletePhoto: (root, args, context, info) => {
    let usephotoListrList = store.collection("photo");

    usephotoListrList.delete(args.id);

    return usephotoListrList.list();
  },
};

module.exports = {
  CreatePhotoMutation,
  UpdateMutation,
  ReadQueryUser,
  DeleteUserMutation,
};
