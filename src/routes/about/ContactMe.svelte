<script>
    import Icon from '@iconify/svelte';
    import Separator from '$lib/components/Separator.svelte';
    import Input from '$lib/components/Input.svelte';

    function writeEmail(e) {

        const formData = new FormData(e.target);
        window.open(`mailto:vinc3w59@gmail.com?subject=${formData.get('subject')}&body=${formData.get('body')}`, '_blank').focus();

    }
</script>

<Separator title="Contact Me" />

<section>

    <div class="form-container wrapper">

        <div class="text">
            <span class="bold title">Let's Connect ❤️</span>
            <ul class="contacts">
                <li>
                    <a target="_blank" href="https://www.instagram.com/vinc3w59/">
                        <div class="icon">
                            <Icon icon="mdi:instagram" />
                        </div>
                        @vinc3w59
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://discord.com/users/582932383381192705">
                        <div class="icon">
                            <Icon icon="ic:baseline-discord" />
                        </div>
                        vinc3w#7159
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://wa.me/60182021113">
                        <div class="icon">
                            <Icon icon="ic:baseline-whatsapp" />
                        </div>
                        +60 18-202 1113
                    </a>
                </li>
                <li>
                    <a target="_blank" href="mailto:vinc3w59@gmail.com">
                        <div class="icon">
                            <Icon icon="mdi:email" />
                        </div>
                        vinc3w59@gmail.com
                    </a>
                </li>
            </ul>
        </div>

        <form on:submit|preventDefault={writeEmail}>
            <Input label="Subject" name="subject" />
            <Input label="Body" name="body" isTextarea={true} />
            <button><span class="bold">Send</span></button>
        </form>

    </div>

</section>

<style lang="scss">
    .form-container {
        display: flex;
        align-items: flex-start;
        gap: 30px;

        @media (width < $about-collapse-width) {
            flex-direction: column;
        }

        .text, form {
            width: 100%;
        }
    }

    .title {
        font-size: 25px;
    }

    .contacts {
        margin-top: 10px;
        
        li {
            list-style-type: none;

            a {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                transition: opacity 70ms linear;

                &:hover {
                    opacity: 0.7;
                }

                .icon {
                    height: 20px;
                    font-size: 20px;                    
                }
            }
        }
    }

    form {

        button {
            background-color: $black;
            color: $white;
            width: 100%;
            padding: 10px;
            border: 2px solid $black;
            cursor: pointer;
            transition: all 150ms linear;

            &:hover {
                background-color: $white;
                color: $black;
                transform: scale(1.01);
            }
        }
    }
</style>
