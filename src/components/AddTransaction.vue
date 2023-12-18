<script setup lang="ts"></script>

<template>
  <div>
    <h3 class="border-b border-[#bbb] pb-10px mt-40px mb-10px mx-0 font-bold">新增記錄</h3>
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" placeholder="enter text..." />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount<br />
        (negative - expense, positive - income)</label
      >
      <input type="text" placeholder="enter amount..." />
    </div>
    <button class="btn focus:outline-0">新增記錄</button>
  </div>
</template>
