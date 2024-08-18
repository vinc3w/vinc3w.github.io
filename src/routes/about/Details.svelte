<script>
    import Separator from '$lib/components/Separator.svelte';

</script>

<Separator title="About Me" />

<section>

    <div class="details wrapper">

        <a title="go to my roblox profile" target="_blank" href="https://www.roblox.com/users/2289176113/profile" class="img-container">
            <img src="/images/avatar.png" alt="my roblox avatar">
        </a>

        <div class="text">
            <div class="title"><span class="bold">Hello 👋</span></div>
            <p>
                My name is <span class="bold">Vincent Har</span> and I am a <span class="bold">full-stack Web Developer</span>, based in Selangor. I am currently studying for my Diploma in Information Technology at Sunway College. I have been teaching myself web development for 2 years and was taught in college for almost 2 years.
            </p>
            <p>
                I was born and raised in Malaysia, Ipoh, a city renowned for its rich heritage and vibrant culture. I am often fascinated by what others has built and has inspired me to build something fun as well. I am a perfectionist that always tries to be perfect in what I enjoy doing. 
            </p>
            <div class="heading"><span class="bold">My hobbies ❤️</span></div>
            <ul>
                <li><span class="emoji">💎</span> Playing <span class="bold">Minecraft</span></li>
                <li><span class="emoji">⬜</span> Playing <span class="bold">Roblox</span></li>
                <li><span class="emoji">✨</span> Playing <span class="bold">Genshin Impact</span></li>
                <li><span class="emoji">✌️</span> Listening to <span class="bold">Twice</span> or <span class="bold">Laufey</span> 🎵</li>
                <li><span class="emoji">🏋</span> Working out 💪</li>
                <li><span class="emoji">🍚</span> Learning <span class="bold">Korean</span> on Duolingo</li>
                <li><span class="emoji">🎬</span> Watching <span class="bold">Anime</span> and <span class="bold">K-Drama</span></li>
            </ul>
        </div>

    </div>

</section>

<style lang="scss">
    .details {
        display: flex;
        align-items: center;
        gap: 30px;

        @media (width < $about-collapse-width) {
            flex-wrap: wrap;
        }
    }

    .img-container {
        width: 80%;
        padding: 70px;

        @media (width < $about-collapse-width) {
            width: 100%;
            padding: 0 20%;
        }
        
        img {
            width: 100%;
            transition: transform 70ms linear;
            
            &:hover {
                transform: scale(1.1) rotate(-5deg);
            }
        }
    }

    .text {
        width: 100%;

        .title {
            font-size: 50px;
            line-height: 50px;
        }

        p {
            font-size: 14px;
            margin-top: 10px;
        }

        .heading {
            margin: 10px 0;
        }

        li {
            margin-bottom: 5px;
            font-size: 14px;
            list-style-type: none;
        }
    }
</style>
