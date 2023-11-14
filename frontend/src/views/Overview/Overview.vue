<template>
    <div class="content">
        <div class="total">
            <p>total</p>
        </div>
        <div class="recent">
            <p>recent message</p>
        </div>
        <div class="depart">
            <p>department chart</p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
</script>
  
<style lang="scss" scoped>
.content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    .total {
        width: 48%;
        height: 45%;

    }

    .recent {
        width: 48%;
        height: 45%;

        .message {
            position: relative;
            z-index: 2;
            justify-content: start;
            background-color: #fff;
            color: rgb(11, 35, 117);
            font-size: 16px;
            width: 100%;
            height: 13%;
            // padding: 2.6%;
            box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
        }
    }

    .depart {
        width: 100%;
        height: 55%;
    }
}
</style>