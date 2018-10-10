<template>
		<div id="header">
				<img src="src/assets/img/group-12@3x.png" alt="dota2-logo" class="dota2-logo">

				<div class="hero-body">
						<div class="container">
								
								<div class="columns is-desktop">
										<div class="column is-4">
												<img src="src/assets/img/5257.png">
										</div>


										<div class="column">
												<span id="team-name">TNC Predator</span> <icon class="check icon" name="check" label=""/> <span class="number-of-likes">12</span> <icon class="thumbs-up" name="thumbs-up" label=""/>
												<div class="columns">
														<div class="column">
																<icon class="recruit-icon" name="clipboard-check" label=""/> <span class="recruit-text">Recruiting</span>
																<icon class="recruit-icon" name="khanda" label=""/> <span class="recruit-text">Ready to Scrim</span>	
														</div>
												</div>

												<div class="columns is-mobile">
														<div class="column is-half">

														</div>
														<div class="column broadcast">
																<icon class="broadcast-icon" name="camera" label=""/>
																<p class="broadcast-text">Photo</p>
														</div>
														<div class="column">
																<icon class="broadcast-icon" name="video" label=""/>
																<p class="broadcast-text">Videos</p>
														</div>
														<div class="column">
																<icon class="broadcast-icon" name="broadcast-tower" label=""/>
																<p class="broadcast-text">Stream</p>
														</div>
												</div>

												<div class="columns is-mobile">
														<ul class="option">
																<li class="list-option column"><a href="#" class="request-join">Request to join</a></li>
																<li class="list-option column"><a href="#" class="scrim">scrim</a></li>
																<li class="list-option column"><a href="#" class="follow">Follow</a></li>
														</ul>
												</div>

												<div class="columns">
													<div class="column is-4 team-population">
														<div class="columns is-mobile">
															<div class="column">
																<p class="rank-number">46</p>
																<p class="rank-text">team rank</p>
															</div>
															<div class="column">
																<p class="rank-number">72,658</p>
																<p class="rank-text">follower</p>
															</div>
														</div>
													</div>
												</div>

												</div>
										</div>
								</div>
						</div>
		</div>
</template>


<script>
import Icon from "vue-awesome/components/Icon";

export default {
  name: "header",
  components: {
    Icon
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
.dota2-logo {
  width: 120px;
  margin-top: 30px;
  margin-left: 30px;
}

#team-name {
  font-family: Dosis;
  font-size: 24px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.number-of-likes {
  font-size: 18px;
  font-weight: 800;
  line-height: 1.33;
  text-align: right;
  color: #ffffff;
}

/* ======= ICON ====== */
.check {
  color: #64c18d;
  font-size: 24px;
}

.thumbs-up {
  color: red;
}

.recruit-icon {
  color: #ffffff;
  margin-right: 5px;
}

.broadcast-icon {
  color: #ffffff;
  opacity: 0.5;
}

/* ============ */

.recruit-text {
  opacity: 0.6;
  font-family: Dosis;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
}

.broadcast {
  text-align: center;
}

.broadcast-text {
  font-family: Dosis;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 3px;
}

.option {
  margin-top: 50px;
  width: 100%;
}

.option li {
  display: inline-block;
}

.option li a {
  text-transform: uppercase;
  border-radius: 10px;
  padding: 10px 40px;
  transition: color 0.2s;
  line-height: 1.83;
  letter-spacing: 3px;
  font-size: 12px;
}

.request-join:link,
.request-join:visited {
  border: solid 1px #f5a623;
  color: #f5a623;
}

.request-join:hover,
.request-join:active {
  color: aqua;
}

.scrim:link,
.scrim:visited {
  border: solid 1px #286fd8;
  color: #286fd8;
}

.scrim:hover,
.scrim:active {
  color: aqua;
}

.follow:link,
.follow:visited {
  border: solid 1px #43a4dc;
  color: #43a4dc;
}

.follow:hover,
.follow:active {
  color: aqua;
}

.team-population {
  margin-top: 30px;
  text-align: center;
  opacity: 0.7;
  background-color: #0c0c0c;
}

.rank-number {
  font-size: 20px;
  font-weight: 800;
  line-height: 0.8;
  text-align: center;
  color: #ffffff;
}

.rank-text {
  font-family: Dosis;
  font-size: 12px;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
  opacity: 0.6;
  margin-top: 10px;
  text-transform: uppercase;
}
</style>
