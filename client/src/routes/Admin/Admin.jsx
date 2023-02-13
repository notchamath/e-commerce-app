import AdminProductsForm from "../../components/admin-products-form/AdminProductsForm";
import AdminProductsList from "../../components/admin-products-list/AdminProductsList";

import './Admin.scss';

export default function Admin() {
  return (
    <div className="admin__container">
        <AdminProductsForm/>
        <AdminProductsList/>
    </div>
  )
}