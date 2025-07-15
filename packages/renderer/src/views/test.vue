<template>
    <div class="page_wrapper">
        <!-- 组件页面 -->
        <div class="page_card">
            <div class="card_title">组件样式</div>
            <el-button>按钮</el-button>
        </div>
        <el-divider />
        <div class="page_card">
            <div class="card_title">功能调试</div>
            <el-button @click="onOpenNewWindow">打开新的窗口</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineOptions({ name: 'testView' })
    const onOpenNewWindow = () => {
        // 打开新的窗口
        console.log('打开新的窗口');
    };
</script>

<style lang="scss" scoped>
.page_wrapper {
    .page_card {
        padding: 20px 20px 0;
        .card_title {
            font-size: 14px;
            margin-bottom: 8px;
        }
    }
}
</style>