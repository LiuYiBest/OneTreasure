<template>
  <button class="one-button">按钮</button>
</template>

<scrtpt>
export default {
}
</scrtpt>


<style lang="scss">
.one-button {
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}



</style>
