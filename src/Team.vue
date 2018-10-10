<template>
    <div id="team">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-2">
            <img src="src/assets/img/bitmap-copy-3@3x.png" class="rank-logo" alt="rank-logo"> <span class="rank-text">TEAM AVG CURRENT SEASON</span>    

            <p class="team-info">
              Started on 2015 as an all Filipino squad, the team saw immediate success in the SEA region. They rose further, becoming a globally recognized Dota 2 
              squad and are treated as hometown heroes not only by local esports fans, but by the SEA region as well.
            </p>
            <p class="area">
              Philippines <br>
              NA Server <br>
              English 
            </p>
            </div>

            <div class="column">
              <div class="columns is-desktop team-member">
                <div class="column is-2">
                  <img src="src/assets/img/p1.png">
                  <div class="player-info">
                    <p class="nickname">Raven</p>
                    <p class="fullname">Marc Fausto</p>
                    <p class="role">Member</p>
                  </div>
                </div>
                <div class="column is-2">
                  <img src="src/assets/img/p2.png">
                  <div class="player-info">
                    <p class="nickname">Raven</p>
                    <p class="fullname">Marc Fausto</p>
                    <p class="role">Member</p>
                  </div>
                </div>
                <div class="column is-2">
                  <img src="src/assets/img/p3.png">
                  <div class="player-info">
                    <p class="nickname">Raven</p>
                    <p class="fullname">Marc Fausto</p>
                    <p class="role">Member</p>
                  </div>
                </div>
                <div class="column is-2">
                  <img src="src/assets/img/p4.png">
                  <div class="player-info">
                    <p class="nickname">Raven</p>
                    <p class="fullname">Marc Fausto</p>
                    <p class="role">Member</p>
                  </div>
                </div>
                <div class="column is-2">
                  <img src="src/assets/img/p5.png">
                  <div class="player-info">
                    <p class="nickname">Raven</p>
                    <p class="fullname">Marc Fausto</p>
                    <p class="role">Member</p>
                  </div>
                </div>
              </div>

              <div class="columns is-desktop">
                <div class="column is-2">
                </div>
                <div class="column is-2">
                  <img src="src/assets/img/p6.png">
                  <div class="player-info">
                    <p class="nickname">Raven</p>
                    <p class="fullname">Marc Fausto</p>
                    <p class="role">Member</p>
                  </div>
                </div>
                <div class="column is-2">
                  <img src="src/assets/img/p6.png">
                  <div class="player-info">
                    <p class="nickname">Raven</p>
                    <p class="fullname">Marc Fausto</p>
                    <p class="role">Member</p>
                  </div>
                </div>
                <div class="column is-2">
                </div>
                <div class="column is-2">
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <div class="columns">
                    <table class="table">
                        <thead class="table-header">
                          <tr>
                            <th></th>
                            <th style="text-align:center; color: #ffffff;">History</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td id="year">2016</td>
                            <td id="tournament-name">The International</td>
                            <td id="rank">7th</td>
                          </tr>
                          <tr>
                            <td id="year">2017</td>
                            <td id="tournament-name">The International</td>
                            <td id="rank">9th</td>
                          </tr>
                          <tr>
                            <td id="year">2018</td>
                            <td id="tournament-name">The International</td>
                            <td id="rank">13th</td>
                          </tr>
                        </tbody>
                    </table>
                  </div>

                  <div class="columns">
                    <table class="table">
                        <thead class="table-header">
                          <tr>
                            <th></th>
                            <th style="text-align:center; color: #ffffff;">History</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td id="year">2016</td>
                            <td id="tournament-name">The International</td>
                            <td id="rank">7th</td>
                          </tr>
                          <tr>
                            <td id="year">2017</td>
                            <td id="tournament-name">The International</td>
                            <td id="rank">9th</td>
                          </tr>
                          <tr>
                            <td id="year">2018</td>
                            <td id="tournament-name">The International</td>
                            <td id="rank">13th</td>
                          </tr>
                        </tbody>
                    </table>
                  </div>
                </div>

                <div class="column">
                  <table class="table">
                        <thead class="table-header">
                          <tr>
                            <th></th>
                            <th style="text-align:center; color: #ffffff;">History</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td id="year">2016</td>
                            <td id="tournament-name">The International</td>
                            <td id="rank">7th</td>
                          </tr>
                          <tr>
                            <td id="year">2017</td>
                            <td id="tournament-name">The International</td>
                            <td id="rank">9th</td>
                          </tr>
                          <tr>
                            <td id="year">2018</td>
                            <td id="tournament-name">The International</td>
                            <td id="rank">13th</td>
                          </tr>
                        </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
</template>

<script>

import Icon from 'vue-awesome/components/Icon'

export default {
    name: 'team',
    components: {
        Icon
    },
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style>
    .rank-logo{
      width: 20px;
    }

    .rank-text{
      font-size: 8px;
      line-height: 2;
      letter-spacing: 1.7px;
      color: #ffffff;
      text-transform: uppercase
    }

    .team-info{
      font-size: 14px;
      line-height: 1.71;
      color: #ffffff;
    }

    .area{
      margin-top: 20px;
      font-size: 14px;
      opacity: 0.6;
      line-height: 1.71;
      color: #ffffff;
    }

    .player-info{
      opacity: 0.7;
      background-color: #0c0c0c;
      box-shadow: inset 0 2px 5px 0 rgba(0, 0, 0, 0.11);
      color: #ffffff;
      text-align: center;
    }

    .nickname{
      font-family: Dosis;
      font-size: 20px;
    }

    .fullname{
      font-size: 14px;
      line-height: 1.71;
      color: rgba(255, 255, 255, 0.5);
    }

    .role{
      opacity: 0.6;
      font-family: Dosis;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: bold;
    }


    /* =============== TABLE ==================== */
    table{
      border-collapse: collapse;
    }

    th{
      background-image: linear-gradient(to top, #fd3200, #c90007);
      opacity: 1;
    }

    tr:nth-child(odd){
      opacity: 1;
      background-color: #0c0c0c; 
      color: #ffffff;
    }

    tr:nth-child(even){
      opacity: 0.7;
      background-color: #0c0c0c; 
      color: #ffffff;
    }

    .table-header{
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 3px;
    }

    #year{
      color: #ffffff;
      font-size: 12px;
      font-weight: bold;
      text-align: right;
    }

    #tournament-name{
      height: 20px;
      font-family: Dosis;
      font-weight: bold;
      font-size: 16px;
      letter-spacing: 1.3px;
      text-transform: uppercase;
      
    }

    .table td, .table th{
      border: none;
    }

    #rank{
      font-family: Dosis;
      font-size: 16px;
      letter-spacing: 1.3px;
      font-weight: bold
    }


</style>

