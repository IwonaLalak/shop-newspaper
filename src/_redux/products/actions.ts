import types from "./types";

// todo: change any to object interface od product

const add = (item: any) => ({
    type: types.ADD,
    item
});

const edit = (item: any) => ({
    type: types.EDIT,
    item
});

const del = (id: number) => ({
    type: types.DELETE,
    id
});

export default {add, edit, del}
