<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
 
        <router-link to="/" class="nav-link" >Home</router-link> 
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
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
  }
}
</script>

<style scoped>
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
