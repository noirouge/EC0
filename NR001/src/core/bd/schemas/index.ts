const UsersSchema = {
name: 'Users',
properties: {
    id: 'string',
    username: 'string',
    password: 'string',
    createAt: 'string',
        updateAt: 'string',
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
        createAt: 'string',
        updateAt: 'string',
    },
    primaryKey: 'id',
};




export {UsersSchema, NotesSchema,}