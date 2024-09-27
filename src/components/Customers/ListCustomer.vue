<template>
  <div class="container">
    <h2 class="mt-3">List of Customers</h2>
    <div class="d-flex justify-content-end mb-4">
      <button class="btn btn-primary" @click="openAddCustomerModal">
        Add New Customer
      </button>
    </div>

    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <td>{{ customer.name }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td class="text-center">
            <button
              class="btn btn-link p-0"
              @click="openCustomerDetails(customer)"
              title="Details"
            >
              <i class="fas fa-eye mx-2" style="color: #17a2b8"></i>
            </button>
            <button
              class="btn btn-link p-0"
              @click="openEditCustomerModal(customer)"
              title="Edit"
            >
              <i class="fas fa-edit mx-2" style="color: #ffc107"></i>
            </button>
            <button
              class="btn btn-link p-0"
              @click="confirmDeleteCustomer(customer)"
              title="Delete"
            >
              <i class="fas fa-trash mx-2" style="color: #dc3545"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal Components -->
    <AddCustomer
      v-if="isAddCustomerModalOpen"
      @close="isAddCustomerModalOpen = false"
      @add="addNewCustomer"
    />
    <ShowCustomer
      v-if="isShowModalOpen"
      :customer="selectedCustomer"
      @close="isShowModalOpen = false"
    />
    <EditCustomer
      v-if="editCustomerData"
      :customer="editCustomerData"
      @close="editCustomerData = null"
      @modify="updateCustomer"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ShowCustomer from "./ShowCustomer.vue";
import AddCustomer from "./AddCustomer.vue";
import EditCustomer from "./EditCustomer.vue";

// List of customers
const customers = ref([
  {
    name: "Olivia Brown",
    address: "742 Evergreen Terrace, Springfield, IL",
    email: "oliviabrown@example.com",
    phone: "321-654-9870",
  },
  {
    name: "Lucas Wilson",
    address: "98 River Dr, Miami, FL",
    email: "lucaswilson@example.com",
    phone: "432-765-1098",
  },
  {
    name: "Sophia Taylor",
    address: "150 Oak Ave, Denver, CO",
    email: "sophiataylor@example.com",
    phone: "543-876-2109",
  },
  {
    name: "Liam Anderson",
    address: "320 Elm St, Boston, MA",
    email: "liamanderson@example.com",
    phone: "654-987-3210",
  },
  {
    name: "Ava Martinez",
    address: "780 Maple St, Seattle, WA",
    email: "avamartinez@example.com",
    phone: "765-098-4321",
  },
  {
    name: "Noah Davis",
    address: "555 Cedar St, Austin, TX",
    email: "noahdavis@example.com",
    phone: "876-109-5432",
  },
  {
    name: "Emma Harris",
    address: "230 Pine St, Las Vegas, NV",
    email: "emmaharris@example.com",
    phone: "987-210-6543",
  },
  {
    name: "Ethan Clark",
    address: "890 Birch St, Orlando, FL",
    email: "ethanclark@example.com",
    phone: "098-321-7654",
  },
  {
    name: "Mia Robinson",
    address: "123 Walnut St, Portland, OR",
    email: "miarobinson@example.com",
    phone: "109-432-8765",
  },
  {
    name: "James Thompson",
    address: "456 Chestnut St, Minneapolis, MN",
    email: "jamesthompson@example.com",
    phone: "210-543-9876",
  },
]);

// State for modals
const isAddCustomerModalOpen = ref(false);
const selectedCustomer = ref(null);
const isShowModalOpen = ref(false);
const editCustomerData = ref(null);

// Function to open customer details modal
const openCustomerDetails = (customer) => {
  selectedCustomer.value = customer;
  isShowModalOpen.value = true;
};

// Function to open add customer modal
const openAddCustomerModal = () => {
  isAddCustomerModalOpen.value = true;
};

// Function to add a new customer
const addNewCustomer = (newCustomer) => {
  customers.value.push(newCustomer);
  isAddCustomerModalOpen.value = false;
};

// Function to update an existing customer
const updateCustomer = (updatedCustomer) => {
  const index = customers.value.findIndex(
    (c) => c.email === updatedCustomer.email
  );
  if (index !== -1) {
    customers.value[index] = updatedCustomer;
  }
  editCustomerData.value = null;
};

// Function to delete a customer
const confirmDeleteCustomer = (customer) => {
  if (confirm(`Are you sure you want to delete this customer?`)) {
    customers.value = customers.value.filter((c) => c !== customer);
  }
};

// Function to open the edit customer modal
const openEditCustomerModal = (customer) => {
  editCustomerData.value = { ...customer };
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
