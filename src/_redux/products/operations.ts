import actions from "./actions";
import {StaticService} from "../../services/StaticService";

export const getProducts = () =>
    async (dispatch: any) => {
        const results: any = await StaticService.getStaticProducts();
        if (results.status < 300)
            results.data.map((item: any) => dispatch(actions.add(item)));
    };

export const addProduct = (item: any) =>
    async (dispatch: any) => await dispatch(actions.add(item));

export const editProduct = (item: any) =>
    async (dispatch: any) => await dispatch(actions.edit(item));

export const deleteProduct = (id: number) =>
    async (dispatch: any) => await dispatch(actions.del(id));


