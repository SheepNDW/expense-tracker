<script setup lang="ts"></script>

<template>
  <div>
    <h3 class="border-b border-[#bbb] pb-10px mt-40px mb-10px mx-0">歷史記錄 History</h3>
    <ul class="list">
      <li
        class="border-minus bg-white box-shadow text-gray-800 flex justify-between relative p-2.5 my-2.5"
      >
        買飯
        <span>$-100</span>
        <button class="delete-btn">x</button>
      </li>
      <li
        class="border-plus bg-white box-shadow text-gray-800 flex justify-between relative p-2.5 my-2.5"
      >
        授課
        <span>$800</span>
        <button class="delete-btn">x</button>
      </li>
    </ul>
  </div>
</template>
