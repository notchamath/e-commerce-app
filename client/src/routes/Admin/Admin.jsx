import ProductsForm from "../../components/products-form/ProductsForm";
import ProductsList from "../../components/products-list/ProductsList";

export default function Admin() {
  return (
    <div className="admin__container">
        <ProductsForm/>
        <ProductsList/>
    </div>
  )
}