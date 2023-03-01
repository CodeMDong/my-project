<script setup>
import NameCard from "./name-card.vue";
const props = defineProps({
  columns: Array,
});
</script>
<template>
  <div class="card">
    <el-row>
      <el-col :span="columns[0].span">
        <name-card></name-card>
      </el-col>
      <el-col :span="columns[1].span">
        <div class="customer">
          <div class="customer_id">QT-202012220156</div>
          <div class="customer_name">新东方教育科技集团有限公司</div>
        </div>
      </el-col>
      <el-col :span="columns[2].span">
        <div class="area">
          <div class="left"></div>
          <span>东区金融</span>
        </div>
      </el-col>
      <el-col :span="columns[3].span">
        <div class="time">
          <div class="name">
            <span>祝延彬</span>
            <svg-icon name="user"></svg-icon>
          </div>
          <div>2020-12-15 13:26</div>
        </div>
      </el-col>
      <el-col :span="columns[4].span">
        <div class="config">
          <div class="point-count">
            <span>点数</span>
            50,000
          </div>
          <div class="serve">
            <span>服务端</span>
            5
          </div>
        </div>
      </el-col>
      <el-col :span="columns[5].span">
        <div class="way-limit">
          <div class="way">按年</div>
          <div class="or"></div>
          <div class="limit">
            <span>3</span>
            <span class="unit">年</span>
          </div>
        </div>
      </el-col>
      <el-col :span="columns[6].span">
        <div class="price-row">
          <div class="price">
            <div class="tag">产品价</div>
            <div class="money">
              <div>￥</div>
              9,850,000
            </div>
          </div>
          <div class="price-blue">
            <div class="line"></div>
            <span>￥</span>
            128,05,000
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped lang="scss">
@mixin flex($align-items: center) {
  display: flex;
  align-items: $align-items;
}
.pl-12 {
  padding-left: 12px;
}
::v-deep .el-col {
  @include flex;
  box-sizing: border-box;
}
.card {
  height: 60px;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #fff;
  padding: 3px 0 0 0;
  margin-bottom: 3px;
  &:hover {
    background: #edf9fc;
    border: 1px solid #bfe9f8;
    border-radius: 3px;
  }
  .customer {
    text-align: left;
    margin-left: 15px;
    min-width: 256px;
    &_id {
      font-size: 12px;
      line-height: 16px;
      color: #abb6ba;
      margin-bottom: 6px;
    }
    &_name {
      font-size: 14px;
      line-height: 18px;
      color: #020e1d;
    }
  }
  .area {
    @include flex;
    min-width: 70px;
    height: 26px;
    background: #edf9fc;
    border: 1px solid #ffffff;
    border-radius: 0px 1px 1px 0px;
    margin-right: 30px;

    .left {
      width: 2px;
      height: 100%;
      background: #0daade;
      opacity: 0.5;
    }
    > span {
      font-size: 13px;
      line-height: 17px;
      color: #4a565a;
      margin: 7px;
    }
  }
  .time {
    font-size: 13px;
    line-height: 17px;
    color: #abb6ba;
    text-align: left;
    margin-right: 30px;
    min-width: 110px;
    .name {
      color: #4a565a;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      > span {
        margin-right: 4px;
      }
    }
  }
  .config {
    text-align: left;
    .point-count,
    .serve {
      font-size: 12px;
      line-height: 16px;
      color: #4a565a;
      > span {
        width: 36px;
        display: inline-block;
        color: #abb6ba;
        text-align: right;
      }
    }
  }
  .way-limit {
    width: 100px;
    min-width: 100px;
    height: 36px;
    background: #f9fafb;
    border-radius: 3px;
    @include flex;
    font-size: 13px;
    line-height: 17px;
    color: #020e1d;
    padding: 10px;
    box-sizing: border-box;
    // margin: 0 48px;
    .or {
      height: 24px;
      border: 1px solid #046281;
      opacity: 0.1;
      margin: 0 12px 0 15px;
    }
    .limit .unit {
      margin-left: 4px;
      color: #abb6ba;
    }
  }
  .price-row {
    @include flex;
    .price {
      @include flex;
      .tag {
        min-width: 36px;
        font-size: 12px;
        line-height: 16px;
        color: #abb6ba;
      }
      .money {
        font-size: 15px;
        line-height: 17px;
        text-align: right;
        @include flex;
        margin: 0 12px;
        color: #4a565a;
        > div {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
    .price-blue {
      @include flex;
      font-size: 20px;
      line-height: 23px;
      text-align: right;
      color: #0daade;
      .line {
        height: 40px;
        opacity: 0.1;
        border: 1px solid #046281;
        margin-right: 22px;
      }
      > span {
        font-size: 16px;
        line-height: 21px;
        color: #0daade;
      }
    }
  }
}
</style>
