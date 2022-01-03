<template>
  <b-container class="pd-ctn">
    <b-row class="bgc-main py-5">
       <!-- <b-col md="4" class="text-center">
        <b-avatar src="https://placekitten.com/300/300" size="12rem"></b-avatar>
      </b-col> -->
      <b-col md="12" class="text-right">
        <p class="txt-name text-break">Yanee Damrongkamonthip</p>
        <div class="line-white" />
        <p class="txt-position">Web Developer</p>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col md="4">
        <div class="panel-info py-3">
          <p class="txt-title">Personal Data</p>
          <p class="txt-sub-title">Gender: <span class="txt-detail">Female</span></p>
          <p class="txt-sub-title">
            Date of Birth: <span class="txt-detail">18 March 1995</span>
          </p>
          <p class="txt-sub-title">
            Age: <span class="txt-detail">26 yrs.</span>
          </p>
          <p class="txt-sub-title">
            High: <span class="txt-detail">158 cm.</span>
          </p>
          <p class="txt-sub-title">
            Weight: <span class="txt-detail">48 kg.</span>
          </p>
          <p class="txt-sub-title">
            Marital Status: <span class="txt-detail">Single</span>
          </p>
          <p class="txt-sub-title">
            Religion: <span class="txt-detail">Buddhism</span>
          </p>
        </div>
      </b-col>
      <b-col md="8">
        <div class="py-3">
          <p class="txt-title">Work Experience</p>
          <p class="txt-sub-title">Senior Front-End Developer</p>
          <p class="txt-detail font-weight-bold">
            Dosetech Company Limited. | November 2018 - Present
          </p>
          <ul class="txt-detail">
            <li>Code programs using Nuxt.js, Vue.js, .Net Core frameworks</li>
            <li>Developed and implemented software solutions based on client requirements</li>
            <li>Developed website components using modern frameworks</li>
            <li>Checks feasibility of software prototypes</li>
            <li>Modifies code to fix errors</li>
          </ul>
        </div>
        <div class="pb-3">
          <p class="txt-sub-title">PHP Programmer</p>
          <p class="txt-detail font-weight-bold">
            Global Wireless Company Limited. | May 2017 – August 2018
          </p>
          <ul class="txt-detail">
            <li>Code programs using Laravel framework</li>
            <li>Developed and implemented software solutions based on client requirements</li>
            <li> Checks feasibility of software prototypes</li>
            <li>Modifies code to fix errors</li>
          </ul>
        </div>
        <hr />
        <div class="py-3">
          <p class="txt-title">Educational History</p>
          <p class="txt-sub-title">Nakhon Pathom Rajabhat University</p>
          <p class="txt-detail font-weight-bold">
            Bachelor of Science In Software Engineering | 2013 - 2016 
          </p>
          <p class="txt-detail">GPA 3.77 (First Class Honors) </p>
        </div>
        <div>
          <p class="txt-sub-title">
            Songphinong Industrial And Community Education College 
          </p>
          <p class="txt-detail font-weight-bold">
            Vocational Certificate in Business Computer | 2010 - 2012 
          </p>
          <p class="txt-detail">GPA 3.78</p>
        </div>
      </b-col>
    </b-row>
    <b-row align-v="end">
      <b-col md="4" class="order-1 order-sm-0">
        <div class="panel-info py-3">
          <p class="txt-title">Contact</p>
          <p class="txt-sub-title">
            Email: <span class="txt-detail">yani_d_2020@hotmail.com</span>
          </p>
          <p class="txt-sub-title">
            Address:
            <span class="txt-detail"
              >Talat Khwan Subdistrict, Mueang Nonthaburi District, Nonthaburi Province 11000</span
            >
          </p>
        </div>
      </b-col>
      <b-col md="8" class="order-0 order-sm-1">
        <hr />
        <div class="py-3">
          <p class="txt-title">Other Experiences</p>
          <p class="txt-sub-title">
            ACM-ICPC Asia Thailand National On-site Programming Contest 2015
          </p>
        </div>

        <hr />
        <p class="txt-title">Professional Skills</p>
        <div>
          <p class="txt-sub-title">Coding Languages</p>
          <ul class="txt-detail">
            <li>HTML/HTML5, CSS/CSS3</li>
            <li>JavaScript, PHP</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div>
          <p class="txt-sub-title">Frameworks/Systems</p>
          <ul class="txt-detail">
            <li>Nuxt.js, Vue.js</li>
            <li>Bootstrap 3, 4</li>
            <li>Laravel</li>
            <li>JQuery, Axios, Ajax</li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {};
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