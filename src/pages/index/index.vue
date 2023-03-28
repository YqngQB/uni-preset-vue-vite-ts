<template>
    <view class="content">
        <image class="logo" src="/static/logo.png" />
        <view class="text-area">
            <text class="title color-red">
                {{ title }}
            </text>
            <uni-view class="flex-c color-red w-200 h-200 shadow-md center rounded-md">
                这是内容区
            </uni-view>
            <view v-for="(item, index) in 3" :key="index">
                {{ item }}
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const title = ref('Hello');
</script>

<style lang="scss" scoped>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo {
        height: 200rpx;
        width: 200rpx;
        margin: 200 rpx auto 50 rpx;
    }

    .text-area {
        display: flex;
        justify-content: center;
    }

    .title {
        font-size: 36rpx;
        color: #8f8f94;
    }
</style>
