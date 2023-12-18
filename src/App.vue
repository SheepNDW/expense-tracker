<script setup lang="ts"></script>

<template>
  <div class="font-lato text-xl p-10">
    <h2 class="text-2xl font-bold">記帳</h2>
    <div class="w-[400px] my-[30px] mx-auto">
      <div>
        <h4 class="m0 uppercase font-bold">餘額</h4>
        <h1 class="tracking-1px m0 font-bold text-3xl">$788</h1>
      </div>
      <div class="inc-exp-container box-shadow">
        <div>
          <h4 class="m0 uppercase font-bold">收入</h4>
          <p class="money money-plus">+$888</p>
        </div>
        <div>
          <h4 class="m0 uppercase font-bold">支出</h4>
          <p class="money money-minus">+$888</p>
        </div>
      </div>
      <div>
        <h3 class="border-b border-[#bbb] pb-10px mt-40px mb-10px mx-0">歷史</h3>
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
    </div>
  </div>
</template>

<style>
body {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
}

.inc-exp-container {
  background-color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.inc-exp-container > div {
  flex: 1;
  text-align: center;
}

.inc-exp-container > div:first-of-type {
  border-right: 1px solid #dedede;
}

label {
  display: inline-block;
  margin: 10px 0;
}

input[type='text'],
input[type='number'] {
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
}

.delete-btn {
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.list li:hover .delete-btn {
  opacity: 1;
}
</style>
