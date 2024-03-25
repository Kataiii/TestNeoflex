import { categories, items } from "../assets/entities/items";
import Category from "../modules/Category";

const CatalogPage: React.FC = () => {
    return (
        <>
            {
                categories.map((item, index) => {
                    return <Category key={index} name={item} items={items.filter(item => item.category_id === index)} />
                })
            }
        </>
    )
}

export default CatalogPage;