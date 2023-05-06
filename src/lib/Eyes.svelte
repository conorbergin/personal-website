<script lang="ts">
  import { onMount } from 'svelte'

  let x_left = 0
  let x_right = 0
  let y = 0

  let posX = 0
  let posY = 0

  let element: SVGElement

  const handleMousemove = (e: MouseEvent) => {
    let dx_left = e.clientX - posX - 10
    let dx_right = e.clientX - posX - 150
    let dy = e.clientY - posY - 10
    let angle_left = Math.atan2(dy, dx_left)
    let angle_right = Math.atan2(dy, dx_right)
    x_left = 10 * Math.cos(angle_left)
    x_right = 10 * Math.cos(angle_right)
    y = 10 * Math.sin(angle_right)
    // console.log(x, y)
  }

  const handleResize = () => {
    let rect = element.getBoundingClientRect()
    posX = rect.left
    posY = rect.top
  }

  onMount(() => {
    handleResize()
  })
</script>

<svg
  bind:this={element}
  width="158"
  height="40"
  viewBox="0 0 158 40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2.5 17.9999C16 -5 40.5 -5.50002 53.5 29.9999C34 32.9999 11.5 34.9999 2.5 17.9999Z"
    stroke="black"
    stroke-width="4"
  />
  <mask
    id="mask0_2_29"
    style="mask-type:luminance"
    maskUnits="userSpaceOnUse"
    x="3"
    y="2"
    width="51"
    height="31"
  >
    <path
      d="M3 18.151 C16.5 -4.84891 41 -5.34893 54 30.151C34.5 33.151 12 35.151 3 18.151Z"
      fill="white"
    />
  </mask>
  <g mask="url(#mask0_2_29)">
    <g transform="translate({x_left - 3},{y + 5})">
      <path
        d="M30.8333 -9C49.2083 11.339 30.8333 39 30.8333 39C30.8333 39 17.7083 14.5932 30.8333 -9Z"
        fill="black"
        stroke="black"
      /></g
    >
  </g>
  <path
    d="M155.5 18.151C142 -4.84891 117.5 -5.34893 104.5 30.151C124 33.151 146.5 35.151 155.5 18.151Z"
    stroke="black"
    stroke-width="4"
  />
  <mask
    id="mask1_2_29"
    style="mask-type:luminance"
    maskUnits="userSpaceOnUse"
    x="104"
    y="2"
    width="51"
    height="31"
  >
    <path
      d="M155 18.3021C141.5 -4.69781 117 -5.19783 104 30.3021C123.5 33.3021 146 35.3021 155 18.3021Z"
      fill="white"
    />
  </mask>
  <g mask="url(#mask1_2_29)">
    <g transform="translate({x_right - 3},{y + 5})">
      <path
        d="M135.833 -13C154.208 7.33898 135.833 35 135.833 35C135.833 35 122.708 10.5932 135.833 -13Z"
        fill="black"
        stroke="black"
      />
    </g>
  </g>
  <g transform="translate(0,-10)">
    <path
      d="M70.5029 39C70.1029 39.8 67.1696 46.6667 67.0029 49C66.8362 51.3333 73.8845 48.0772 77.0029 50.5C81.2369 53.7895 80.6412 54 86.0029 54C88.0029 54 90.0029 53 91.5029 50.5C93.345 48.6579 95.6626 50.7339 97.0029 48.5C98.5029 46 82.5 7.5 82.5 7.5"
      stroke="black"
      stroke-width="3"
    />
  </g>
</svg>

<svelte:window on:mousemove={handleMousemove} on:resize={handleResize} />

<style>
  svg {
    border: 1px solid #000000;
  }
</style>