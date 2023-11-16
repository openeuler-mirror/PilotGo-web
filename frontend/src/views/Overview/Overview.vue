<template>
    <div class="content">
        <div class="total">
            <div class="top">
                <div class="user">
                    <span>欢迎您：{{ userName }}</span>
                    <span>所属部门：{{ userDeptName }}</span>
                    <span>您的身份：{{ userType }}</span>
                </div>
                <div class="tips">
                    <el-carousel style="width: 100%; height: 100%;" trigger="click" :interval="8000"
                        indicator-position="none">
                        <el-carousel-item class="tips_item" v-for="item in tooltips" :key="item.id">
                            <h4 class="small">{{ item.name }}</h4>
                            <p>{{ item.description }}</p>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="bottom">
                <div class="bottom_panel zx">
                    <span>在线机器</span>
                    <p style="color: rgb(92, 123, 217)">{{ normal }}</p>
                </div>
                <div class="bottom_panel lx">
                    <span>离线机器</span>
                    <p style="color: rgb(138, 138, 138)">{{ offline }}</p>
                </div>
                <div class="bottom_panel kx">
                    <span>未分配机器</span>
                    <p style="color: rgb(253, 190, 0)">{{ free }}</p>
                </div>
            </div>
        </div>
        <div class="recent">
            <p>recent message</p>
        </div>
        <div class="depart">
            <p>department chart</p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";

const userName = ref("暂无");
const userDeptName = ref("暂无");
const userType = ref("暂无");

const normal = ref(0);
const offline = ref(0);
const free = ref(0);

let tooltips = ref([
    {
        id: 1,
        name: "系统",
        description:
            "按部门树节点查看一台机器各指标详情，监控性能变化，创建批次方便批量操作",
    },
    {
        id: 2,
        name: "批次",
        description: "查看创建批次，执行下发rpm包动作",
    },
    {
        id: 3,
        name: "日志",
        description: "查看执行动作的结果以及失败的具体原因",
    },
]);

</script>
  
<style lang="scss" scoped>
.content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    .total {
        width: 48%;
        height: 40%;
        box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);

        .top {
            width: 96%;
            height: 50%;
            margin: 0 auto;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            .user {
                width: 46%;
                height: 100%;
                border-radius: 3%;
                border: 1px dashed #aaa;
                color: rgb(106, 106, 106);

                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;

                span {
                    display: inline-block;
                    width: 80%;
                }
            }

            .tips {
                width: 48%;
                height: 100%;
                border-radius: 3%;
                border: 1px dashed #aaa;
                color: rgb(106, 106, 106);
                display: flex;
                padding-top: 2%;

                :deep(.el-carousel__container) {
                    height: 100%;
                }

                .tips_item {
                    height: 50%
                }

                h4 {
                    padding: 0 0 0 2%;
                }

                p {
                    font-size: 14px;
                    padding: 2% 0 0 2%;
                }
            }
        }

        .bottom {
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            .bottom_panel {
                width: 28%;
                height: 64%;
                border: 1px dashed #aaa;
                border-radius: 6%;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: flex-end;
                color: rgb(106, 106, 106);

                span {
                    display: inline-block;
                    width: 68%;
                    font-size: 16px;
                    text-align: center;
                }

                p {
                    width: 68%;
                    text-align: center;
                    font-size: 24px;
                    font-weight: bold;
                }
            }

            .zx {
                background: url(@/assets/overview/zx.png) no-repeat left center;
                background-size: 72%;
            }

            .lx {
                background: url(@/assets/overview/lx.png) no-repeat left center;
                background-size: 72%;
            }

            .kx {
                background: url(@/assets/overview/kx.png) no-repeat left center;
                background-size: 72%;
            }
        }
    }

    .recent {
        width: 48%;
        height: 45%;

        .message {
            position: relative;
            z-index: 2;
            justify-content: start;
            background-color: #fff;
            color: rgb(11, 35, 117);
            font-size: 16px;
            width: 100%;
            height: 13%;
            // padding: 2.6%;
            box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
        }
    }

    .depart {
        width: 100%;
        height: 55%;
    }
}
</style>