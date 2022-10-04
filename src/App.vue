<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col md="4">
            <v-card class="fill-height" elevation="6">
              <v-img :src="require('@/assets/marcelwlotzka.jpg')" height="400px">
                <v-card-title class="name">Marcel Wlotzka</v-card-title>
              </v-img>

              <v-card-text>
                <v-list>
                  <v-list-item v-for="(val, key) in personalData" :key="key">
                    <v-list-item-content>
                      <v-list-item-title class="d-flex align-center">
                        <v-icon>mdi-{{ key }}</v-icon>
                        <span class="ml-2">{{ val }}</span>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <v-list v-for="(chart, i) in charts" :key="i">
                  <v-divider class="ma-4"></v-divider>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="d-flex align-center">
                        <v-icon>{{ chart.icon }}</v-icon>
                        <span class="ml-2"><b>{{ chart.title }}</b></span>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item v-for="(item, j) in chart.data" :key="j">
                    <v-list-item-content>
                      <v-list-item-title>{{ item.label }}</v-list-item-title>

                      <v-progress-linear v-model="item.level" class="progress" color="primary" height="15" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col md="8">
            <v-card class="fill-height" elevation="6">
              <v-card-title class="title text-h4">
                <v-icon class="text-h4" color="primary">mdi-chart-bar</v-icon>
                <span class="ml-2 occupationalHistoryTitle">Occupational history</span>
              </v-card-title>

              <v-card-text>
                <v-list>
                  <template v-for="(val, i) in history">
                    <v-divider v-if="i !== 0" class="mx-4" :key="i + '-divider'"></v-divider>

                    <v-list-item :key="i + '-item'">
                      <v-list-item-content>
                        <v-list-item-title>
                          <b>{{ val.doing }}</b>
                        </v-list-item-title>

                        <v-list-item-subtitle class="primary--text d-flex align-center">
                          <v-icon color="primary">mdi-calendar-month</v-icon>
                          <span class="ml-2 mt-1">{{ val.since }} - {{ val.until }}</span>
                        </v-list-item-subtitle>

                        <v-list-item-subtitle class="black--text d-flex align-center">
                          <v-icon color="black">mdi-map-marker-circle</v-icon>
                          <span class="ml-2 mt-1">{{ val.where }}</span>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="primary">
          <strong class="subheading">Find me on social media.</strong>

          <v-spacer></v-spacer>

          <v-btn :href="link.href" target="_blank" v-for="(link, i) in links" :key="i" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Marcel Wlotzka</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    personalData: {
      home: 'Lautertal, Germany',
      briefcase: 'Full-Stack Web-Developer',
      'briefcase-clock': 'iOS Developer',
      email: 'marcel@wlotzka.org'
    },
    charts: [
      {
        title: 'Skills',
        icon: 'mdi-star-circle-outline',
        data: [
          {
            label: 'JavaScript (ES2021+)',
            level: 95
          },
          {
            label: 'NodeJS',
            level: 93
          },
          {
            label: 'PHP 8',
            level: 90
          },
          {
            label: 'Linux (Debian based)',
            level: 85
          },
          {
            label: 'TypeScript',
            level: 75
          },
          {
            label: 'Objective-C',
            level: 70
          },
          {
            label: 'Java',
            level: 68
          },
          {
            label: 'Swift',
            level: 60
          },
          {
            label: 'Kubernetes',
            level: 40
          }
        ]
      },
      {
        title: 'Frameworks',
        icon: 'mdi-hammer-wrench',
        data: [
          {
            label: 'VueJS 2+',
            level: 100
          },
          {
            label: 'AngularJS',
            level: 70
          },
          {
            label: 'ReactJS',
            level: 60
          }
        ]
      },
      {
        title: 'Languages',
        icon: 'mdi-earth',
        data: [
          {
            label: 'German',
            level: 100
          },
          {
            label: 'English',
            level: 90
          },
          {
            label: 'tlhIngan Hol (Klingon)',
            level: 1
          }
        ]
      }
    ],
    history: [
      {
        doing: 'IT-Innovation Manager',
        where: 'Mainova AG, Frankfurt am Main',
        since: 'Sep. 2018',
        until: 'Current'
      },
      {
        doing: 'Head of software development',
        where: 'CMF | Die Sales Agentur®, Mörfelden-Walldorf',
        since: 'Sep. 2016',
        until: 'Aug. 2018'
      },
      {
        doing: 'Sr. App developer',
        where: '2VizCon GmbH, Neu-Isenburg',
        since: 'Aug. 2014',
        until: 'Aug. 2016'
      },
      {
        doing: 'Web and App developer',
        where: 'KWP | Agency for interconnected communications, Neu-Isenburg',
        since: 'Aug. 2009',
        until: 'Aug. 2014'
      },
      {
        doing: 'Master of Science in Computer Science with specialization in IT Management',
        where: 'TU Darmstadt',
        since: 'Oct. 2009',
        until: 'Sep. 2018'
      },
      {
        doing: 'Web developer, Internship',
        where: 'XYQOM, Waldbröl',
        since: 'Aug. 2009',
        until: 'Aug. 2014'
      }
    ],
    links: [
      {
        icon: 'mdi-github',
        href: 'https://github.com/myMartek'
      },
      {
        icon: 'mdi-facebook',
        href: 'https://www.facebook.com/myMartek'
      },
      {
        icon: 'mdi-twitter',
        href: 'https://twitter.com/myMartek'
      },
      {
        icon: 'mdi-linkedin',
        href: 'https://www.linkedin.com/in/marcel-wlotzka-5b61a0a4/'
      }
    ]
  }),
};
</script>

<style lang="scss" scoped>
.name {
  backdrop-filter: blur(20px);
  background-color: rgba(207, 207, 207, 0.1);
  display: block;
  position: absolute;
  bottom: 25px;
  left: 25px;
  border-radius: 5px;
  padding: 5px;
  font-size: 1.5em;
}

.list-item {
  line-height: 50px;
}

.progress {
  border-radius: 15px;
}

.occupationalHistoryTitle {
  color: rgb(0, 0, 0);
}
</style>
