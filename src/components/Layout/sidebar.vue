<template>
<scrollbar>
  <div class="sidebar" style="width: 180px">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    
    

    
    <el-menu :collapse="isCollapse"   background-color="#304156" text-color="#fff" active-text-color="#409EFF">

      <template v-for="(item, itemindex) in data">
        <el-submenu :index="itemindex" :key="item.title" >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ item.title }}</span>
          </template>

          <!--  -->
          <template v-for="(sub, subindex) in item.items">
            <el-submenu :index="itemindex + '-' +subindex" :key="sub.title">
              <template slot="title">
                <span slot="title">{{ sub.title}}</span>
              </template>

                <!--  -->
              <template v-for="(chil, chilindex) in sub.children">
                <el-menu-item :index="itemindex + '-' +subindex + '-'+ chilindex" :key="chil.title">
                  <span slot="title">{{ chil.title }}</span>
                </el-menu-item>
               
              </template>
              <!--  -->

            </el-submenu>
          </template>
          <!--  -->
        </el-submenu>
      </template>


    </el-menu>

   
  </div>
</scrollbar>
</template>

<script>
import json from './sidebar.json';
import Scrollbar from '../ScrollBar/index'

export default {
  components: {Scrollbar},
  data() {
    return {
      isCollapse: false,
    };
  },
  created() {
    this.data = json;
  },
  methods: {
  
  }
}
</script>

<style>

</style>
