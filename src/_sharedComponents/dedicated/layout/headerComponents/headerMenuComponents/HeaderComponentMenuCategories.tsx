import React from 'react';
import {Link} from "react-router-dom";
import {static_categories} from "../../../../../static_data/categories";
import {M_Category} from "../../../../../_models/shared/Category";
import {M_Subcategory} from "../../../../../_models/shared/Subcategory";
import {S_IconApple, S_IconCarrot, S_IconCoffee} from "../../../../shared/icons/Icons";

const HeaderComponentMenuCategories = () => {

    let categories = static_categories;

    const renderIcon = (categoryName:string) =>{
       if(categoryName.includes('Napoje')) return <S_IconCoffee/>
       else if(categoryName.includes('Owoce')) return <S_IconApple/>
       else if(categoryName.includes('Warzywa')) return <S_IconCarrot/>
    } ;

    return (
        <div id={'header-component__menu__categories'}>
            <ul>
                {
                    categories.map((category: M_Category) =>
                        <li>
                            <Link to={category.category_url}>
                                {renderIcon(category.category_name)} {category.category_name}
                            </Link>
                            {
                                (Boolean(category.subcategories) && category.subcategories.length > 0) &&
                                <ul>
                                    {
                                        category.subcategories.map((subcategory: M_Subcategory) =>
                                            <li>
                                                <Link to={subcategory.subcategory_url}>
                                                    {subcategory.subcategory_name}
                                                </Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default HeaderComponentMenuCategories;