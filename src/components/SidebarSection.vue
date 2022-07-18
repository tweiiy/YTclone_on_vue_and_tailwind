<template>
  <section :class="'py-2 border-b' || $attrs.class"> <!-- 1 список -->
    <slot />
  </section>
</template>