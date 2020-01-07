<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- // ! Mount Starts -->
    <table class="table-auto">
      <thead>
        <tr>
          <td class="border w-64">
            <div class="border px-3 py-2 flex content-center flex-wrap bg-gray-400">
              <tr class="text-center">
                <b>Mount</b>
              </tr>
            </div>
            <div class="border px-3 py-2">
              <tr>L Hold Below 90(above 50)</tr>
            </div>
            <div class="border px-3 py-2">
              <tr>L Hold 90</tr>
            </div>
          </td>
          <!-- Radio button starts -->
          <td class="border">
            <div class="border px-3 py-2">
              <tr>Point</tr>
            </div>
            <tr>
              <div class="border px-3 py-2">
                <td>
                  <input type="checkbox" id="Psix" value="0.6" v-model="elementMount.mount.Option" />
                  <label for="psix">0.6</label>
                </td>
              </div>
            </tr>
            <!-- end of one radio -->
            <tr>
              <div class="border px-3 py-2">
                <td>
                  <input type="checkbox" id="Psix" value="1" v-model="elementMount.mount.Option" />
                  <label for="psix">1.0</label>
                </td>
              </div>
            </tr>
          </td>
          <!-- end of two  -->
          <td class="border w-40" v-for="(item,index) in elementMount.mount.scoreData" :key="index">
            <div class="border px-2 py-2 bg-purple-100">
              <tr class="border-green-500 px-20 py-2">{{item.name}}</tr>
            </div>
            <div class="border px-2 py-2 bg-green-200"></div>

            <div
              :class="{'bg-teal-400':item.isClicked}"
              class="border py-2 px-16 bg-gray-400"
              v-on:click="calculateMount(item.marks,index),item.isClicked=!item.isClicked"
            >
              <tr class="px-4">{{item.marks/10}}</tr>
            </div>
          </td>
          <td class="border w-26">
            <div class="border px-2 py-2">
              <tr>Total</tr>
            </div>
            <div class="border px-2 py-2">
              <tr></tr>
            </div>
            <div class="border px-5 py-2">
              <tr>{{elementMount.mount.Total/10}}</tr>
            </div>
          </td>
        </tr>
      </thead>
    </table>
    <!-- test if username and email -->

    <!-- // ! Mount Ends -->

    <!-- // ! skin the cat Starts -->

    <table class="table-auto">
      <thead>
        <tr>
          <td class="border w-64">
            <div class="border px-3 py-2 flex content-center flex-wrap bg-gray-400">
              <tr class="text-center">
                <b>Skin The Cat</b>
              </tr>
            </div>
            <div class="border px-3 py-2">
              <tr>Skin the cat Bend leg</tr>
            </div>
            <div class="border px-3 py-2">
              <tr>Skin the cat Straight leg</tr>
            </div>
          </td>
          <!-- Radio button starts -->
          <td class="border">
            <div class="border px-3 py-2">
              <tr>Point</tr>
            </div>
            <tr>
              <div class="border px-3 py-2">
                <td>
                  <input
                    type="checkbox"
                    id="Psix"
                    value="0.6"
                    v-model="elementMount.skinTheCat.Option"
                  />
                  <label for="psix">0.6</label>
                </td>
              </div>
            </tr>
            <!-- end of one radio -->
            <tr>
              <div class="border px-3 py-2">
                <td>
                  <input
                    type="checkbox"
                    id="Psix"
                    value="1"
                    v-model="elementMount.skinTheCat.Option"
                  />
                  <label for="psix">1.0</label>
                </td>
              </div>
            </tr>
          </td>
          <!-- loop for skin the cat -->
          <td
            class="border w-40"
            v-for="(item,index) in elementMount.skinTheCat.scoreData"
            :key="index"
          >
            <div class="border px-2 py-2 bg-purple-100">
              <tr class="border-green-500 px-20 py-2">{{item.name}}</tr>
            </div>
            <div class="border px-2 py-2 bg-green-200"></div>

            <div
              :class="{'bg-teal-400':item.isClicked}"
              class="border py-2 px-16 bg-gray-400"
              v-on:click="calculateSkinThecat(item.marks,index),item.isClicked=!item.isClicked"
            >
              <tr class="px-4">{{item.marks/10}}</tr>
            </div>
          </td>
          <td class="border w-26">
            <div class="border px-2 py-2">
              <tr>Total</tr>
            </div>
            <div class="border px-2 py-2">
              <tr></tr>
            </div>
            <div class="border px-5 py-2">
              <tr>{{elementMount.skinTheCat.Total/10}}</tr>
            </div>
          </td>
        </tr>
      </thead>
    </table>

    <!-- // ! Skin the cat Ends -->

    <!-- // ! Lhold Starts -->

    <table class="table-auto">
      <thead>
        <tr>
          <td class="border w-64">
            <div class="border px-3 py-2 flex content-center flex-wrap bg-gray-400">
              <tr class="text-center">
                <b>L Hold</b>
              </tr>
            </div>
            <div class="border px-3 py-2">
              <tr>L hold between 45° till 90°</tr>
            </div>
            <div class="border px-3 py-2">
              <tr>L hold after skin the cat</tr>
            </div>
          </td>
          <!-- Radio button starts -->
          <td class="border">
            <div class="border px-3 py-2">
              <tr>Point</tr>
            </div>
            <tr>
              <div class="border px-3 py-2">
                <td>
                  <input type="checkbox" id="Psix" value="0.6" v-model="elementMount.lhold.Option" />
                  <label for="psix">0.6</label>
                </td>
              </div>
            </tr>
            <!-- end of one radio -->
            <tr>
              <div class="border px-3 py-2">
                <td>
                  <input type="checkbox" id="Psix" value="1" v-model="elementMount.lhold.Option" />
                  <label for="psix">1.0</label>
                </td>
              </div>
            </tr>
          </td>
          <!-- loop for skin the cat -->
          <td class="border w-40" v-for="(item,index) in elementMount.lhold.scoreData" :key="index">
            <div class="border px-2 py-2 bg-purple-100">
              <tr class="border-green-500 px-20 py-2">{{item.name}}</tr>
            </div>
            <div class="border px-2 py-2 bg-green-200"></div>

            <div
              :class="{'bg-teal-400':item.isClicked}"
              class="border py-2 px-16 bg-gray-400"
              v-on:click="lholdTotal(item.marks,index),item.isClicked=!item.isClicked"
            >
              <tr class="px-4">{{item.marks/10}}</tr>
            </div>
          </td>
          <td class="border w-26">
            <div class="border px-2 py-2">
              <tr>Total</tr>
            </div>
            <div class="border px-2 py-2">
              <tr></tr>
            </div>
            <div class="border px-5 py-2">
              <tr>{{elementMount.lhold.Total/10}}</tr>
            </div>
          </td>
        </tr>
      </thead>
    </table>
    <!-- // ! lhold ends -->

    <!-- // ! circle Starts -->

    <table class="table-auto">
      <thead>
        <tr>
          <td class="border w-64">
            <div class="border px-3 py-2 flex content-center flex-wrap bg-gray-400">
              <tr class="text-center">
                <b>Circles</b>
              </tr>
            </div>
            <div class="border px-3 py-2">
              <tr>Two Swing Below horizontal</tr>
            </div>
            <div class="border px-3 py-2">
              <tr>Two Swing horizontal or Above</tr>
            </div>
          </td>
          <!-- Radio button starts -->
          <td class="border">
            <div class="border px-3 py-2">
              <tr>Point</tr>
            </div>
            <tr>
              <div class="border px-3 py-2">
                <td>
                  <input type="checkbox" id="Psix" value="0.6" v-model="elementMount.circle.Option" />
                  <label for="psix">0.6</label>
                </td>
              </div>
            </tr>
            <!-- end of one radio -->
            <tr>
              <div class="border px-3 py-2">
                <td>
                  <input type="checkbox" id="Psix" value="1" v-model="elementMount.circle.Option" />
                  <label for="psix">1.0</label>
                </td>
              </div>
            </tr>
          </td>
          <!-- loop for skin the cat -->
          <td
            class="border w-40"
            v-for="(item,index) in elementMount.circle.scoreData"
            :key="index"
          >
            <div class="border px-2 py-2 bg-purple-100">
              <tr class="border-green-500 px-20 py-2">{{item.name}}</tr>
            </div>
            <div class="border px-2 py-2 bg-green-200"></div>

            <div
              :class="{'bg-teal-400':item.isClicked}"
              class="border py-2 px-16 bg-gray-400"
              v-on:click="circleTotal(item.marks,index),item.isClicked=!item.isClicked"
            >
              <tr class="px-4">{{item.marks/10}}</tr>
            </div>
          </td>
          <td class="border w-26">
            <div class="border px-2 py-2">
              <tr>Total</tr>
            </div>
            <div class="border px-2 py-2">
              <tr></tr>
            </div>
            <div class="border px-5 py-2">
              <tr>{{elementMount.circle.Total/10}}</tr>
            </div>
          </td>
        </tr>
      </thead>
    </table>
    <!-- // ! circle  ends -->

    <!-- // ! dismount Starts -->

    <table class="table-auto">
      <thead>
        <tr>
          <td class="border w-64">
            <div class="border px-3 py-2 flex content-center flex-wrap bg-gray-400">
              <tr class="text-center">
                <b>Dismount</b>
              </tr>
            </div>
            <div class="border px-3 py-2">
              <tr>Back Jump</tr>
            </div>
          </td>
          <!-- Radio button starts -->
          <td class="border">
            <div class="border px-3 py-2">
              <tr>Point</tr>
            </div>

            <!-- end of one radio -->
            <tr>
              <div class="border px-3 py-2">
                <td>
                  <input type="checkbox" id="Psix" value="1" v-model="elementMount.dismount.Option" />
                  <label for="psix">1.0</label>
                </td>
              </div>
            </tr>
          </td>
          <!-- loop for skin the cat -->
          <td
            class="border w-40"
            v-for="(item,index) in elementMount.dismount.scoreData"
            :key="index"
          >
            <div class="border px-2 py-2 bg-purple-100">
              <tr class="border-green-500 px-20 py-2">{{item.name}}</tr>
            </div>
            <div class="border px-2 py-2 bg-green-200"></div>

            <div
              :class="{'bg-teal-400':item.isClicked}"
              class="border py-2 px-16 bg-gray-400"
              v-on:click="dismountTotal(item.marks,index),item.isClicked=!item.isClicked"
            >
              <tr class="px-4">{{item.marks/10}}</tr>
            </div>
          </td>
          <td class="border w-26">
            <div class="border px-2 py-2">
              <tr>Total</tr>
            </div>
            <div class="border px-2 py-2">
              <tr></tr>
            </div>
            <div class="border px-5 py-2">
              <tr>{{elementMount.dismount.Total/10}}</tr>
            </div>
          </td>
        </tr>
      </thead>
    </table>

    <!-- // ! Mount ends -->

    <!-- Final table starts -->
    <!-- No of Skill and Total "D" Score -->
    <table class="table-auto">
      <thead>
        <td class="border w-64">
          <div class="border px-3 py-4">
            <tr class="font-semibold">Final tally</tr>
          </div>
          <div class="border px-3 py-4">
            <tr class="font-semibold">No Of Skills</tr>
          </div>
          <div class="border px-3 py-4">
            <tr class="font-semibold">Total "D" Score</tr>
          </div>
        </td>
        <td class="border">
          <div class="border px-3 py-4">
            <tr class="font-semibold">.</tr>
          </div>
          <div class="border px-5 py-4">
            <tr>{{this.elementMount.numberOfSkills}}</tr>
          </div>
          <div class="border px-5 py-4">
            <tr>{{this.elementMount.finalDscore}}</tr>
          </div>
        </td>
        <td class="border">
          <button
            type="button"
            @click="calculateSkillsMarks(elementMount.mount.Option.length,elementMount.skinTheCat.Option.length,elementMount.lhold.Option.length,elementMount.circle.Option.length,elementMount.dismount.Option.length)"
            class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white mx-4 px-2 rounded focus:outline-none focus:shadow-outline"
          >compute D Score</button>
        </td>
        <td class="border">
          <div class="border px-5 py-4">
            <tr>.</tr>
          </div>
          <div class="border px-5 py-4 bg-gray-400" v-on:click="eachFall(),totalDeduction()">
            <tr>Each Fall=0.30</tr>
          </div>
          <div class="border px-5 py-4 bg-gray-400" v-on:click="eachPush(),totalDeduction()">
            <tr>Each Push=0.10</tr>
          </div>
        </td>
        <td class="border">
          <div class="border px-5 py-4">
            <tr>.</tr>
          </div>
          <div class="border px-4 py-4 bg-gray-400" v-on:click="eachFallDec(),totalDeduction()">
            <tr>{{parseFloat( elementMount.eachFall).toFixed(2) }}</tr>
          </div>
          <div class="border px-4 py-4 bg-gray-400" v-on:click="eachPushDec(),totalDeduction()">
            <tr>{{ parseFloat( elementMount.eachPush).toFixed(2) }}</tr>
          </div>
        </td>
        <!-- //! Short Exercise Chart -->
        <td class="border">
          <div class="border px-2 py-4">
            <tr class="font-semibold">No.of Element</tr>
          </div>
          <div class="border px-2 py-4">
            <tr>4 to 5</tr>
          </div>
          <div class="border px-2 py-4">
            <tr>2 to 3</tr>
          </div>
          <div class="border px-2 py-4">
            <tr>1</tr>
          </div>
        </td>
        <td class="border">
          <div class="border px-2 py-4">
            <tr class="font-semibold">E Score</tr>
          </div>
          <div class="border px-2 py-4">
            <tr>5</tr>
          </div>
          <div class="border px-2 py-4">
            <tr>3</tr>
          </div>
          <div class="border px-2 py-4">
            <tr>1</tr>
          </div>
        </td>
        <td class="border">
          <div class="border px-5 py-4">
            <tr>.</tr>
          </div>
          <div class="border px-5 py-4">
            <tr class="font-semibold">Total E Score</tr>
          </div>
          <div class="border px-5 py-4">
            <tr class="font-semibold">Total E Deduction</tr>
          </div>
          <div class="border px-5 py-4">
            <tr class="font-semibold">Final Score D+E</tr>
          </div>
        </td>
        <td class="border">
          <div class="border px-5 py-4">
            <tr>.</tr>
          </div>
          <div class="border px-5 py-4">
            <tr>
              {{elementMount.shortExercise}}- {{elementMount.finalEscore/10}}={{elementMount.eSoreWithElement/10}}
              <button
                type="button"
                class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white mx-4 px-2 rounded focus:outline-none focus:shadow-outline"
                @click="computeETotal"
              >compute</button>
            </tr>
          </div>
          <div class="border px-5 py-4">
            <tr>
              {{ parseFloat(elementMount.totalDeduction).toFixed(2)
              }}
            </tr>
          </div>
          <div class="border px-4 py-4">
            <tr>
              {{elementMount.finalScore}}
              <button
                type="button"
                class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white mx-4 px-2 rounded focus:outline-none focus:shadow-outline"
                @click="computeDEScoreTotal"
              >compute</button>
            </tr>
          </div>
        </td>
      </thead>
      <!-- No of Skill and Total "D" Score -->
    </table>
    <!-- lhold Table Starts  -->

    <!-- lhold table ends -->
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      elementMount: {
        mount: {
          scoreData: [
            { name: "Bend Arm", marks: 2, isClicked: false },
            { name: "Bend Leg", marks: 2, isClicked: false },
            { name: "Shoulder Drop", marks: 1, isClicked: false },
            { name: "Toe Flex", marks: 1, isClicked: false },
            { name: "Leg Seperation", marks: 2, isClicked: false },
            { name: "Less Then 2s Hold", marks: 1, isClicked: false }
          ],
          Option: [],
          Total: 0
        },

        skinTheCat: {
          scoreData: [
            { name: "Bend Arm", marks: 2, isClicked: false },
            { name: "Bend Leg", marks: 2, isClicked: false },
            { name: "Leg Seperation", marks: 2, isClicked: false },
            { name: "Toe Flex", marks: 1, isClicked: false },
            { name: "Body Position", marks: 2, isClicked: false },
            { name: "NA", marks: 0, isClicked: false }
          ],
          Option: [],
          Total: 0
        },
        lhold: {
          scoreData: [
            { name: "Bend Arm", marks: 2, isClicked: false },
            { name: "Bend Leg", marks: 2, isClicked: false },
            { name: "Leg Seperation", marks: 2, isClicked: false },
            { name: "Toe Flex", marks: 1, isClicked: false },
            { name: "Less then 2sec", marks: 2, isClicked: false },
            { name: "NA", marks: 0, isClicked: false }
          ],
          Option: [],
          Total: 0
        },
        circle: {
          scoreData: [
            { name: "Bend Arm", marks: 2, isClicked: false },
            { name: "Bend Leg", marks: 2, isClicked: false },
            { name: "Leg Seperation", marks: 2, isClicked: false },
            { name: "Toe Flex", marks: 1, isClicked: false },
            { name: "Body Position", marks: 2, isClicked: false },
            { name: "Amplitude", marks: 1, isClicked: false }
          ],
          Option: [],
          Total: 0
        },
        dismount: {
          scoreData: [
            { name: "Bend Arm", marks: 2, isClicked: false },
            { name: "Bend Leg", marks: 2, isClicked: false },
            { name: "Leg Seperation", marks: 2, isClicked: false },
            { name: "Toe Flex", marks: 1, isClicked: false },
            { name: "Unapproprialte relase", marks: 1, isClicked: false },
            { name: "Landing", marks: 1, isClicked: false }
          ],
          Option: [],
          Total: 0
        },
        numberOfSkills: 0,
        finalDscore: 0,
        finalEscore: 0,
        finalScore: 0,
        shortExercise: 0,
        eSoreWithElement: 0,
        eachFall: 0,
        eachPush: 0,
        totalDeduction: 0
      }
    };
  },
  methods: {
    calculateMount: function(mark, index) {
      if (!this.elementMount.mount.scoreData[index].isClicked) {
        this.elementMount.mount.Total = this.elementMount.mount.Total + mark;
      } else {
        this.elementMount.mount.Total = this.elementMount.mount.Total - mark;
      }
    },

    calculateSkinThecat: function(mark, index) {
      if (!this.elementMount.skinTheCat.scoreData[index].isClicked) {
        this.elementMount.skinTheCat.Total =
          this.elementMount.skinTheCat.Total + mark;
      } else {
        this.elementMount.skinTheCat.Total =
          this.elementMount.skinTheCat.Total - mark;
      }
    },

    lholdTotal: function(mark, index) {
      if (!this.elementMount.lhold.scoreData[index].isClicked) {
        this.elementMount.lhold.Total = this.elementMount.lhold.Total + mark;
      } else {
        this.elementMount.lhold.Total = this.elementMount.lhold.Total - mark;
      }
    },

    circleTotal: function(mark, index) {
      if (!this.elementMount.circle.scoreData[index].isClicked) {
        this.elementMount.circle.Total = this.elementMount.circle.Total + mark;
      } else {
        this.elementMount.circle.Total = this.elementMount.circle.Total - mark;
      }
    },

    dismountTotal: function(mark, index) {
      if (!this.elementMount.dismount.scoreData[index].isClicked) {
        this.elementMount.dismount.Total =
          this.elementMount.dismount.Total + mark;
      } else {
        this.elementMount.dismount.Total =
          this.elementMount.dismount.Total - mark;
      }
    },

    eachFall: function() {
      this.elementMount.eachFall = this.elementMount.eachFall + 0.3;
    },
    eachPush: function() {
      this.elementMount.eachPush = this.elementMount.eachPush + 0.1;
    },

    eachFallDec: function() {
      if (this.elementMount.eachFall <= 0) {
        alert("Minimum Decrease Level Reched");
        return;
      }
      this.elementMount.eachFall = this.elementMount.eachFall - 0.3;
    },
    eachPushDec: function() {
      if (this.elementMount.eachPush <= 0) {
        alert("Minimum Decrease Level Reched");
        return;
      }
      this.elementMount.eachPush = this.elementMount.eachPush - 0.1;
    },
    totalDeduction: function() {
      this.elementMount.totalDeduction =
        this.elementMount.eachFall + this.elementMount.eachPush;
    },
    calculateSkillsMarks: function(
      mountLength,
      catLength,
      lholdLen,
      circleLen,
      dismountLen
    ) {
      // console.log(mountLength);
      // console.log(catLength);
      if (
        mountLength > 1 ||
        catLength > 1 ||
        lholdLen > 1 ||
        circleLen > 1 ||
        dismountLen > 1
      ) {
        alert("valider option not selected");
        return;
      }

      // this.elementMount.finalDscore =
      //   parseFloat(this.elementMount.mount.Option[0]) +
      //   parseFloat(this.elementMount.skinTheCat.Option[0]) +
      //   parseFloat(this.elementMount.lhold.Option[0]) +
      //   parseFloat(this.elementMount.circle.Option[0]) +
      //   parseFloat(this.elementMount.dismount.Option[0]);
      // console.log(this.elementMount.finalEscore);

      this.elementMount.finalDscore = 0;
      this.elementMount.numberOfSkills = 0;
      Object.keys(this.elementMount).forEach(key => {
        if (typeof this.elementMount[key] === "object") {
          Object.keys(this.elementMount[key]).forEach(a => {
            if (a === "Option") {
              if (!this.elementMount[key].Option[0]) {
                console.log("clicked");
              } else {
                this.elementMount.numberOfSkills += 1;
                this.elementMount.finalDscore =
                  parseFloat(this.elementMount.finalDscore) +
                  parseFloat(this.elementMount[key].Option[0]);
                console.log(
                  this.elementMount.numberOfSkills,
                  "number of skills"
                );
              }
            }
          });
        }
      });
    },
    computeETotal: function() {
      if (this.elementMount.numberOfSkills == 0) {
        alert("No Skills Selected, Please Select at least on Skill");
        return;
      }
      if (
        this.elementMount.numberOfSkills == 4 ||
        this.elementMount.numberOfSkills == 5
      ) {
        this.elementMount.shortExercise = 5;
      }
      if (
        this.elementMount.numberOfSkills == 2 ||
        this.elementMount.numberOfSkills == 3
      ) {
        this.elementMount.shortExercise = 3;
      }
      if (this.elementMount.numberOfSkills == 1) {
        this.elementMount.shortExercise = 1;
      }
      this.elementMount.finalEscore =
        this.elementMount.mount.Total +
        this.elementMount.skinTheCat.Total +
        this.elementMount.lhold.Total +
        this.elementMount.circle.Total +
        this.elementMount.dismount.Total;

      this.elementMount.eSoreWithElement =
        this.elementMount.shortExercise * 10 - this.elementMount.finalEscore;

      console.log(this.finalEscore);
    },
    computeDEScoreTotal: function() {
      this.elementMount.finalScore =
        this.elementMount.eSoreWithElement / 10 +
        this.elementMount.finalDscore -
        this.elementMount.totalDeduction;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
red {
  background: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
