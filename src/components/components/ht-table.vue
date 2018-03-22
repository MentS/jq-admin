<template>
  <table class="table table-hover">
      <thead>
        <tr>
          <th>
            <input type="checkbox" name="ckSelectAll" id="ckSelectAll">
          </th>
          <th v-for="items in data.thead">{{ getkey(items) }}</th>
          <!-- <th>游戏状态</th>
          <th>游戏分类</th>
          <th>玩法分类</th>
          <th>开奖球数</th>
          <th>上期开奖</th>
          <th>下期开奖</th> -->
          <th class="text-right">操作</th>
        </tr>
      </thead>
      <tbody>
        <template :index="index" v-for="(item, index) in data.tbody">
          <tr>
            <td><input type="checkbox" name="ckbox" :index="index"></td>
            <td v-for=" (key, value) in item "><a href="JavaScript:;" class="sub-style"> {{ value }} </a></td>
            <td class="text-right">
              <a href="#">生产期号</a>
              <span class="text-explode">|</span>
              <a href="#">编辑</a>
            </td>
          </tr>
        </template>  


      </tbody>
  </table>
  
</template>

<script>
export default {
  data() {
    return {
      data: {
        thead: [
          {"a":"游戏名词"},
          {"b":"游戏状态"},
          {"c":"开奖球数"},
          {"d":"上期开奖"},
          {"e":"游戏名词"},
          {"f":"下期开奖"},
        ],
        tbody: [
          {
            "a":'asd',
            "b": "asd",
            "c": "adf",
            "d": "add",
            "e": "sdd",
            "f": "adf"
          },
          {
            "a":'asd',
            "b": "asd",
            "c": "adf",
            "d": "add",
            "e": "sdd",
            "f": "adf"
          }
        ]
      }
    }
  },
  methods: {
    getkey(obj) { 
      let key = Object.keys(obj)[0];
      //console.log(Object.keys(obj)[0]);   
      return obj[key]
    }
  },
}
</script>
