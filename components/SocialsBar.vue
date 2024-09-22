<template>
    <div class="socials">
        <ul>
            <li v-for="icon in socialIcons">
                <a :href="icon.link" :aria-label="icon.desc">
                    <i :class="icon.icon"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
interface SocialIcon {
    icon: string
    link: string
    desc: string
}

const socialIcons = ref<SocialIcon[]>([
    {icon: 'pi pi-github', link: 'https://github.com/avaricz', desc: 'My Github'},
    {icon: 'pi pi-linkedin', link: 'https://www.linkedin.com/in/adam-h%C3%A1dl-56650b295/', desc: 'My Linkedin'}
])

</script>

<style lang="scss" scoped>
    .socials {
        ul{
            display: flex;
            align-items: center;
            gap: 1rem;
            li{
                .pi {
                    font-size: 1.5rem;
                    color: $social-icons;
                    &:hover {
                        cursor: pointer;
                        color: $social-icons-hover;
                    }
                }
            }
        }
    }
    @media screen and (max-width: $small-screen) {
        .socials{
            margin-top: 2rem;
        }
    }
</style>