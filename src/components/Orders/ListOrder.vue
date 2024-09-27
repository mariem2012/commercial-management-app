<!-- ListOrder.vue -->
<template>
  <div class="container">
    <h2 class="mt-3">List of Orders</h2>
    <div class="d-flex justify-content-end mb-4">
      <router-link to="/add-order" class="btn btn-primary"
        >Add New Order</router-link
      >
    </div>

    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Customer</th>
          <th scope="col">Delivery Address</th>
          <th scope="col">Track Number</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td>{{ order.date }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.deliveryAddress }}</td>
          <td>{{ order.trackNumber }}</td>
          <td>{{ order.status }}</td>
          <td class="text-center">
            <router-link
              :to="`/show-order/${order.trackNumber}`"
              class="btn btn-link p-0"
              title="View Details"
            >
              <i class="fas fa-eye mx-2" style="color: #17a2b8"></i>
            </router-link>
            <router-link
              :to="`/edit-Order/${order.trackNumber}`"
              class="btn btn-link p-0"
              title="Edit"
            >
              <i class="fas fa-edit mx-2" style="color: #ffc107"></i>
            </router-link>
            <button
              class="btn btn-link p-0"
              @click="deleteOrder(order)"
              title="Delete"
            >
              <i class="fas fa-trash mx-2" style="color: #dc3545"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const orders = ref([
  {
    date: "10/08/2024",
    customer: "Michael Johnson",
    deliveryAddress: "15 Elm St, Boston, MA",
    trackNumber: "TN101",
    status: "Delivered",
  },
  {
    date: "11/08/2024",
    customer: "Emily Brown",
    deliveryAddress: "98 Cedar St, Miami, FL",
    trackNumber: "TN102",
    status: "Shipped",
  },
  {
    date: "12/08/2024",
    customer: "David Wilson",
    deliveryAddress: "231 Maple Ave, San Francisco, CA",
    trackNumber: "TN103",
    status: "Processing",
  },
  {
    date: "13/08/2024",
    customer: "Sarah Taylor",
    deliveryAddress: "675 Birch Rd, Austin, TX",
    trackNumber: "TN104",
    status: "Cancelled",
  },
  {
    date: "14/08/2024",
    customer: "Christopher Anderson",
    deliveryAddress: "324 Spruce Ln, Seattle, WA",
    trackNumber: "TN105",
    status: "Delivered",
  },
]);

const deleteOrder = (order) => {
  const confirmation = confirm(`Are you sure you want to delete this order?`);
};
</script>

<style scoped>
.table th,
.table td {
  vertical-align: middle;
  text-align: center;
}
</style>
