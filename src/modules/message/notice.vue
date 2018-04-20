<template>
  <div>
    <div class="clearfix" style="margin:8px 0;"></div>
    <div style="position:relative">
      <el-button style="position:absolute;right:0px;z-index:2" type="primary"  @click="dialogFormVisible = true">添加公告</el-button>
      <el-tabs  v-model="activeName" type="card" @tab-click="tabshandleClick">
        <el-tab-pane label="全部公告" name="first"></el-tab-pane>
        <el-tab-pane label="优惠公告" name="second"></el-tab-pane>
        <el-tab-pane label="系统公告" name="xitong"></el-tab-pane>
        <el-tab-pane label="普通公告" name="third"></el-tab-pane>
        <el-tab-pane label="紧急公告" name="fourth"></el-tab-pane>
      </el-tabs>
    </div>
    <div style="border: 1px solid #dddddd;margin:-1px 0 0 -1px;">
      <div class="clearfix" style="padding: 8px;">
        <div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item class="w200">
              <el-select v-model="formInline.value" size="small" placeholder="请选择状态">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item >
              <el-input placeholder="请输入内容" v-model="formInline.formInput"   size="small" clearable></el-input>
            </el-form-item>
            
            <el-form-item>
              <el-button type="primary" icon="el-icon-search"  @click="onSubmit">查询</el-button>
              <el-button type="warning" icon="el-icon-refresh"  @click="empty">清空</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="clearfix">
        <el-table
          :data="tableData"
          style="width: 100%">

          <el-table-column
            type="index"
            label="ID">
          </el-table-column>

          <el-table-column
            prop="title"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="content"
            label="内容">
          </el-table-column>
          <el-table-column
            prop="beginTime"
            label="开始时间">
          </el-table-column>
          <el-table-column
            prop="endTime"
            label="结束时间">
          </el-table-column>
          <el-table-column
            prop="type"
            label="类型">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="isPopup"
            label="是否弹出"
            :formatter="formatter">
          </el-table-column>
          <el-table-column
            prop="isLoginPopup"
            label="是否登陆弹出"
            :formatter="formatter">
          </el-table-column>
          <el-table-column
            prop="isSite"
            label="是否站点发送">
          </el-table-column>
          <el-table-column
            prop="siteId"
            label="站点名称">
          </el-table-column>
          <el-table-column
            prop="remark"
            label="备注">
          </el-table-column>
          <el-table-column label="操作" fixed="right" width="200px">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleDelete(scope.$index, scope.row)">禁用</el-button>
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 弹框公告 -->
    <el-dialog :modal-append-to-body="false" title="添加公告" :visible.sync="dialogFormVisible">
      <el-form :model="addnoticeForm"  ref="addnoticeForm"  :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="公告标题" prop="title">
          <el-input v-model="addnoticeForm.title"></el-input>
        </el-form-item>
        <el-form-item label="公告类型" prop="type">
          <el-select v-model="addnoticeForm.type" placeholder="请选择类型">
            <el-option label="优惠公告" value="优惠公告"></el-option>
            <el-option label="系统公告" value="系统公告"></el-option>
            <el-option label="普通公告" value="普通公告"></el-option>
            <el-option label="紧急公告" value="紧急公告"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始时间" required>
          <el-col :span="11">
            <el-form-item prop="beginTime">
              <el-date-picker type="date" placeholder="选择日期" v-model="addnoticeForm.createTime" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="createTime">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="addnoticeForm.createTime" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item label="结束时间" required>
          <el-col :span="11">
            <el-form-item prop="endTime">
              <el-date-picker type="date" placeholder="选择日期" v-model="addnoticeForm.beginTime" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="addnoticeForm.beginTime" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>


        <el-form-item label="是否弹出" prop="isPopup">
          <el-radio-group v-model="addnoticeForm.isPopup">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="登陆弹出" prop="isLoginPopup">
          <el-radio-group v-model="addnoticeForm.isLoginPopup">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="内容" prop="content">
          <el-input type="textarea" v-model="addnoticeForm.content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('addnoticeForm')">立即创建</el-button>
          <el-button @click="resetForm('addnoticeForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
/**
@param activeName tabs 默认选择 
@param formInline 查询表单数据
@param formData   弹框form 数据
@param tableData  表格数据
@param dialogFormVisible 控制弹框表单

@function tabshandleClick tabs 切换事件
@function onSubmit 提交 formInline 表单数据
@function empty    清空查询结果
@function handleEdit 表单点击事件
@function handleDelete 表单删除事件
@function submitForm add  公告 form

 */

//import {qureyBulletinlist} from '../../services/message'

export default {
  data() {
    return {
      dialogFormVisible: false,
      activeName: 'first',
      value: '',
      formInline: {
        value:'',
        formInput:''
      },
      formInput: '',
      addnoticeForm:{
        "id": 983613641930694700,//公告id
        "createTime": "2018-04-10 15:52:21",//公告创建时间
        "createBy": 111,//创建人id
        "updateBy": null,//更新人
        "updateTime": "2018-04-10 15:56:23",//更新时间
        "remark": "现在时间:{Tue Apr 10 15:52:21 CST 2018}",//公告备注
        "title": "测试公告",//公告标题
        "content": "今天大家都会有好运",//公告内容
        "beginTime": null,//开始时间
        "endTime": null,//结束时间
        "type": "",//消息类型
        "status": null,//消息状态
        "isPopup": null,//是否弹出
        "isLoginPopup": "F",//是否登录弹出
        "isSite": null,//是否是站点发送
        "isDel": "F",//是否删除（如果删除前台页面不会显示）
        "siteId": null//站点id
    },

      options: [{
          value: '选项1',
          label: '未发生'
        }, {
          value: '选项2',
          label: '已发送'
        }, {
          value: '选项3',
          label: '已过期'
        }, {
          value: '选项4',
          label: '过期'
        }, {
          value: '选项5',
          label: '禁用'
        }],
      
        tableData: null,
      
      rules: {
        title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
          ]
      }

    };
  },
  created() {
    this.qureyBulletinlist()
  },
  methods: {
    tabshandleClick(tab, event) {
      console.log(tab.index, event);
    },
    empty(){
      console.log("this.formInline")
    },
    onSubmit(){
      console.log(this.formInline  )
    },

    handleEdit(index, row) {
      this.dialogFormVisible =  true 
      this.addnoticeForm = row
      console.log(index, row);
    },
    handleDelete(index, row) {
        console.log(index, row);
    },
    submitForm(formName){
      console.log(this.$refs[formName].validate((bol,obj) => {
        console.log(bol, obj);
      }));
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
    },
    qureyBulletinlist(){
      // qureyBulletinlist().then( response => {
      //   this.tableData = response.data
      //   // resole()
      // }).catch(  error => {
      //   console.log(error)
      // })
    },
    formatter(row,column,cellVaule){
     // return row.isLoginPopup == "T" ? "是" : "否" 
     //let a = row; 
     //return row.isPopup == "T" ? "是" : "否" 
     return cellVaule == "T" ? "是" : "否" 
      console.log(a,row,column,cellVaule);
    }

  }
};
</script>

<style>

.w200{
  width: 200px
}
.el-button{
  padding: 10px 10px;
  font-size: 12px;
}

.form-inline .form-control {
  width: auto;
}
.help-block {
  margin: 4px 0px;
}
.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
}
</style>
