<template>
    <div>
        <h3>Wire frame</h3>
        <div class="image-container">
            <img v-for="(image, index) in images" :key="index" :src="image" />
        </div>
    </div>
</template>

<script>
export default {
    props: ["images"],
};
</script>