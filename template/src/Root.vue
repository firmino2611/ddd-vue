<template>
  <span id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 " align="center">
          <router-view/>
        </div>
        <div class="col-md-6 " align="center">
          <ul class="list-group list-group-horizontal">
            <router-link class="list-group-item" to="/">Dashboard</router-link>
            <router-link class="list-group-item" to="/tasks">List Tasks</router-link>
            <router-link class="list-group-item" to="/login">Login</router-link>
            <router-link class="list-group-item" to="/register">Register</router-link>
          </ul>
        </div>
      </div>
    </div>
  </span>
</template>

