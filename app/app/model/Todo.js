export const todoSchema = {
    title: {
        exists: true,   // doit exister
        notEmpty: true, // doit être non vide
        escape: true    // les balises seront nettoyées.
    },
    completed: {
        exists: true,
        isBoolean: true
    }
}


