<template>
    <div class="content">
        <div class="services">
            <el-autocomplete style="width:50%" class="inline-input" v-model="serviceName"
                placeholder="请输入服务名称"></el-autocomplete>
            <el-button plain type="primary">搜索</el-button>
            <el-button plain type="primary">启动</el-button>
            <el-button plain type="primary">停止</el-button>
            <el-button plain type="primary">重启</el-button>
        </div>
        <div class="info">
            <div class="detail" v-if="display">
                <p class="title">服务详情：</p>
                <el-descriptions :column="2" border>
                    <el-descriptions-item label="服务名"> Name </el-descriptions-item>
                    <el-descriptions-item label="状态"> Active </el-descriptions-item>
                    <el-descriptions-item label="模块是否加载"> LOAD </el-descriptions-item>
                    <el-descriptions-item label="SUB"> SUB </el-descriptions-item>
                </el-descriptions>
            </div>
            <div class="result" v-else>
                <p class="title">执行结果：</p>
                <el-descriptions :column="2" border>
                    <el-descriptions-item label="软件包名">serviceName </el-descriptions-item>
                    <el-descriptions-item label="执行动作">action </el-descriptions-item>
                    <el-descriptions-item label="结果">
                        {{ result + ":" }}
                        <p class="progress" v-show="result != ''">
                            <span>100%</span>
                        </p>
                    </el-descriptions-item>
                </el-descriptions>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const serviceName = ref("")

const display = ref(true)
const result = ref("")

</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .services {
    width: 98%;
  }

  .info {
    width: 98%;
    flex: 1;

    .detail {
      width: 100%;
      height: 100%;

      .title {
        width: 30%;
        margin: 2% 0;
      }
    }

    .result {
      width: 100%;
      height: 100%;

      .title {
        width: 30%;
        margin: 2% 0;
      }

      .progress {
        display: inline-block;
        width: 74%;
        margin-left: 2%;
        border: 1px solid rgba(11, 35, 117, .5);
        background: #fff;
        border-radius: 10px;
        text-align: left;

        span {
          display: inline-block;
          text-align: center;
          color: #fff;
          width: 100%;
          border: 1px solid #fff;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>