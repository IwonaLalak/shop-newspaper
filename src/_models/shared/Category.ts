import {M_Subcategory} from "./Subcategory";

export interface M_Category {
    category_id: number,
    category_name: string,
    category_url: string,
    subcategories: M_Subcategory[]
}