<script>
    import { page } from '$app/stores';

    let showNav = false;
</script>

<header>
    <div class="block"></div>
    <div class="wrapper">
        <div class="title">
            <a title="home" href="/">
                <span class="bold">vinc3w</span>
            </a>
        </div>
        <!-- For covering the nav when is not shown in mobile -->
        <div class="top-nav-cover"></div>
        <nav class="desktop">
            <ul>
                <li>
                    <a title="my projects" href="/" class:on={$page.url.pathname === '/'}>Projects</a>
                </li>
                <li>
                    <a title="about me" href="/about" class:on={$page.url.pathname === '/about'}>About</a>
                </li>
                <li>
                    <a title="my resume" target="_blank" href="/documents/resume.pdf">Resume</a>
                </li>
            </ul>
        </nav>
        <button class="hamburger" class:x={showNav} on:click={() => showNav = !showNav}>
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
        </button>
    </div>
    <nav class="mobile" class:show={showNav}>
        <ul>
            <li>
                <a title="my projects" href="/" class:on={$page.url.pathname === '/'}>Projects</a>
            </li>
            <li>
                <a title="about me" href="/about" class:on={$page.url.pathname === '/about'}>About</a>
            </li>
            <li>
                <a title="my resume" target="_blank" href="/documents/resume.pdf">Resume</a>
            </li>
        </ul>
    </nav>
</header>

<style lang="scss">
    header {
        position: relative;
        display: flex;
        justify-content: center;

        .block {
            height: 64px;
        }
    }

    .wrapper {
        width: 100%;
        background-color: $white;
        border: 2px solid $black;
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0;
        z-index: 20;
    }

    .title {
        font-family: 'Poppins-Bold';
        font-size: 20px;
    }

    .top-nav-cover {
        background-color: $white;
        position: absolute;
        bottom: calc(100% + 2px);
        left: -2px;
        height: 20px;
        width: calc(100% + 4px);
    }

    nav.mobile {
        display: none;
        width: 100%;
        position: absolute;
        z-index: 10;
        bottom: 0;
        left: 0;
        padding: 10px 0;
        border: 2px solid $black;
        border-top: 0;
        background-color: $white;
        transition: transform 100ms ease-in;
    }

    nav.mobile.show {
        transform: translateY(100%);
    }

    .hamburger {
        padding: 7px;
        display: none;
        flex-direction: column;
        gap: 3px;
        transition: background-color 70ms linear;
        cursor: pointer;
        
        @media (width < 600px) {
            display: flex;
        }

        &:hover {
            background-color: rgba($black, 0.1);
        }

        &:active {
            background-color: rgba($black, 0.2);
        }

        .line {
            height: 3px;
            width: 17px;
            background-color: $black;
            transition: transform 100ms linear;
        }
    }

    .hamburger.x {

        .line-1 {
            transform: rotate(45deg) translate(4px, 5px);
        }

        .line-2 {
            opacity: 0;
        }

        .line-3 {
            transform: rotate(-45deg) translate(3px, -5px);
        }
    }

    nav.desktop li {
        display: inline;
        margin-left: 7px;
    }

    li {
        list-style-type: none;

        a {
            font-size: 14px;
            transition: opacity 100ms linear;

            &.on {
                font-family: 'Poppins-Bold';
            }

            &:hover {
                text-decoration: underline;
                opacity: 0.5;
            }
        }
    }
        
    @media (width < 600px) {

        nav.desktop {
            display: none;
        }
        
        nav.mobile {
            display: block;
    
            li a {
                display: block;
                width: 100%;
                padding: 20px 20px;
                font-size: 20px;
            }
        }
    }
</style>