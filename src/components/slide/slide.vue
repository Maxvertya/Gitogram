<template>
    <div class="c-slide">
        <div class="slide__header">
            <progress></progress>
            <div class="header__content">
                <user>
                    <template #img>
                         <div class="user__wrapper--big">
                         <img class="user__img" src="https://picsum.photos/100">
                         </div>
                    </template>
                </user>
                <div class="header__title">React.reposit</div>
            </div>
        </div>
        <div class="slide__content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam illum ea, est mollitia, ipsam dolorem eius cumque, debitis omnis voluptatum laudantium? Incidunt laudantium perspiciatis quod repudiandae itaque id repellendus eius?</p>
        </div>
        <div class="slide__footer">
            <button />
        </div>
    </div>
</template>

<script>
import { Button } from '@/button';
import { Progress } from '@/progress';
import { User } from '@/user';
export default {
  name: 'Slide',
  components: {
    Button,
    Progress,
    User
  },
}
</script>