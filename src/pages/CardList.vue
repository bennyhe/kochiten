<script setup>
import { ref } from 'vue'
import CardData from '../config/data.js'
const mark = txt => {
  if (txt) {
    return `**${txt}**`
  }
}
</script>

<template>
  <div class="page cur">
    <h2>こちら異世界転生局能力配对速查表</h2>
    <div class="card-list">
      <div
        class="card-list__item"
        v-for="(cardItem, cardKey) in CardData"
        v-bind:key="cardKey"
      >
        <p class="namejp">{{ cardItem.cardnamejp }}</p>
        <p class="namecn">{{ mark(cardItem.cardnamecn) }}</p>
        <h3>背面</h3>
        <p class="namejp name2">{{ cardItem.back.cardnamejp }}</p>
        <p class="namecn name2">{{ mark(cardItem.back.cardnamecn) }}</p>
        <p class="extra">{{ cardItem.extra }}</p>
      </div>
    </div>
  </div>
</template>