// HeroCategories.js
import React from 'react';
import styles from './HeroCategories.module.css';

const categoryData = [
  {
    name: 'All',
    icon: `<svg class="bi bi-handbag" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"/></svg>`
  },
  {
    name: 'Cafe',
    icon: `<?xml version="1.0" ?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title/><g id="Icons"><path d="M28.95,24.051a5,5,0,0,0-7.071,0L19.05,26.879a5,5,0,1,0,7.071,7.07l2.829-2.828a5,5,0,0,0,0-7.07Zm-8.486,4.242,2.829-2.828a3,3,0,0,1,4.243,0c.012.012.02.027.032.039a13.966,13.966,0,0,1-3.975,2.572A15.965,15.965,0,0,0,19.6,30.565c0-.051-.015-.1-.015-.151A2.979,2.979,0,0,1,20.464,28.293Zm7.072,1.414-2.829,2.828a3.073,3.073,0,0,1-4.243,0c-.012-.012-.021-.027-.033-.04a13.966,13.966,0,0,1,4.013-2.608A16,16,0,0,0,28.4,27.429c0,.053.015.1.015.157A2.979,2.979,0,0,1,27.536,29.707Z"/><path d="M39,8h-.279L36.949,2.684A1,1,0,0,0,36,2H12a1,1,0,0,0-.949.684L9.279,8H9a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h.089l2.745,29.279A2.988,2.988,0,0,0,14.821,46H33.179a2.988,2.988,0,0,0,2.987-2.72L38.911,14H39a2,2,0,0,0,2-2V10A2,2,0,0,0,39,8ZM12.721,4H35.279l1.334,4H11.387ZM34.652,38h-21.3L11.661,20H36.339Zm-1.473,6H14.821a1,1,0,0,1-.995-.907L13.536,40H34.464l-.29,3.094A1,1,0,0,1,33.179,44Zm3.348-26H11.473L11.1,14H36.9ZM38,12H9V10H39v2Z"/></g></svg>`
  },
  {
    name: 'Home',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 21V13.6C9 13.0399 9 12.7599 9.10899 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75992 12 10.0399 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V21M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
  },
  {
    name: 'Toys',
    icon: `<?xml version="1.0" ?><svg style="enable-background:new 0 0 960 960;" version="1.1" viewBox="0 0 960 960" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
    .st0{display:none;}
    .st1{display:inline;opacity:0.93;}
    .st2{display:inline;fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
    .st3{display:inline;}
    .st4{fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
    .st5{display:inline;fill:none;stroke:#1A1D3F;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
    .st6{fill:#DDEDE7;}
    .st7{fill:#1A1D3F;}
    .st8{fill:#E9B44D;}
    .st9{fill:#ED644E;}
    .st10{fill:#494EDF;}
    .st11{fill:#3DC5A1;}
    .st12{fill:#F6CEC1;}
    .st13{fill:none;}
    .st14{fill:none;stroke:#1A1D3F;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
    .st15{display:inline;fill:#E9B44D;}
    .st16{fill:#222222;}
    .st17{display:inline;fill:#222222;}
  </style><g class="st0" id="guide"/><g class="st0" id="sketch"/><g class="st0" id="stroke"><path class="st2" d="M639,508.6c-132.5-1.9-212.9,4.5-405.8,4.5c-0.6-10.9,0.4-18.4-0.2-29.3c118.1-3.1,287.7-4.9,405.8-8.1   C639.7,489,641.6,497.4,639,508.6z"/><path class="st2" d="M608.8,475.7c0-106-17.7-147.4,14.5-211.2c11.3-22.4,31.7-39.2,54.8-48.4c9.5-3.8,19.9-3.6,26.9-11.3   c10.2-11.1,18.8-22.1,31.3-31c4.5-3.2,10.1-6.2,15.2-4.3c5.9,2.2,7.7,9.6,8.7,15.8c1.5,9.7,0.6,26.5,8.3,32.9   c8.6,7.2,21.9,11,31.3,17.8c20.6,14.9,38.2,34.1,51.4,55.7c14.3,23.3,24,52.6,13.1,77.6c-6.5,14.7-20,26.2-35.5,30.1   c-14.6,3.7-32.4,3.8-48-8.8c-9.7-7.8-19-23.8-33.9-19.9c-10.5,2.8-11.3,16.2-12.2,27c-9.1,107.8-4.3,168.1,22.8,279.6"/><path class="st2" d="M260.4,483.1c-7.3-33.5-37.4-44.6-64.2-41.6c-32.6,3.7-46.3,20-61.2,35.9s-24.7,35.8-33.1,56   c-3.2,7.7-6.3,15.7-12.3,21.4s-15.9,8.4-22.7,3.7c-1.2,25.5,18.3,50.3,43.4,55.2c25,4.9,53.3-15.4,58.9-35.9   c3.8-14.1,9.6-29.6,22.7-36.1c13.6-6.7,27.3,3.8,35.6,16.5c28.3,42.9,11.2,96.7,3.3,143.4"/><path class="st2" d="M299.6,725.1c10.8-44.9,21.2-101.8,49.7-120.2c16.4-10.5,39.5-14.8,58.9-16.8c34.2-3.5,171.8-8.9,205.8,2.1   c29.5,9.5,49.4,77.6,72,118"/><path class="st2" d="M760.3,186.3c25.5,6.4,47.9,17,63,27.8c-5.7,8.6-12.1,17.1-18.4,25.7"/><path class="st2" d="M572.5,476.6c-3-45.4-7.7-149.2,8.2-196.2c28.2-83.2,90.1-104.2,146.8-99.6"/><path class="st2" d="M696.6,275c1.2,8.5,9.9,15.2,18.4,14.2c8.5-1,15.5-9.5,14.7-18.1C727.7,249.2,693.5,253,696.6,275z"/><path class="st2" d="M832.8,670c-7.2-9-13-19.8-20.2-28.7c-154.5,123.9-493.9,144.5-656.5,16.3c-4.2,6-14.4,14-18.5,20   c67.5,67.6,157.8,85.5,242,97C541.8,796.7,700.1,766,832.8,670z"/></g><g id="outline"><path d="M815.2,238.4c4.9-6.6,9.9-13.4,14.4-20.2c2.2-3.4,1.4-7.9-1.9-10.2c-16.1-11.5-38-21.4-60.8-27.7   c-1.3-5.9-4.3-14.6-12.8-17.8c-9.8-3.7-19.1,3-22.2,5.2c-2.5,1.7-4.8,3.6-7,5.4c-43.8-2.8-118.5,8-151.3,104.9   c-15.2,44.9-12.5,136.6-9.1,191.9c-41.3,0.8-85.5,1.6-128.8,2.3c-58,1-117.5,2-169.6,3.2c-10.4-32.9-42.3-44.6-70.7-41.4   c-33.8,3.8-49,20.2-63.7,36l-2.1,2.2c-16.6,17.7-26.7,39.4-34.5,58.2l-0.4,1c-2.9,6.9-5.6,13.5-10.2,17.9   c-3.5,3.4-9.6,5.4-13.3,2.9c-2.2-1.5-5.1-1.7-7.6-0.5c-2.4,1.2-4,3.6-4.2,6.4c-1.4,29.1,20.8,57.3,49.4,62.9   c3.1,0.6,6.2,0.9,9.2,0.9c26.7,0,52.6-21.2,58.4-42.2c3.4-12.6,8.4-26.2,18.8-31.4c12.1-6,23.8,10.5,26,13.9   c22.3,33.8,14.1,75.7,6.2,116.2c-0.8,4.1-1.6,8.2-2.4,12.3c-24-11.2-45.6-24.2-64.4-39c-1.6-1.3-3.7-1.8-5.8-1.5   c-2,0.3-3.9,1.4-5.1,3.1c-1.7,2.4-5.1,5.7-8.3,8.9c-3.8,3.7-7.7,7.5-10.2,11.1c-2.1,3-1.7,7,0.9,9.6c69.9,70,163.7,87.9,246.3,99.1   c33.7,4.6,66.8,6.9,99.4,6.9c133.4,0,256.1-38.3,359.2-112.8c1.7-1.2,2.8-3,3-5.1c0.3-2-0.3-4.1-1.6-5.7c-3.4-4.2-6.4-8.9-9.7-13.8   c-3.3-5-6.7-10.2-10.5-14.9c-1.2-1.6-3.1-2.6-5-2.8c-2-0.2-4,0.4-5.5,1.6c-13.6,10.9-28.8,21.1-45.4,30.5   c-24.8-104.2-29.1-163.4-20.3-267.7l0.1-0.7c0.8-10,1.9-18.4,6.6-19.6c6.4-1.7,11.6,3,19.3,10.9c2.6,2.6,5.2,5.4,8,7.6   c14.8,11.9,33.7,15.5,54.5,10.2c17.7-4.5,33.3-17.6,40.6-34.4c10.3-23.5,5.5-53.5-13.6-84.5C846.3,269.2,831.7,252.3,815.2,238.4z    M812.9,216.1c-3.1,4.4-6.3,8.8-9.6,13.2c-4.7-3.2-9.9-5.8-15-8.2c-5.7-2.8-11.1-5.4-15-8.6c-2.8-2.4-3.9-9.7-4.5-16   C785,201.4,800.4,208.3,812.9,216.1z M587.9,282.8c12.4-36.6,32.4-63,59.3-78.6c18.3-10.6,39.4-16.1,63-16.4   c-1.7,1.9-3.3,3.7-5,5.6c-1.9,2.1-3.8,4.3-5.8,6.4c-3.2,3.6-7.9,4.7-13.8,6.3c-3.3,0.8-6.8,1.7-10.3,3.1   c-26.2,10.4-47.1,28.9-58.7,52c-23.6,46.7-21.4,82-18.2,135.6c1.3,20.8,2.7,44.2,2.9,72.4c-7.1,0.2-14.3,0.3-21.6,0.5   C576.8,423.5,573,326.7,587.9,282.8z M260.5,490.6C260.5,490.6,260.5,490.6,260.5,490.6c53.5-1.3,115.4-2.3,175.5-3.4   c67.9-1.2,138.1-2.4,195.9-3.9c0,0.4,0.1,0.9,0.1,1.3c0.6,6.2,1.1,11.2,0.6,16.3c-65.2-0.8-118.2,0.4-179.2,1.8   c-57.8,1.3-123.1,2.8-212.9,2.8c0-2.4,0-4.6,0.1-7c0.1-2.4,0.1-4.9,0.1-7.5C247.2,490.9,253.8,490.8,260.5,490.6z M761.8,683.3   c17.9-9.6,34.5-20.1,49.3-31.4c1.8,2.5,3.5,5.1,5.3,7.9c1.9,2.8,3.8,5.7,5.8,8.6c-124,87.2-276.5,121.3-441.6,98.8   c-78.1-10.6-166.6-27.3-232.7-90c1.3-1.4,2.8-2.8,4.2-4.2c1.7-1.7,3.5-3.4,5.1-5.1c20.6,15.4,44.1,28.8,70,40.2   c0.4,0.2,0.9,0.5,1.4,0.6c64.8,28.1,144.6,43.3,231.1,43.3c9.2,0,18.5-0.2,27.9-0.5c71-2.6,139.7-15.3,199.8-36   c0.7-0.1,1.4-0.4,2-0.7c25.3-8.8,49-19.1,70.7-30.6C760.7,684,761.3,683.7,761.8,683.3z M308.6,719.7c0.6-2.6,1.2-5.2,1.8-7.9   c9.4-40.2,20-85.8,42.9-100.6c12.2-7.8,30.9-13.1,55.6-15.7c37.2-3.9,170.8-8.5,202.7,1.8c17.6,5.7,33.6,41.4,47.7,72.9   c5.1,11.4,10.4,23.2,15.8,33.7c-56.9,18.7-121.4,30.2-188.1,32.7C423.2,738.9,362.6,733,308.6,719.7z M857.5,366.2   c-5.5,12.6-17.2,22.5-30.5,25.8c-16.3,4.1-30.3,1.6-41.5-7.4c-2.1-1.7-4.3-4-6.7-6.4c-7.8-8-18.5-19-33.8-14.9   c-15.3,4-16.8,21.4-17.7,32.9l-0.1,0.7c-9,107.4-4.4,167.8,21.6,276.3c-18.4,9.5-38.2,18.1-59.3,25.6   c-5.5-10.5-10.8-22.4-16.5-34.9c-16.9-37.7-32.9-73.3-56.8-81c-35.9-11.6-176.2-5.8-208.9-2.4c-27.5,2.8-47.8,8.7-62.2,18   c-28,18.1-39.4,66.8-49.4,109.8c-0.6,2.5-1.2,5-1.8,7.5c-19.2-5.3-37.5-11.6-54.8-18.8c0.9-5.1,1.9-10.3,3-15.7   c8.1-41.4,17.2-88.4-8.5-127.3c-12.7-19.3-30.1-26.6-45.2-19.1c-15.8,7.8-22.3,25-26.6,40.8c-4.6,16.9-29.2,34.6-50.3,30.5   c-18.1-3.5-33.1-19.8-36.6-37.9c7.3,0,14.6-3.4,19.7-8.2c6.9-6.6,10.5-15.3,13.7-23l0.4-0.9c7.3-17.6,16.7-37.7,31.6-53.7l2.1-2.2   c14-15.1,26.1-28.1,54.4-31.3c19.4-2.2,43.6,3.9,53.2,26.9c-5.9,0.1-11.8,0.3-17.5,0.4c-2,0.1-4,0.9-5.3,2.4   c-1.4,1.5-2.1,3.5-2,5.5c0.3,5.2,0.2,9.5,0.1,14c-0.1,4.7-0.2,9.5,0.1,15.2c0.2,4,3.5,7.1,7.5,7.1c93.8,0,161.1-1.5,220.5-2.8   c62.9-1.4,117.2-2.6,185.1-1.7c0,0,0.1,0,0.1,0c3.5,0,6.5-2.4,7.3-5.8c2.3-9.9,1.5-17.8,0.6-27c-0.2-2.6-0.5-5.2-0.7-8.1   c-0.3-4-3.7-7.1-7.7-7c-7.2,0.2-14.7,0.4-22.3,0.6c-0.2-28.5-1.6-52-2.9-73c-3.2-52.9-5.1-84.8,16.6-127.9   c10-19.8,28.1-35.8,50.9-44.8c2.6-1.1,5.5-1.8,8.5-2.5c7-1.8,14.9-3.8,21.2-10.7c2-2.2,4-4.4,5.9-6.6c7.6-8.6,14.9-16.7,24.2-23.4   c5.4-3.8,7.5-3.6,8.2-3.4c1.1,0.4,2.8,2.5,3.9,9.9c0.3,2,0.5,4.6,0.8,7.4c0.9,10.3,1.9,23.2,10.2,30.1c5.3,4.4,11.8,7.6,18.1,10.6   c5.1,2.4,9.8,4.7,13.7,7.5c19.5,14.1,36.6,32.6,49.4,53.5C854.4,311.1,868.6,340.8,857.5,366.2z M723.7,251.1   c-8.3-3.7-18.7-2.4-25.9,3c-6.7,5.1-9.9,13.1-8.6,21.9c0,0,0,0,0,0c1.6,11.6,12.6,20.8,24.2,20.8c0.8,0,1.7,0,2.5-0.1   c12.5-1.4,22.4-13.7,21.3-26.2C736.3,261.6,731.4,254.5,723.7,251.1z M714.2,281.7c-4.5,0.5-9.5-3.4-10.1-7.8   c-0.5-3.4,0.5-6.1,2.8-7.9c2.9-2.2,7.4-2.7,10.8-1.2c2.7,1.2,4.3,3.6,4.6,7C722.6,276.3,718.6,281.2,714.2,281.7z"/></g><g class="st0" id="flat"><g class="st3"><g><g><g><g><g><g><g><g><path class="st9" d="M760.3,186.3l-32.8-5.5c-56.7-4.6-118.6,16.4-146.8,99.6c-15.9,47-11.2,153.9-8.2,199.2l36.2,0.1            l196.1-240c6.3-8.5,12.8-17.1,18.4-25.7C808.2,203.3,785.8,192.7,760.3,186.3z"/></g></g></g></g></g></g></g></g><g><g><g><g><g><g><g><g><path class="st8" d="M851.3,291.7C838,270,820.4,250.9,799.9,236c-9.4-6.8-22.8-10.6-31.3-17.8            c-7.7-6.4-6.8-23.3-8.3-32.9c-1-6.2-2.8-13.6-8.7-15.8c-5.1-1.9-10.7,1.1-15.2,4.3c-12.5,8.9-21.1,19.9-31.3,31            c-7,7.7-17.4,7.5-26.9,11.3c-23.1,9.2-43.5,26-54.8,48.4c-32.2,63.8-14.5,109.3-14.5,215.2l-348.4,7.4            c-7.3-33.5-37.4-48.6-64.2-45.6c-32.6,3.7-46.3,20-61.2,35.9s-24.7,35.8-33.1,56c-3.2,7.7-6.3,15.7-12.3,21.4            c-6,5.7-15.9,8.4-22.7,3.7c-1.2,25.5,18.3,50.3,43.4,55.2c25,4.9,53.3-15.4,58.9-35.9c3.8-14.1,9.6-29.6,22.7-36.1            c13.6-6.7,27.3,3.8,35.6,16.5c28.3,42.9,11.2,96.7,3.3,143.4c18.8,24,41.8,31.3,68.7,23.5            c10.8-44.9,21.2-101.8,49.7-120.2c16.4-10.6,39.5-14.8,58.9-16.8c34.2-3.5,171.8-8.9,205.8,2.1c29.6,9.5,49.4,77.6,72,118            c25.7-2.3,49.6-12.3,71.5-30.9c-27.1-111.5-31.9-171.8-22.8-279.6c0.9-10.8,1.8-24.2,12.2-27            c14.9-3.9,24.2,12.1,33.9,19.9c15.6,12.5,33.4,12.5,48,8.8c15.6-3.9,29.1-15.4,35.5-30.1            C875.3,344.3,865.5,315,851.3,291.7z"/></g></g></g></g></g></g></g></g><g><g><g><g><g><g><g><g><path class="st9" d="M639,508.6c-132.5-1.9-212.9,4.5-405.8,4.5c-0.6-10.9,0.4-18.4-0.2-29.3            c118.1-3.1,287.7-4.9,405.8-8.1C639.7,489,638.8,497.8,639,508.6z"/></g></g></g></g></g></g></g></g><g><g><g><g><g><g><g><g><path class="st7" d="M696.6,275c1.2,8.5,9.9,15.2,18.4,14.2c8.5-1,15.5-9.5,14.7-18.1C727.7,249.2,693.5,253,696.6,275z"/></g></g></g></g></g></g></g></g><g><g><g><g><g><g><g><g><path class="st9" d="M832.8,670c-7.2-9-13-19.8-20.2-28.7c-154.5,123.9-493.9,144.5-656.5,16.3c-4.2,6-14.4,14-18.5,20            c67.5,67.6,157.8,85.5,242,97C541.8,796.7,700.1,766,832.8,670z"/></g></g></g></g></g></g></g></g><g><g><g><g><g><g><g><g><path class="st7" d="M773.2,390.7c-1.5,0-3.1-0.5-4.4-1.4c-3.3-2.4-4.1-7.1-1.6-10.5c25.8-35.3,57.5-59.6,85.2-78.7            c3.4-2.4,8.1-1.5,10.4,1.9s1.5,8.1-1.9,10.4c-47.4,32.8-67.9,56.4-81.6,75.2C777.8,389.7,775.5,390.7,773.2,390.7z"/></g></g></g></g></g></g></g></g><g><g><g><g><g><g><g><g><path class="st7" d="M238.2,490.9c-4,0-7.4-3.2-7.5-7.3c-0.1-4.1,3.2-7.6,7.3-7.7c63.3-1.7,133-2.8,200.4-3.8            c67.3-1.1,137-2.1,200.2-3.8c4.1-0.1,7.6,3.2,7.7,7.3c0.1,4.1-3.2,7.6-7.3,7.7c-63.3,1.7-133,2.8-200.4,3.8            c-67.3,1.1-137,2.1-200.2,3.8C238.3,490.9,238.3,490.9,238.2,490.9z"/></g></g></g></g></g></g></g></g></g></g><g class="st0" id="colored_x5F_line"><g class="st3"><path class="st8" d="M851.3,291.1c-13.3-21.6-30.8-40.8-51.4-55.7c-9.4-6.8-22.8-10.6-31.3-17.8c-7.7-6.4-6.8-23.3-8.3-32.9    c-1-6.2-2.8-13.6-8.7-15.8c-5.1-1.9-10.7,1.1-15.2,4.3c-12.5,8.9-21.1,19.9-31.3,31c-7,7.7-17.4,7.5-26.9,11.3    c-23.1,9.2-43.5,26-54.8,48.4c-32.2,63.8-14.5,105.3-14.5,211.2l30,0L639,508l-405.8,4.5l-0.2-29.3l27.4-0.7    c-7.3-33.5-37.4-44.6-64.2-41.6c-32.6,3.7-46.3,20-61.2,35.9s-24.7,35.8-33.1,56c-3.2,7.7-6.3,15.7-12.3,21.4    c-6,5.7-15.9,8.4-22.7,3.7c-1.2,25.5,18.3,50.3,43.4,55.2s53.3-15.4,58.9-35.9c3.8-14.1,9.6-29.6,22.7-36.1    c13.6-6.7,27.3,3.8,35.6,16.5c28.3,42.9,11.2,96.7,3.3,143.4l24.9,12.1l43.8,11.4c10.8-44.9,21.2-101.8,49.7-120.2    c16.4-10.5,39.5-14.8,58.9-16.8c34.2-3.5,171.8-8.9,205.8,2.1c29.6,9.5,49.4,77.6,72,118l43.5-16.3l27.9-14.6    c-27.1-111.5-31.9-171.8-22.8-279.6c0.9-10.8,1.8-24.2,12.2-27c14.9-3.9,24.2,12.1,33.9,19.9c15.6,12.6,33.4,12.5,48,8.8    c15.6-3.9,29.1-15.4,35.5-30.1C875.3,343.7,865.5,314.4,851.3,291.1z M715,288.6c-8.5,1-17.2-5.7-18.4-14.2    c-3.1-21.9,31.1-25.8,33.1-3.8C730.5,279.1,723.5,287.6,715,288.6z"/></g><g class="st3"><path class="st16" d="M804.9,247.2c-1.5,0-3.1-0.5-4.5-1.5c-3.3-2.5-4-7.2-1.6-10.5l2.7-3.6c3.8-5.1,7.7-10.4,11.3-15.6    c-15.1-9.5-34.4-17.5-54.4-22.5c-4-1-6.5-5.1-5.4-9.1c1-4,5.1-6.5,9.1-5.4c24.5,6.1,48.4,16.7,65.5,28.9c3.3,2.3,4.1,6.9,1.9,10.2    c-5,7.6-10.6,15.1-16,22.4l-2.7,3.6C809.4,246.2,807.2,247.2,804.9,247.2z"/></g><g class="st3"><path class="st16" d="M713.4,296.8c-11.6,0-22.6-9.2-24.2-20.8c0,0,0,0,0,0c-1.3-8.8,1.9-16.8,8.6-21.9c7.2-5.4,17.6-6.7,25.9-3    c7.7,3.4,12.7,10.5,13.5,19.4c1.1,12.5-8.8,24.8-21.3,26.2C715,296.7,714.2,296.8,713.4,296.8z M704,273.9    c0.6,4.5,5.6,8.3,10.1,7.8c4.5-0.5,8.5-5.4,8.1-9.9c-0.3-3.4-1.9-5.8-4.6-7c-3.3-1.5-7.9-1-10.8,1.2    C704.5,267.8,703.5,270.5,704,273.9L704,273.9z"/></g><g class="st3"><path class="st16" d="M477.9,788.9c-32.5,0-65.7-2.3-99.4-6.9C296,770.8,202.1,753,132.3,683c-2.6-2.6-2.9-6.6-0.9-9.6    c2.5-3.6,6.4-7.4,10.2-11.1c3.3-3.2,6.7-6.5,8.3-8.9c1.2-1.7,3-2.8,5.1-3.1c2-0.3,4.1,0.2,5.8,1.5    c74.6,58.8,193.5,89.7,326.3,84.7c127.9-4.7,247.8-42.5,320.8-101c1.6-1.2,3.5-1.8,5.5-1.6c2,0.2,3.8,1.2,5,2.8    c3.8,4.7,7.2,9.9,10.5,14.9c3.3,4.9,6.3,9.6,9.7,13.8c1.3,1.6,1.9,3.7,1.6,5.7c-0.3,2-1.4,3.9-3,5.1    C734.1,750.6,611.3,788.9,477.9,788.9z M147.8,677.2c66.1,62.7,154.6,79.4,232.7,90c165.1,22.5,317.7-11.7,441.6-98.8    c-2-2.8-3.9-5.7-5.8-8.6c-1.8-2.7-3.5-5.3-5.3-7.9c-75.9,57.7-196,94.8-323.5,99.5c-9.4,0.3-18.7,0.5-27.9,0.5    c-121.8,0-230.5-30.1-302.6-84.1c-1.6,1.7-3.4,3.4-5.1,5.1C150.6,674.4,149.2,675.9,147.8,677.2z"/></g><path class="st17" d="M728.1,173.3c-43.3-3.5-120.9,5.4-154.5,104.7c-15.2,44.9-12.5,136.6-9.1,191.9c-41.3,0.8-85.5,1.6-128.8,2.3   c-70.7,1.2-143.9,2.5-202.9,4c-2,0.1-4,0.9-5.3,2.4c-1.4,1.5-2.1,3.5-2,5.5c0.3,5.2,0.2,9.5,0.1,14c-0.1,4.7-0.2,9.5,0.1,15.2   c0.2,4,3.5,7.1,7.5,7.1c93.8,0,161.1-1.5,220.5-2.8c62.9-1.4,117.2-2.6,185.1-1.7c0,0,0.1,0,0.1,0c3.5,0,6.5-2.4,7.3-5.8   c2.3-9.9,1.5-17.8,0.6-27c-0.2-2.6-0.5-5.2-0.7-8.1c-0.3-4-3.7-7.1-7.7-7c-18.4,0.5-38.3,0.9-59,1.4c-2.8-46.1-6.6-142.9,8.3-186.8   c12.4-36.6,32.4-63,59.3-78.6c22.5-13,49.3-18.3,79.7-15.9c4.1,0.3,7.7-2.7,8.1-6.9C735.3,177.3,732.3,173.7,728.1,173.3z    M632,484.7c0.6,6.2,1.1,11.2,0.6,16.3c-65.2-0.8-118.2,0.4-179.2,1.8c-57.8,1.3-123.1,2.8-212.9,2.8c0-2.4,0-4.6,0.1-7   c0.1-2.4,0.1-4.9,0.1-7.5c57.6-1.5,127.6-2.7,195.3-3.8c67.9-1.2,138.1-2.4,195.9-3.9C631.9,483.8,632,484.3,632,484.7z"/></g></svg>`
  },
  {
    name: 'Fresh',
    icon: `<?xml version="1.0" ?><svg id="Layer_1" style="enable-background:new 0 0 30 30;" version="1.1" viewBox="0 0 30 30" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M25.977,12.655c-1.761-0.17-3.712,1.551-4.748,2.63c-0.133-1.664-0.758-3.698-2.487-5.828l1.433-0.85  c0.13,0.107,0.273,0.204,0.437,0.283c0.417,0.203,0.919,0.302,1.474,0.302c0.878,0,1.89-0.25,2.912-0.736  c2.471-1.176,4.521-5.079,4.607-5.244c0.052-0.099,0.06-0.214,0.022-0.319c-0.037-0.104-0.116-0.189-0.219-0.233  c-0.141-0.061-3.459-1.468-5.971-0.271c-2.576,1.227-4.295,3.498-3.914,5.171c0.033,0.147,0.082,0.286,0.145,0.416L18.21,8.841  c-0.384-0.424-0.817-0.849-1.297-1.276c0.028-0.291,0.057-0.581,0.075-0.887c0.13-2.189,0.464-3.851,0.993-4.94  c0.097-0.199,0.015-0.438-0.185-0.535c-0.2-0.097-0.438-0.013-0.534,0.185c-0.576,1.184-0.938,2.948-1.073,5.243  c-0.006,0.104-0.018,0.199-0.025,0.301c-0.45-0.362-0.925-0.723-1.452-1.083c-1.871-1.274-3.147-2.447-3.793-3.486  c-0.117-0.187-0.362-0.245-0.551-0.128c-0.188,0.117-0.245,0.363-0.128,0.551c0.591,0.949,1.641,1.983,3.118,3.079l-1.614-0.12  c-0.068-0.715-0.547-1.404-1.426-1.965C9.382,3.187,8.113,2.79,6.743,2.664C3.925,2.404,0.66,4.64,0.522,4.735  C0.425,4.802,0.362,4.91,0.352,5.027C0.341,5.146,0.383,5.262,0.466,5.346c0.118,0.119,2.924,2.908,5.741,3.166  C6.512,8.54,6.814,8.553,7.111,8.553c1.039,0,2.015-0.168,2.813-0.492c0.896-0.363,1.477-0.895,1.717-1.52l2.967,0.22  c0.531,0.377,1.025,0.754,1.468,1.131c-0.597,5.178-2.817,7.667-4.741,8.86c-0.815-0.783-3.758-3.415-6.042-2.997  c-0.913,0.168-1.604,0.78-2.055,1.819c-1.956,4.511-1.122,11.104,2.887,12.843c0.661,0.286,1.36,0.418,2.075,0.418  c2.887,0,6.016-2.149,7.961-4.834c2.054,2.31,4.962,3.973,7.599,3.973c0.878,0,1.726-0.185,2.502-0.591  c3.87-2.026,4.221-8.663,1.94-13.02C27.656,13.319,26.906,12.744,25.977,12.655z M20.303,7.383  c-0.291-1.279,1.302-3.235,3.479-4.271c0.619-0.295,1.313-0.4,1.988-0.4c1.186,0,2.318,0.326,2.905,0.527  c-0.579,1.006-2.225,3.639-4.021,4.495c-1.43,0.68-2.845,0.848-3.693,0.437c-0.009-0.004-0.013-0.012-0.021-0.016l3.473-2.059  c0.189-0.113,0.253-0.358,0.14-0.548c-0.111-0.189-0.356-0.251-0.548-0.14l-3.618,2.145C20.361,7.493,20.317,7.447,20.303,7.383z   M9.624,7.32C8.713,7.688,7.526,7.828,6.28,7.715C4.304,7.534,2.226,5.857,1.401,5.124c0.943-0.572,3.296-1.85,5.269-1.663  c1.246,0.114,2.388,0.467,3.217,0.996c0.59,0.376,0.948,0.81,1.05,1.23L6.657,5.37C6.439,5.363,6.245,5.519,6.229,5.739  c-0.016,0.221,0.149,0.413,0.37,0.429l4.18,0.31C10.561,6.802,10.173,7.097,9.624,7.32z M16.796,8.536  c0.353,0.335,0.665,0.667,0.957,0.998c0.006,0.012,0.006,0.025,0.013,0.036c0.036,0.061,0.087,0.108,0.144,0.141  c2.014,2.366,2.546,4.598,2.547,6.291c-0.858,0.109-3.316,0.506-4.932,1.593c-0.035-0.03-0.073-0.057-0.119-0.074  c-0.98-0.367-2.077-0.534-2.896-0.61C14.312,15.522,16.159,13.021,16.796,8.536z M6.444,27.683  c-3.536-1.533-4.244-7.704-2.471-11.791c0.343-0.791,0.822-1.232,1.465-1.351c1.815-0.335,4.621,2.039,5.543,2.983  c0.009,0.01,0.024,0.012,0.035,0.019c0.074,0.066,0.161,0.113,0.259,0.113c0.014,0,0.027-0.009,0.041-0.011  c0.229,0.004,1.973,0.03,3.506,0.526c-0.193,0.199-0.362,0.412-0.49,0.647c-0.443,0.815-0.401,1.738,0.125,2.741  c0.329,0.628,0.729,1.236,1.182,1.814C13.425,26.546,9.457,28.988,6.444,27.683z M25.892,26.675  c-3.413,1.786-8.659-1.539-10.726-5.485c-0.4-0.763-0.442-1.413-0.13-1.988c0.886-1.634,4.49-2.314,5.802-2.438l0.17-0.017  l0.105-0.133c0.723-0.904,2.912-3.17,4.614-3.17c0.058,0,0.116,0.003,0.173,0.008c0.653,0.063,1.175,0.483,1.594,1.284  C29.56,18.682,29.306,24.888,25.892,26.675z"/></svg>`
  },
  {
    name: 'Electronics',
    icon: `<?xml version="1.0" ?><svg data-name="Layer 1" id="Layer_1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><path d="M29,16.5A13.08,13.08,0,0,0,25.7,8l0.7-.73L26,6.92A14.42,14.42,0,0,0,16,3,14.42,14.42,0,0,0,6,6.92L5.6,7.26,6.3,8A13.08,13.08,0,0,0,3,16.5a10.57,10.57,0,0,0,3,7.69V27H8a2,2,0,0,0,4,0V19a2,2,0,0,0-4,0H6v3.67A9.7,9.7,0,0,1,4,16.5,12,12,0,0,1,7,8.72L7.67,9.43,8,9.08A11.25,11.25,0,0,1,16,6a11.25,11.25,0,0,1,8,3.08l0.36,0.35L25,8.72a12,12,0,0,1,3,7.78,9.7,9.7,0,0,1-2,6.17V19H24a2,2,0,0,0-4,0v8a2,2,0,0,0,4,0h2V24.19A10.57,10.57,0,0,0,29,16.5ZM10,18a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V19A1,1,0,0,1,10,18ZM7,20H8v6H7V20ZM24.29,8A12.26,12.26,0,0,0,16,5,12.26,12.26,0,0,0,7.71,8L7,7.3A13.47,13.47,0,0,1,16,4a13.47,13.47,0,0,1,9,3.3ZM22,28a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0v8A1,1,0,0,1,22,28Zm3-2H24V20h1v6Z"/></svg>`
  },
  {
    name: 'Mobiles',
    icon: `<?xml version="1.0" ?><svg id="Layer_1" style="enable-background:new 0 0 100.4 100.4;" version="1.1" viewBox="0 0 100.4 100.4" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M69.3,8.6H28c-5.3,0-9.7,4.3-9.7,9.6v66.2c0,5.3,4.3,9.6,9.7,9.6h41.3c5.3,0,9.7-4.3,9.7-9.6V18.2   C79,12.9,74.7,8.6,69.3,8.6z M76,84.4c0,3.7-3,6.6-6.7,6.6H28c-3.7,0-6.7-3-6.7-6.6V18.2c0-3.7,3-6.6,6.7-6.6h41.3   c3.7,0,6.7,3,6.7,6.6V84.4z"/><path d="M60.9,18.1H36.2c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h24.7c0.8,0,1.5-0.7,1.5-1.5S61.7,18.1,60.9,18.1z"/><path d="M48.6,75.4c-2.8,0-5,2.3-5,5c0,1.3,0.5,2.6,1.5,3.5c0.9,0.9,2.2,1.4,3.5,1.4c0,0,0,0,0,0c2.8,0,5-2.3,5-5   C53.6,77.6,51.4,75.4,48.6,75.4z M48.7,82.4C48.7,82.4,48.7,82.4,48.7,82.4c-0.5,0-1-0.2-1.4-0.6c-0.4-0.4-0.6-0.9-0.6-1.4   c0-1.1,0.9-2,2-2c0,0,0,0,0,0c1.1,0,2,0.9,2,2C50.7,81.5,49.8,82.4,48.7,82.4z"/></g></svg>`
  },
  {
    name: 'Beauty',
    icon: `<?xml version="1.0" ?><svg data-name="Layer 2" id="Layer_2" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg"><title/><path d="M99.8,80.6H96.54V61.76a4,4,0,0,0-4-4H69.7a4,4,0,0,0-4,4V80.6H62.44a4,4,0,0,0-4,4V232a4,4,0,0,0,4,4H99.8a4,4,0,0,0,4-4V84.6A4,4,0,0,0,99.8,80.6ZM73.7,65.76H88.54V80.6H73.7ZM95.8,228H66.44V88.6H95.8Z"/><path d="M191.31,217.42l-25.62-69.1a4,4,0,0,0-2.08-2.24,4,4,0,0,0-3.06-.12l-13.77,5.11L112,57.35l4.52-1.68a4,4,0,1,0-2.78-7.5l-4.53,1.67-1.18-3.2,7.44-2.76a4,4,0,1,0-2.78-7.5l-7.45,2.76-1.18-3.21,4.52-1.67a4,4,0,1,0-2.78-7.5l-4.53,1.67-1.18-3.2,1.6-.6a4,4,0,0,0-2.78-7.5l-1.61.6-.41-1.12a4,4,0,1,0-7.5,2.78l.41,1.12-.63.23A4,4,0,0,0,92,28.24l.63-.23,1.18,3.2-3.55,1.32A4,4,0,0,0,93,40l3.55-1.32,1.18,3.21-6.47,2.4a4,4,0,0,0,2.79,7.5l6.47-2.4,1.18,3.21-3.55,1.31a4,4,0,0,0,2.79,7.5l3.55-1.31,34.75,93.72L125.51,159a4,4,0,0,0-2.36,5.14l25.63,69.11a4,4,0,0,0,2.08,2.24,4.06,4.06,0,0,0,1.67.37,4.16,4.16,0,0,0,1.39-.25l35-13A4,4,0,0,0,191.31,217.42Zm-36.42,9.25L132,165.06l27.54-10.21,22.84,61.6Z"/></svg>`
  },
  {
    name: 'Fashion',
    icon: `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 512 512" height="512px" id="Jacket" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle cx="336.186" cy="96.72" r="5.75"/><path d="M305.469,150.77c3.174,0,5.75-2.576,5.75-5.75c0-3.174-2.576-5.75-5.75-5.75c-3.186,0-5.75,2.576-5.75,5.75   C299.719,148.194,302.283,150.77,305.469,150.77z"/><circle cx="203.373" cy="145.02" r="5.75"/><circle cx="176.393" cy="96.72" r="5.75"/><path d="M124.186,220.271c0.24,0.051,0.479,0.075,0.715,0.075c1.597,0,3.031-1.115,3.372-2.74c3.877-18.416,5.062-42.8,3.52-72.478   c-1.145-22.029-3.454-38.937-3.478-39.105c-0.261-1.888-1.997-3.213-3.89-2.946c-1.887,0.26-3.206,2.001-2.945,3.889   c0.091,0.661,9.013,66.598,0.041,109.218C121.127,218.048,122.322,219.878,124.186,220.271z"/><path d="M75.59,193.875c0.332,0.1,0.665,0.146,0.993,0.146c1.484,0,2.854-0.965,3.304-2.46l0.333-1.112   c0.548-1.825-0.487-3.748-2.313-4.295c-1.831-0.548-3.749,0.488-4.296,2.313l-0.333,1.112   C72.731,191.404,73.766,193.327,75.59,193.875z"/><path d="M456.482,265.604c-10.2-58.615-26.358-110.224-50.854-162.415c-2.35-5.013-5.944-9.345-10.394-12.53   c-22.56-16.158-49.804-28.023-54.438-29.989c-28.276-29.611-42.126-30.514-44.22-30.456l-81.212,0   c-2.495-0.024-16.315,1.295-44.162,30.439c-4.483,1.909-31.848,13.842-54.429,30.001c-4.446,3.172-8.042,7.506-10.4,12.532   c-9.86,21.002-18.202,41.53-25.502,62.754c-0.62,1.802,0.338,3.765,2.141,4.385c0.372,0.128,0.75,0.188,1.122,0.188   c1.432,0,2.771-0.899,3.262-2.329c7.22-20.988,15.469-41.29,25.224-62.066c1.856-3.957,4.679-7.361,8.166-9.85   c15.256-10.917,32.775-19.862,43.545-24.944c-4.207,8.798-8.879,23.55-8.43,45.21c0.022,1.094,0.563,2.112,1.455,2.743   c0.894,0.633,2.03,0.804,3.071,0.463c0.104-0.034,9.764-3.188,21.896-5.791l3.908,26.182c-0.1,0.114-0.211,0.232-0.309,0.345   c-1.994,2.314-2.766,5.363-2.117,8.366c0.588,2.726,2.256,5.005,4.688,6.423l40.93,274.068h-74.302   c-5.499-24.657-10.342-47.181-14.468-67.245l18.259-72.861c0.462-1.848-0.661-3.721-2.508-4.185   c-1.854-0.462-3.723,0.66-4.186,2.509l-14.746,58.846c-10.134-50.766-14.884-82.785-13.075-89.507   c0.493-1.841-0.597-3.734-2.437-4.229c-1.84-0.499-3.732,0.595-4.229,2.436c-3.897,14.495,14.836,104.99,31.244,178.38   c0,0.001,0,0.002,0.001,0.004c0.004,0.018,0.008,0.037,0.012,0.055c2.884,12.896,5.162,22.844,6.284,27.713l-34.87,8.836   c-4.03-12.43-19.215-59.768-25.106-85.297c-0.43-1.855-2.277-3.01-4.138-2.585c-1.856,0.429-3.014,2.28-2.585,4.138   c5.883,25.494,20.87,72.303,25.126,85.443l-9.802,2.483c-14.838-34.746-26.534-74.544-35.729-121.542   c-5.663-28.977-11.011-56.348-5.863-85.939c3.178-18.259,7.021-36.145,11.428-53.161c0.478-1.844-0.631-3.727-2.475-4.205   c-1.843-0.476-3.729,0.631-4.205,2.475c-4.452,17.196-8.337,35.265-11.547,53.708c-5.364,30.847,0.356,60.128,5.89,88.446   c9.53,48.714,21.742,89.818,37.333,125.662c0.559,1.281,1.817,2.074,3.163,2.074c0.28,0,0.565-0.035,0.851-0.107l57.497-14.57   c1.821-0.461,2.939-2.295,2.514-4.125c-0.026-0.113-2.478-10.661-6.09-26.75h111.64c1.905,0,3.45-1.545,3.45-3.449   c0-1.906-1.545-3.45-3.45-3.45H236.41l-15.307-164.459c-0.011-0.103-0.024-0.204-0.043-0.304   c-1.328-7.23-0.509-16.518,2.415-27.592c26.955-44.387,78.322-71.623,99.2-81.287c2.825-1.31,4.82-3.806,5.478-6.85   c0.648-3.002-0.123-6.052-2.118-8.366c-9.005-10.446-26.03-22.819-34.603-28.76c15.847-4.278,47.787,3.987,60.089,8.024   c1.036,0.341,2.178,0.17,3.07-0.463c0.892-0.631,1.433-1.649,1.454-2.742c0.455-21.697-4.209-36.435-8.419-45.222   c10.774,5.075,28.34,14.031,43.592,24.955c3.491,2.499,6.315,5.904,8.165,9.85c24.227,51.621,40.209,102.674,50.303,160.668   c5.156,29.588-0.191,56.96-5.854,85.938c-9.197,47.011-20.896,86.81-35.739,121.543l-9.793-2.481   c4.255-13.136,19.245-59.95,25.128-85.446c0.43-1.857-0.729-3.709-2.585-4.138c-1.858-0.425-3.708,0.729-4.138,2.585   c-5.892,25.529-21.079,72.875-25.107,85.301l-34.88-8.839c1.121-4.869,3.398-14.817,6.284-27.714   c0.004-0.018,0.008-0.035,0.012-0.054c0-0.002,0.001-0.004,0.002-0.006c5.657-25.313,10.74-48.892,15.118-70.12   c0.184-0.427,0.283-0.889,0.282-1.367c19.292-94.06,16.705-103.715,15.854-106.89c-0.494-1.84-2.385-2.932-4.227-2.438   c-1.84,0.494-2.932,2.386-2.438,4.226c1.058,3.941,0.615,20.951-13.033,89.312l-14.696-58.647c-0.464-1.85-2.333-2.971-4.186-2.509   c-1.848,0.464-2.971,2.337-2.508,4.185l18.208,72.662c-4.219,20.467-9.103,43.145-14.522,67.444h-41.4   c-1.906,0-3.45,1.544-3.45,3.45c0,1.904,1.544,3.449,3.45,3.449h39.857c-3.613,16.089-6.063,26.637-6.089,26.75   c-0.426,1.83,0.691,3.664,2.513,4.125l57.5,14.571c0.282,0.071,0.567,0.106,0.849,0.106c1.346,0,2.604-0.793,3.162-2.074   c15.596-35.83,27.812-76.935,37.344-125.663C456.137,325.73,461.858,296.447,456.482,265.604z M293.182,37.115   c-0.043,4.027-0.231,11.318-0.942,20.125h-72.523c-0.716-8.809-0.9-16.099-0.941-20.125H293.182z M291.598,64.14   c-1.94,18.322-5.486,33.947-10.312,45.382c-1.407,2.33-14.024,23.252-25.31,42.72c-11.273-19.459-23.897-40.391-25.304-42.72   c-5.957-14.12-8.877-31.824-10.31-45.382H291.598z M184.515,106.456c-9.014,1.771-16.997,3.954-21.729,5.345   c0.438-29.564,11.122-43.729,12.75-45.717c0.053-0.049,0.112-0.09,0.162-0.143c18.994-19.988,30.782-26.113,36.183-27.991   c0.062,4.769,0.313,13.072,1.236,23.054c1.128,12.313,3.506,29.114,8.469,43.91C212.932,102.803,200.53,103.308,184.515,106.456z    M220.5,111.735c-6.839,4.74-19.014,13.548-28.216,22.201l-3.183-21.317C202.752,110.185,213.554,109.894,220.5,111.735z    M192.186,149.434c-0.843-0.391-1.439-1.136-1.636-2.045c-0.11-0.51-0.179-1.501,0.602-2.406c0.397-0.461,0.815-0.934,1.271-1.424   c9.545-10.391,27.111-22.806,34.086-27.574c4.395,7.304,15.754,26.266,25.487,43.161c-4.695,8.192-8.211,14.524-10.646,19.175   c-19.647-14.258-38.544-23.913-48.308-28.496C192.775,149.706,192.517,149.586,192.186,149.434z M216.946,234.652   c-3.29,12.239-4.197,22.672-2.699,31.012l3.785,40.672l-22.013-147.4c10.407,5.199,26.101,13.842,42.229,25.659   c-0.286,0.638-0.528,1.209-0.711,1.691C235.897,189.115,223.204,211.422,216.946,234.652z M320.808,144.983   c0.779,0.904,0.711,1.895,0.601,2.405c-0.196,0.909-0.793,1.655-1.633,2.044c-9.367,4.335-28.026,13.72-47.754,27.859   c-16.109,11.545-29.655,23.868-40.517,36.805c5.928-13.938,12.046-24.428,12.138-24.584c0.109-0.186,0.2-0.38,0.273-0.583   c0.211-0.591,0.71-1.789,1.878-4.143c2.449-4.945,7.022-13.242,13.595-24.66c9.867-17.145,21.582-36.698,26.06-44.142   C292.743,120.973,311.623,134.329,320.808,144.983z M349.163,111.801c-5.081-1.495-13.909-3.9-23.724-5.726   c-15.044-2.799-26.765-3.173-35.049-1.16c4.015-11.912,6.849-26.595,8.44-43.794c0.926-10.059,1.181-18.422,1.244-23.203   c5.332,1.849,17.138,7.938,36.187,27.986C337.154,66.94,348.719,80.94,349.163,111.801z"/><path d="M387.568,103.077c-1.893-0.267-3.629,1.059-3.889,2.946c-0.024,0.168-2.334,17.076-3.479,39.105   c-1.542,29.677-0.357,54.062,3.52,72.478c0.343,1.625,1.775,2.74,3.372,2.74c0.236,0,0.476-0.024,0.715-0.075   c1.864-0.393,3.058-2.222,2.665-4.086c-8.969-42.599-0.05-108.557,0.041-109.218C390.774,105.079,389.455,103.337,387.568,103.077z   "/><path d="M292.468,429.335h-1.16c-1.906,0-3.45,1.544-3.45,3.45c0,1.904,1.544,3.449,3.45,3.449h1.16c1.905,0,3.45-1.545,3.45-3.449   C295.918,430.879,294.373,429.335,292.468,429.335z"/><path d="M351.69,162.839c-1.489-1.189-3.66-0.945-4.849,0.543l-52.9,66.24c-1.188,1.489-0.946,3.66,0.543,4.849   c0.636,0.507,1.396,0.754,2.15,0.754c1.014,0,2.018-0.444,2.698-1.297l52.899-66.24C353.422,166.2,353.18,164.029,351.69,162.839z"/></g></svg>`
  },
  {
    name: 'Deal Zone',
    icon: `<?xml version="1.0" ?><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><g id="coupon"><circle class="cls-1" cx="9" cy="41" r="2"/><circle cx="21.0992" cy="35.5232" r="1.0691"/><line class="cls-1" x1="53.5509" x2="56.5509" y1="39.0547" y2="42.0547"/><line class="cls-1" x1="56.5509" x2="53.5509" y1="39.0547" y2="42.0547"/><polygon class="cls-1" points="27 22 13 22 11 14 29 14 27 22"/><circle class="cls-1" cx="15.5" cy="24.5" r="1.5"/><circle class="cls-1" cx="24.5" cy="24.5" r="1.5"/><polyline class="cls-1" points="7 10 10 10 11 14"/><line class="cls-1" x1="53" x2="45" y1="13" y2="23"/><circle class="cls-1" cx="45.5" cy="14.5" r="1.5"/><line class="cls-1" x1="32.1538" x2="33.7313" y1="45.3079" y2="38.209"/><line class="cls-1" x1="30" x2="27" y1="37" y2="44"/><circle class="cls-1" cx="52.5" cy="21.5" r="1.5"/><polyline class="cls-1" points="44.076 43.941 36 5 36 9"/><path class="cls-1" d="M31.3987,29.149,30,37a14.5373,14.5373,0,0,1,11.1228,8.0741"/><line class="cls-1" x1="36" x2="36" y1="12" y2="14"/><line class="cls-1" x1="36" x2="36" y1="17" y2="19"/><line class="cls-1" x1="36" x2="36" y1="22" y2="24"/><polyline class="cls-1" points="36 27 36 29 3 29 3 7 60 7 60 29 41.182 29"/><circle class="cls-1" cx="36" cy="33.5" r="1.5"/><circle class="cls-1" cx="28" cy="51" r="7"/><circle class="cls-1" cx="28" cy="51" r="4"/><circle class="cls-1" cx="45" cy="51" r="7"/><circle class="cls-1" cx="45" cy="51" r="4"/></g></svg>`
  },
  {
    name: 'Baby Store',
    icon: `<?xml version="1.0" ?><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><g id="Outline"><path d="M48.9,30.65a11,11,0,1,0-18.76-7.42c0,1-1.21,3-2.33,4.39-1.44-2.48-1.84-4.49-1.64-5.48a3.47,3.47,0,0,0-.52-2.62,3.49,3.49,0,0,0-4.85-1,3.46,3.46,0,0,0-1.49,2.23A14.19,14.19,0,0,0,20.68,29a11.64,11.64,0,0,0-5.37,3.06A11.75,11.75,0,0,0,31.93,48.68,11.58,11.58,0,0,0,35,43.16a19.63,19.63,0,0,0,7.51,1.6,3.5,3.5,0,1,0,0-7h0a13,13,0,0,1-6.08-1.65c1.33-1.08,3.34-2.29,4.22-2.26A11,11,0,0,0,48.9,30.65ZM29.33,39.76a5.74,5.74,0,1,1-5.26-5.12s.07,0,.11,0a31.62,31.62,0,0,0,2.45,2.74A30.28,30.28,0,0,0,29.33,39.76Zm1.19,7.51a9.75,9.75,0,1,1-8.91-16.43c.34.61.71,1.22,1.13,1.85a7.74,7.74,0,1,0,8.58,8.5c.63.41,1.24.76,1.85,1.09A9.69,9.69,0,0,1,30.52,47.27Zm12-7.51h0a1.51,1.51,0,0,1,1.06.43,1.51,1.51,0,0,1-1.06,2.57C39.66,42.76,34,41.87,28,36s-7.39-11.71-6.77-14.79a1.47,1.47,0,0,1,.64-.95,1.44,1.44,0,0,1,.82-.25,1.53,1.53,0,0,1,.3,0,1.47,1.47,0,0,1,1,.63,1.51,1.51,0,0,1,.22,1.13c-.49,2.46,1.16,7.29,5.95,12.08C35.32,39,40.13,39.76,42.54,39.76Zm-11-7.34A26.49,26.49,0,0,1,29,29.36c1.25-1.37,3.25-4.29,3.19-6.2a9,9,0,0,1,18-.79,9,9,0,0,1-9.35,9.49c-2-.09-4.86,2-6.1,3.15A22.65,22.65,0,0,1,31.58,32.42Z"/></g></svg>`
  }
];

const HeroCategories = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.categoriesBar}>
        <div className={styles.categoriesContainer}>
          {categoryData.map((category) => (
            <button 
              key={category.name}
              className={styles.categoryButton}
              aria-label={`Browse ${category.name}`}
            >
              <span 
                className={styles.categoryIcon}
                dangerouslySetInnerHTML={{ __html: category.icon }}
                aria-hidden="true"
              />
              <span className={styles.categoryName}>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCategories;