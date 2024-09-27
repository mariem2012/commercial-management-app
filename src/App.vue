<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="container collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto me-3">
        <li class="nav-item">
          <router-link
            class="nav-link d-flex align-items-center"
            to="/"
            exact
            active-class="text-primary"
          >
            <i class="fa-solid fa-users mx-2"></i>
            <span>Customers</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            class="nav-link d-flex align-items-center"
            to="/list-product"
            active-class="text-primary"
          >
            <i class="fa-solid fa-box-open mx-2"></i>
            <span>Products</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            class="nav-link d-flex align-items-center"
            to="/list-order"
            active-class="text-primary"
          >
            <i class="fa-solid fa-cart-shopping mx-2"></i>
            <span>Orders</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script setup></script>
<style scoped></style>
