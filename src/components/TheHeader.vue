<template>
  <header>
    <nav class="md:shadow mb-4">
      <div
        class="hidden md:visible mx-auto max-w-7xl md:flex items-center justify-between p-6"
      >
        <div class="space-x-12">
          <app-link
            path="/"
            name="Home"
          />
          <app-link
            path="/about"
            name="About"
          />
        </div>
        <div class="space-x-12">
          <app-link
            path="/users/signin"
            name="Sign In"
            class=""
          />
          <app-link
            path="/users/signup"
            name="Sign Up"
          />
        </div>
      </div>

      <the-mobile-header />
    </nav>
  </header>
</template>

<script setup lang="ts">
import AppLink from 'components/AppLink.vue';
import TheMobileHeader from 'components/TheMobileHeader.vue';
</script>

<style scoped></style>
