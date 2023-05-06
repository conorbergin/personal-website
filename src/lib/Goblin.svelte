<script>
  import { onMount } from 'svelte'
  let x_left = 0
  let x_right = 0
  let y = 0

  let posX = 0
  let posY = 0

  let b_pos = 4
  let cel = 0
  let cer = 0

  let f_pos = 0

  let moving = false
  let move_timer = null


  const frame = (pos) => {
    if (pos > 2) {
        return 5 - pos
    } else {
        return pos
    }
  }

  const blink = () => {
    if (f_pos != 0) return
    if (moving) return
    let i = setInterval(() => {
        if (f_pos < 5) {
            f_pos++
            } else {
            f_pos = 0
            clearInterval(i)
        }
    },100)
  }

  let element

  const clamp = (num, min, max) => {
    return num <= min ? min : num >= max ? max : num
  }

  const handleMousemove = (e) => {
    moving = true
    move_timer = setTimeout(() => {
        moving = false
    }, 5000)
    let dx = e.clientX - posX - 190
    let dy = e.clientY - posY - 40

    y = Math.round(clamp(dy, -50, 50) / 50) * 6

    cel = dx <= 74 && dx >= -20 && dy <= 50 && dy >= -50 ? 1 : 0
    cer = dx <= 20 && dx >= -75 && dy <= 50 && dy >= -50 ? 1 : 0
    b_pos = Math.round(clamp(dx, -200, 200) / 50 + 4)
  }

  const handleResize = () => {
    let rect = element.getBoundingClientRect()
    posX = rect.left
    posY = rect.top
  }

  onMount(() => {
    handleResize()

    setInterval(blink, 20000)
  })
</script>

<div bind:this={element}>
  <div
    style="background-position-x:-{(b_pos + cel) * 49 +
      10}px; transform:translate({0}px,{y}px)"
    id="a"
  />
  <div
    style="background-position-x:-{(b_pos - cer) * 49 +
      10}px; transform:translate({0}px,{y}px)"
    id="b"
  />

  <div id="c" style="background-position-x:-{frame(f_pos) * 50}px" />
  <div id="d" style="background-position-x:-{frame(f_pos) * 50}px" />
</div>

<svelte:window on:mousemove={handleMousemove} on:resize={handleResize} />

<style>
  div {
    position: relative;
  }

  #a,
  #b {
    height: 100px;
    width: 40px;
    position: absolute;
    background-image: url('/nav/eyes.png');
    background-size: auto 50px;
    background-repeat: no-repeat;
  }

  #a {
    left: 145px;
    top: 21px;
  }

  #b {
    left: 193px;
    top: 21px;
  }

  #c,
  #d {
    height: 100px;
    width: 50px;
    position: absolute;
    background-image: url('/nav/eyelid.png');
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
</style>
