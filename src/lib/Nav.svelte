<script>
  // all images are 3412 x 400
  import Eyes from './Eyes.svelte'
  import Left from './Left.svelte'
  import Goblin from './Goblin.svelte'
</script>

<nav>
  <a href="/">[ Home ]</a>
  <a href="/about/">[ About ]</a>
</nav>
<div id="wrapper">
  <!-- <img src="/nav/screentone_1.png" height="100" /> -->
  <img style="right:0px; margin-right: -10px;" src="/nav/border.png" height="100" />
  <Goblin />

</div>

<style>
  img {
    position: absolute;
    overflow: hidden;

    /* margin: 0px -10px */
  }

  #wrapper {
    user-select: none;
    
    position: relative;
    margin: 0px 0px;

    height: 100px;
    margin-bottom: -20px;
    background: url('/nav/screentone_1.png') no-repeat ;
    background-size: auto 100px;
    margin-right: 10px;


  }

</style>
