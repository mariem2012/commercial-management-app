<!-- ListProduct.vue -->
<template>
  <div class="container">
    <h2 class="mt-3">List of Products</h2>
    <div class="d-flex justify-content-end mb-4">
      <button class="btn btn-primary" @click="showAddProductModal">
        Add New Product
      </button>
    </div>

    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Product Name</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Category</th>
          <th scope="col">Barcode</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.barcode }}</td>
          <td>{{ product.status }}</td>
          <td class="text-center">
            <button
              class="btn btn-link p-0"
              @click="showProductDetails(product)"
              title="Details"
            >
              <i class="fas fa-eye mx-2" style="color: #17a2b8"></i>
            </button>
            <button
              class="btn btn-link p-0"
              @click="editProductModal(product)"
              title="Edit"
            >
              <i class="fas fa-edit mx-2" style="color: #ffc107"></i>
            </button>
            <button
              class="btn btn-link p-0"
              @click="deleteProduct(product)"
              title="Delete"
            >
              <i class="fas fa-trash mx-2" style="color: #dc3545"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal Components -->
    <AddProduct
      v-if="isAddProductModalOpen"
      @close="isAddProductModalOpen = false"
      @add="addProduct"
    />
    <ShowProduct
      v-if="isShowModalOpen"
      :product="selectedProduct"
      @close="isShowModalOpen = false"
    />
    <EditProduct
      v-if="editProductData"
      :product="editProductData"
      @close="editProductData = null"
      @modify="editProduct"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddProduct from "./AddProduct.vue";
import ShowProduct from "./ShowProduct.vue";
import EditProduct from "./EditProduct.vue";

// List of products
const products = ref([
  {
    name: "Product 101",
    description: "High-quality electronic gadget.",
    price: 120,
    stock: 200,
    category: "Electronics",
    barcode: "123456789012",
    status: "Active",
  },
  {
    name: "Product 102",
    description: "Stylish and comfortable chair.",
    price: 85,
    stock: 150,
    category: "Furniture",
    barcode: "345678901234",
    status: "Active",
  },
  {
    name: "Product 103",
    description: "Eco-friendly water bottle.",
    price: 20,
    stock: 300,
    category: "Kitchenware",
    barcode: "456789012345",
    status: "Inactive",
  },
  {
    name: "Product 104",
    description: "Durable and lightweight running shoes.",
    price: 95,
    stock: 80,
    category: "Footwear",
    barcode: "567890123456",
    status: "Active",
  },
]);

// State for modals
const isAddProductModalOpen = ref(false); // Renommé pour éviter le conflit
const selectedProduct = ref(null);
const isShowModalOpen = ref(false);
const editProductData = ref(null);

// Function to show product details
const showProductDetails = (product) => {
  selectedProduct.value = product;
  isShowModalOpen.value = true;
};

// Function to show add modal
const showAddProductModal = () => {
  isAddProductModalOpen.value = true;
};

// Function to add a product
const addProduct = (newProduct) => {
  products.value.push(newProduct);
  isAddProductModalOpen.value = false;
};

// Function to edit a product
const editProduct = (updatedProduct) => {
  const index = products.value.findIndex(
    (p) => p.barcode === updatedProduct.barcode
  );
  if (index !== -1) {
    products.value[index] = updatedProduct;
  }
  editProductData.value = null;
};

// Function to delete a product
const deleteProduct = (product) => {
  const confirmation = confirm(`Are you sure you want to delete this product?`);
};

// Function to open the edit modal
const editProductModal = (product) => {
  editProductData.value = { ...product };
};
</script>

<style scoped>
.fas {
  margin-right: 10px;
  cursor: pointer;
}

.fas:hover {
  color: #007bff;
}

.btn-info {
  margin-right: 10px;
}
</style>
