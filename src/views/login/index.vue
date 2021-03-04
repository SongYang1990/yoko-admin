<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li v-for="item in menuTab" :key="item.id" :class="{'current' : item.current}" @click="toggleMneu(item)">
                    {{ item.txt }}
                </li>
            </ul>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium">
                <el-form-item prop="username" class="item-form">
                    <label>邮箱</label>
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item prop="password" class="item-form">
                    <label>密码</label>
                    <el-input type="text" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>

                <el-form-item prop="passwords" class="item-form" v-show="model === 'register'">
                    <label>重复密码</label>
                    <el-input type="text" v-model="ruleForm.passwords" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>

                <el-form-item prop="code" class="item-form">
                    <label>验证码</label>
                    <el-row :gutter="11">
                        <el-col :span="15">
                            <el-input v-model.number="ruleForm.code" minlength="6" maxlength="6"></el-input>
                        </el-col>
                        <el-col :span="9">
                            <el-button type="success" class="submit-block">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" class="login-btn submit-block" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { regEmail, regPassword, regCode, regCharacters} from '@/utils/validate'
export default {
    name: "login",
    data(){
        // 校验用户名
        var validateUsername = (rule, value, callback) => {
            if (!value || regEmail(value)) {
                callback(new Error('邮箱格式不正确'));
            }
            callback();
        };
        // 校验密码
        var validatePwd = (rule, value, callback) => {
            if(!value || regCharacters(value || regPassword(value))) {
                callback(new Error('密码为6-20位的数字与字母组成'));
            }
            callback();
        };
         // 校验重复密码
        var validatePwds = (rule, value, callback) => {
            if (this.model === 'login') {
                callback();
            }
            if(value != this.ruleForm.password) {
                callback(new Error('重复密码与密码不符'));
            }
            callback();
        };
        // 校验验证码
        var validateCode = (rule, value, callback) => {
            if (!value || regCharacters(value || regCode(value))) {
                return callback(new Error('验证码非法'));
            }
            callback();
        };
        // vue 数据驱动视频渲染，JS 操作DOM元素
        return {
           menuTab: [
                {txt: '登录', current: true, type: 'login'},
                {txt: '注册', current: false, type: 'register'}
            ],
            // 模块值
            model: 'login',

            ruleForm: {
                username: '',
                password: '',
                passwords: '',
                code: ''
            },

            rules: {
                username: [
                    { validator: validateUsername, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePwd, trigger: 'blur' }
                ],
                passwords: [
                    { validator: validatePwds, trigger: 'blur' }
                ],
                code: [
                    { validator: validateCode, trigger: 'blur' }
                ]
            }
        }
    },
    // 生命周期之一：创建完成时自动执行
    created(){},
    // 生命周期之一：挂载完成时后自动执行
    mounted(){
    
    },
    // 函数区
    methods: {
        toggleMneu(data) {
            this.menuTab.forEach(ele => {
                ele.current = false
            });
            data.current = true
            // 修改模块值
            this.model = data.type
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
    // 子主键引用父主键
    // props: {},
    // watch: {}
</script>
<style lang="scss" scoped>
    #login {
        height: 100vh;
        background-color: #344a5f;
    }
    .login-wrap {
        width: 330px;
        margin: auto;
    }
    .menu-tab {
        text-align: center;
        li {
            display: inline-block;
            width: 88px;
            line-height: 36px;
            font-size: 14px;
            color: #fff;
            border-radius: 2px;
            cursor: pointer;
        }
        .current {
            background-color: rgba(0,0,0,.1);
        }
    }
    .login-form {
        margin-top: 29px;
       label {
           display: block;
           margin-bottom: 3px;
           font-size: 14px;
           color: #fff;
       }
       .item-form {
           margin-bottom: 13px;
       }
       .submit-block {
           width: 100%;
           display: block;
       }
       .login-btn {
           margin-top: 19px;
       }
    }
</style>