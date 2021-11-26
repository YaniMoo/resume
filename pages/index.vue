<template>
  <b-container class="pd-ctn">
    <b-row class="bgc-main py-5">
      <b-col md="4" class="text-center">
        <b-avatar src="https://placekitten.com/300/300" size="12rem"></b-avatar>
      </b-col>
      <b-col md="8">
        <p class="txt-name">ญาณี ดำรงกมลทิพย์</p>
        <div class="line-white" />
        <p class="txt-position">Web Developer</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4" class="py-3">
        <p>ข้อมูลส่วนตัว</p>
        <p>เพศ: <span>หญิง</span></p>
        
        วันเกิด:  18 มีนาคม 2538
        อายุ: 26 ปี
        สูง: 158 ซม.
        หนัก: 48 กก.
        สถานภาพสมรส: โสด
        ศาสนา: พุทธ
      </b-col>
      <b-col md="8" class="py-3">
        
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  metaInfo() {
    return {
      title: "Resume",
      titleTemplate: "%s : Yani",
    };
  },
  methods: {
    // getDatas: async function () {
      
    // },
  },
};
</script>

<style scoped>
.pd-ctn {
  padding: 100px 0;
}
</style>
