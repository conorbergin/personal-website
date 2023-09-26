<script lang="ts">
  import { onMount } from 'svelte'
    import { fix_position } from 'svelte/internal'

  let location = { x: 0, y: 0 }
  let pupil = {x :{left: 0, right: 0}, y:0}

  let eyelid = 0



  const selectEyelidFrame = (pos) => 50 * (pos > 2 ? 5 - pos : pos)


  const blink = () => {
    if (f_pos != 0) return
    let i = setInterval(() => {
      if (f_pos < 5) {
        f_pos++
      } else {
        f_pos = 0
        clearInterval(i)
      }
    }, 100)
  }


  const clamp = (num : number, min: number, max : number) => num <= min ? min : num >= max ? max : num

  const selectEyeFrame = (x: number) => (x + 4) * 49 + 10

  const handleMousemove = (e: MouseEvent) => {
    let dx = clamp(e.clientX - location.x - 190, -200, 200)
    let dy = clamp(e.clientY - location.y - 40, -200, +200)

    pupil.y = Math.round(dy / 100) * 6

    if (dy <= 50 && dy >= -50 && dx <= 70 && dx >= -70) {
      if (dx <= 70 && dx >= 20) {
        pupil.x.left = 1
        pupil.x.right = 0
      } else if (dx <= -20 && dx >= -70) {
        pupil.x.left = 0
        pupil.x.right = -1
      } else {
        pupil.x.left = 1
        pupil.x.right = -1
      }
    } else {
      pupil.x.left = pupil.x.right = Math.round(dx / 50)
    }
  }

  // get centre of element
  let element : HTMLElement
  const handleResize = () => {
    let rect = element.getBoundingClientRect()
    location = {
      x: rect.left,
      y: rect.top,
    }
  }

  onMount(() => {
    handleResize()

    setInterval(blink, 20000)
  })
</script>

<div id="goblin">
  <img
    style="right:0px; margin-right: -10px;"
    src="/goblin/border.png"
    height="100"
  />

  <div bind:this={element}>
    <div
      style="background-position:-{selectEyeFrame(pupil.x.left)}px {pupil.y}px;"
      id="a"
    />
    <div
      style="background-position:-{selectEyeFrame(pupil.x.right)}px {pupil.y}px"
      id="b"
    />

    <div id="c" style="background-position-x:-{selectEyelidFrame(eyelid)}px" />
    <div id="d" style="background-position-x:-{selectEyelidFrame(eyelid)}px" />
  </div>
</div>

<svelte:window on:mousemove={handleMousemove} on:resize={handleResize} />

<style>
  div {
    position: relative;
  }

  #a,
  #b {
    height: 30px;
    width:40px;
    top: 30px;
    position: absolute;
    background-image: url('/goblin/eyes.png');
    background-size: auto 30px;
    background-repeat: no-repeat;
  }

  #a {
    left: 147px;
  }

  #b {
    left: 193px;
  }

  #c,
  #d {
    height: 50px;
    width: 50px;
    position: absolute;
    background-image: url('/goblin/eyelid.png');
    background-size: auto 50px;
    background-repeat: no-repeat;
  }

  #c {
    left: 140px;
    top: 19px;
  }

  #d {
    left: 185px;
    top: 20px;
  }
  img {
    position: absolute;
    overflow: hidden;

    /* margin: 0px -10px */
  }

  #goblin {
    user-select: none;

    position: relative;
    margin: 0px 0px;

    height: 100px;
    margin-bottom: -20px;
    background: url('/goblin/screentone_1.png') no-repeat;
    background-size: auto 100px;
    margin-right: 10px;
  }
</style>
