import { createRouter, createWebHistory } from "vue-router";
import ListCustomer from "../components/Customers/ListCustomer.vue";
import AddCustomer from "../components/Customers/AddCustomer.vue";
import EditCustomer from "../components/Customers/EditCustomer.vue";
import ShowCustomer from "../components/Customers/ShowCustomer.vue";
import ShowProduct from "../components/Products/ShowProduct.vue";
import AddProduct from "../components/Products/AddProduct.vue";
import ListProduct from "../components/Products/ListProduct.vue";
import EditProduct from "../components/Products/EditProduct.vue";
import ListOrder from "../components/Orders/ListOrder.vue";
import AddOrder from "../components/Orders/AddOrder.vue";
import EditOrder from "../components/Orders/EditOrder.vue";
import ShowOrder from "../components/Orders/ShowOrder.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "listcustomer",
      component: ListCustomer,
    },
    {
      path: "/add-customer",
      name: "addCustomer",
      component: AddCustomer,
    },
    {
      path: "/edit-customer",
      name: "editCustomer",
      component: EditCustomer,
    },
    {
      path: "/show-customer",
      name: "showCustomer",
      component: ShowCustomer,
    },
    {
      path: "/show-product",
      name: "showProduct",
      component: ShowProduct,
    },
    {
      path: "/add-product",
      name: "addProduct",
      component: AddProduct,
    },
    {
      path: "/edit-product",
      name: "editProduct",
      component: EditProduct,
    },
    {
      path: "/list-product",
      name: "listProduct",
      component: ListProduct,
    },
    {
      path: "/list-order",
      name: "listOrder",
      component: ListOrder,
    },
    {
      path: "/show-order",
      name: "showOrder",
      component: ShowOrder,
    },
    {
      path: "/add-order",
      name: "addOrder",
      component: AddOrder,
    },
    {
      path: "/edit-order",
      name: "editOrder",
      component: EditOrder,
    },
  ],
});

export default router;
