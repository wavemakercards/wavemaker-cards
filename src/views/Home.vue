<template>
  <div class="home">
    <nav class="navbar fixtop" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" @click="$router.push('/')">
        Home
      </a>
      
      
         <a class="navbar-item" @click="setss('bulma_stylesheet','bulma')">
        default
      </a>

      <a class="navbar-item" @click="setss('bulma_stylesheet','bulma-cyborg')">
        cyborg
      </a>
        <a class="navbar-item" @click="setss('wavemaker_stylesheet','wavemaker')">
        WM light
      </a>
     <a class="navbar-item" @click="setss('wavemaker_stylesheet','wavemaker-dark')">
        WM dark
      </a>
        <a class="navbar-item" @click="setss('bulma_stylesheet','bulma-material')">
        material
      </a>
       <a class="navbar-item" @click="setss('bulma_stylesheet','bulma-litera')">
        litera
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
   <h1>UPDATED v4</h1>
        <div id="nav">
      
    </div>
    <div class="wavemaker-page">
      <p>

      Someone is about to die.
</p><p>
Of course, that can be said at almost any time. The world is a big place with hundreds of thousands of babies being born every day adding to the billions of people already alive. Someone is always dying somewhere, but right here, and right now. Someone is about to die. 
</p><p>
Harry Wallace is sitting at the nurses station, swiveling back and forth in the lone chair, it’s squeaking as he does this, a rhythmic  squeak …. Squeak …. Squeak which anywhere else would have had adults shouting at him, but not here. This is one of those wards people go to to have a quiet death. Quiet, that is,  apart from the muted hiss of oxygen tanks, the faint whirr of machinery and, now, the irritating squeaking of the chair. Harry is thirteen years old, the age where boys are turning into men, and odd spurts of growth kick in so they can seem short and chubby one minute then tall and underfed the next, right now he is in an odd inbetween stage, gangly, but his face still holds onto the childlike look of innocence, you can however see the beginnings of the quick intelligent eyes, square jaw and muscular build he will one day possess, if you can see past the fact that he is absentmindedly picking his nose.
</p><p>
He looks tired, it has after all been a long day -- his last day…. at his current school that is, for I will tell you now that Harry is not going to die today, although he is, in the way over-dramatic teens will, lamenting the fact that his life was, in fact, over. He was leaving behind his school, his friends and 
</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  //  HelloWorld
  },
  methods:{
    setss(target, ss){

      window.SwitchStyleSheet(target, ss)
    }
  }
}
</script>

<style scoped>
.fixtop{
  position: sticky;
  top:0px
}

.wavemaker-page{
  margin-top:10px;
  max-width: 800px;
  background-color: var(--c9);
  color: var(--c3);
  border: 1px solid var(--c7);
  margin:0 auto;
  min-height: 700px;
  padding:100px;
  font-family: "Merriweather", serif;
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 40px;
  text-align: justify;
}
</style>
