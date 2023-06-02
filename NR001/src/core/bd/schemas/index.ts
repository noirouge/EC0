const UsersSchema = {
  name: 'Users',
  properties: {
    id: 'string',
    username: 'string',
    password: 'string',
    createAt: 'date',
    updateAt: 'date',
  },
  primaryKey: 'id',
};

const NotesSchema = {
  name: 'Notes',
  properties: {
    id: 'string',
    title: 'string',
    text: 'string',
    userId: 'string',
    createAt: 'date',
    updateAt: 'date',
  },
  primaryKey: 'id',
};

export {UsersSchema, NotesSchema};
