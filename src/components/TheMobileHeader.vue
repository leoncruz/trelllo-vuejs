<template>
  <div class="md:hidden relative inline-block w-full">
    <span
      class="w-[fit-content] inline-block p-4"
      @click="toggleMenu"
    >
      <i data-feather="menu"></i>
    </span>

    <transition>
      <div
        v-if="isOpen"
        class="absolute bg-slate-100 shadow flex-col min-w-full"
        :class="classOptions"
      >
        <app-link
          path="/"
          name="Home"
        />
        <app-link
          path="/about"
          name="About"
        />
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
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import AppLink from 'components/AppLink.vue';

const isOpen = ref(false);

const classOptions = computed(() => {
  return {
    flex: isOpen.value ? true : false,
    hidden: isOpen.value ? false : true,
    'mobile-menu-close': isOpen.value ? true : false,
    'mobile-menu-open': isOpen.value ? false : true
  };
});

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
.v-enter-active {
  transform-origin: top;
  animation: showMenu 0.5s ease;
}

.v-leave-active {
  transform-origin: top;
  animation: closeMenu 0.5s;
}

@keyframes showMenu {
  0% {
    transform: scaleY(0);
  }

  80% {
    transform: scaleY(1.1);
  }

  100% {
    transform: scaleY(1);
  }
}

@keyframes closeMenu {
  0% {
    transform: scaleY(1);
  }

  20% {
    transform: scaleY(1.1);
  }

  100% {
    transform: scaleY(0);
  }
}
</style>
