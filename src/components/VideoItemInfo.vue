<template>
  <div class="flex items-start">
    <img :src="`https://picsum.photos/seed/avatar${seed}/68`"  class="mr-3 rounded-full w-9 h-9" alt=""> <!-- ава -->
    <div class="text-sm"> <!-- текст -->
      <span class="font-semibold text-gray-800">{{title}}</span> <!-- название видео -->
      <div class="mt-1 flex items-center">
        <span>{{channel}}</span> <!-- название канала -->
        <BaseIcon v-if="check" name="check" class="w-4 h-4 ml-1"/>
      </div>
      <div>
        <span>{{views}}</span> <!-- просмотры -->
        &middot;
        <span>{{date}}</span> <!-- время с момента загрузки -->
      </div>
    </div>
    <button class="-mt-1 ml-auto p-1 opacity-0 group-hover:opacity-100 text-gray-700"> <!-- 3 кнопки -->
      <BaseIcon name="v_dots" class="h-6 w-6 ml-1"/>
    </button>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

let words= 'Lorem ipsum dolor sit amet consectetur adipisicing elit Natus ipsum vitae eveniet neque earum illum exercitationem porro temporibus placeat omnis vel consequatur nihil adipisci asperiores cumque enim Temporibus eveniet quae'.toLowerCase().split(' ')

export default {
  components:{
    BaseIcon
  },
  data() {
    let seed=Math.trunc(Math.random()*1000+1).toString()
    let title=words[Math.trunc(Math.random()*words.length)]+' '+words[Math.trunc(Math.random()*words.length)]
    title=title[0].toUpperCase()+title.slice(1)//рандомное название видео
    let channel=words[Math.trunc(Math.random()*words.length)]+' '+words[Math.trunc(Math.random()*words.length)]
    channel=channel[0].toUpperCase()+channel.slice(1)//рандомное название канала
    let views=Math.trunc(Math.random()*500000).toString()//просмотры
    let randCheck=Math.trunc(Math.random()*5).toString()//просмотры
    let date//дата
    let dateType=Math.trunc(Math.random()*7)//тип даты
    let isCheck=randCheck>3
    switch (dateType) {
      case 0: //секунды
        date=Math.trunc(Math.random()*59+1).toString()
        date+=date==1?' second ago':' seconds ago'
        break;
      case 1: //минуты
        date=Math.trunc(Math.random()*59+1).toString()
        date+=date==1?' minute ago':' minutes ago'
        break;
      case 2: //часы
        date=Math.trunc(Math.random()*23+1).toString()
        date+=date==1?' hour ago':' hours ago'
        break;
      case 3: //дни
        date=Math.trunc(Math.random()*6+1).toString()
        date+=date==1?' day ago':' days ago'
        break;
      case 4: //недели
        date=Math.trunc(Math.random()*3+1).toString()
        date+=date==1?' week ago':' weeks ago'
        break;
      case 5: //месяцы
        date=Math.trunc(Math.random()*11+1).toString()
        date+=date==1?' mounth ago':' mounths ago'
        break;
      case 6: //года
        date=Math.trunc(Math.random()*15+1).toString()
        date+=date==1?' year ago':' years ago'
        break;
      default:
        date='error'
        break;
    }
    if(Number(views)>999)
      views=Math.trunc((Number(views)/1000)).toString()+'K views'
    else
      views=Math.trunc(Number(views)).toString()+'K views'
    return {
      title:title,
      channel:channel,
      views:views,
      date:date,
      check:isCheck,
      seed:seed
    }
  },
}
</script>