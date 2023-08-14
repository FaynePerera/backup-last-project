const shapes = [
  {
    name: 'curve1',
    shape: (
      <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    name: 'curve2',
    shape: (
      <svg viewBox="0 0 2880 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M720 28H0v28h2880V28h-720S1874 0 1440 0 720 28 720 28z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    name: 'wave1',
    shape: (
      <svg viewBox="0 0 2880 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2880 0H0v54.112h720s289.42 40.248 705 0c416.5-37.733 735 0 735 0h720V0z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    name: 'waveshape1',
    shape: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2880 85"
        fill="none"
      >
        <path
          d="M0-6v98h2880V-6H0z M1291.3,63.1l124.7-6.6c-41.3,2.3-84.5,7.5-144.8,9.1c-126.9,3.3-175.4-4-226.7-9.7
	C1093.1,60.9,1176.7,68.4,1291.3,63.1z M1493,65.8l-143.2,10.1c47.4-3.5,97-9.7,166.2-13.1c145.8-7.1,201.7-1.8,260.8,1.9
	C1720.9,61.7,1624.7,57.3,1493,65.8z M1454,62.9c-283.9,25.7-522.3,17.2-645.3,8.6c116.1,6.6,337.9,14.2,616.3-12.8
	c276-25,508.9-15.3,634.7-4.6C1941,45.4,1724.2,36.8,1454,62.9z"
          fill="currentColor"
        />
      </svg>
    )
  }
];

export default shapes;
