import{j as e}from"./index-Ciz2Gt2U.js";import{d as i,m as l}from"./styled-components.browser.esm-BuoxZ0xe.js";const m="#4fa94d",h={"aria-busy":!0,role:"progressbar"},x=i.div`
  display: ${r=>r.$visible?"flex":"none"};
`,b="http://www.w3.org/2000/svg",t=242.776657104492,u=1.6,y=l`
12.5% {
  stroke-dasharray: ${t*.14}px, ${t}px;
  stroke-dashoffset: -${t*.11}px;
}
43.75% {
  stroke-dasharray: ${t*.35}px, ${t}px;
  stroke-dashoffset: -${t*.35}px;
}
100% {
  stroke-dasharray: ${t*.01}px, ${t}px;
  stroke-dashoffset: -${t*.99}px;
}
`;i.path`
  stroke-dasharray: ${t*.01}px, ${t};
  stroke-dashoffset: 0;
  animation: ${y} ${u}s linear infinite;
`;const v=l`
to {
   transform: rotate(360deg);
 }
`;i.svg`
  animation: ${v} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;i.polyline`
  stroke-width: ${r=>r.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const j=({wrapperStyle:r={},visible:c=!0,wrapperClass:n="",height:o=100,width:d=100,color:s=m,ariaLabel:a="three-circles-loading",outerCircleColor:p,innerCircleColor:f,middleCircleColor:$})=>e.jsx(x,{style:r,$visible:c,className:n,"data-testid":"three-circles-wrapper","aria-label":a,...h,children:e.jsxs("svg",{version:"1.1",height:`${o}`,width:`${d}`,xmlns:b,viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"three-circles-svg",children:[e.jsx("path",{fill:p||s,d:"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:$||s,d:"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})}),e.jsx("path",{fill:f||s,d:"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",children:e.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})]})}),k=l`
to {
   stroke-dashoffset: 136;
 }
`;i.polygon`
  stroke-dasharray: 17;
  animation: ${k} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;i.svg`
  transform-origin: 50% 65%;
`;const C=({visible:r=!0,width:c="80",height:n="80",wrapperClass:o="",wrapperStyle:d={},ariaLabel:s="hourglass-loading",colors:a=["#306cce","#72a1ed"]})=>r?e.jsxs("svg",{width:c,height:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 350 350",preserveAspectRatio:"xMidYMid",className:o,style:d,"aria-label":s,"data-testid":"hourglass-svg",...h,children:[e.jsx("animateTransform",{attributeName:"transform",type:"rotate",values:"0; 0; -30; 360; 360",keyTimes:"0; 0.40; 0.55; 0.65; 1",dur:"3s",begin:"0s",calcMode:"linear",repeatCount:"indefinite"}),e.jsxs("g",{children:[e.jsx("path",{fill:a[0],stroke:a[0],d:"M324.658,20.572v-2.938C324.658,7.935,316.724,0,307.025,0H40.313c-9.699,0-17.635,7.935-17.635,17.634v2.938     c0,9.699,7.935,17.634,17.635,17.634h6.814c3.5,0,3.223,3.267,3.223,4.937c0,19.588,8.031,42.231,14.186,56.698     c12.344,29.012,40.447,52.813,63.516,69.619c4.211,3.068,3.201,5.916,0.756,7.875c-22.375,17.924-51.793,40.832-64.271,70.16     c-6.059,14.239-13.934,36.4-14.18,55.772c-0.025,1.987,0.771,5.862-3.979,5.862h-6.064c-9.699,0-17.635,7.936-17.635,17.634v2.94     c0,9.698,7.935,17.634,17.635,17.634h266.713c9.699,0,17.633-7.936,17.633-17.634v-2.94c0-9.698-7.934-17.634-17.633-17.634     h-3.816c-7,0-6.326-5.241-6.254-7.958c0.488-18.094-4.832-38.673-12.617-54.135c-17.318-34.389-44.629-56.261-61.449-68.915     c-3.65-2.745-4.018-6.143,0-8.906c17.342-11.929,44.131-34.526,61.449-68.916c8.289-16.464,13.785-38.732,12.447-57.621     c-0.105-1.514-0.211-4.472,3.758-4.472h6.482C316.725,38.206,324.658,30.272,324.658,20.572z M270.271,93.216     c-16.113,31.998-41.967,54.881-64.455,68.67c-1.354,0.831-3.936,2.881-3.936,8.602v6.838c0,6.066,2.752,7.397,4.199,8.286     c22.486,13.806,48.143,36.636,64.191,68.508c7.414,14.727,11.266,32.532,10.885,46.702c-0.078,2.947,1.053,8.308-6.613,8.308     H72.627c-6.75,0-6.475-3.37-6.459-5.213c0.117-12.895,4.563-30.757,12.859-50.255c14.404-33.854,44.629-54.988,64.75-67.577     c0.896-0.561,2.629-1.567,2.629-6.922v-10.236c0-5.534-2.656-7.688-4.057-8.57c-20.098-12.688-49.256-33.618-63.322-66.681     c-8.383-19.702-12.834-37.732-12.861-50.657c-0.002-1.694,0.211-4.812,3.961-4.812h206.582c4.168,0,4.127,3.15,4.264,4.829     C282.156,57.681,278.307,77.257,270.271,93.216z"}),e.jsxs("g",{children:[e.jsx("path",{fill:a[1],stroke:a[1],d:"M169.541,196.2l-68.748,86.03c-2.27,2.842-1.152,5.166,2.484,5.166h140.781c3.637,0,4.756-2.324,2.484-5.166     l-68.746-86.03C175.525,193.358,171.811,193.358,169.541,196.2z"}),e.jsx("animate",{attributeName:"opacity",values:"0; 0; 1; 1; 0; 0",keyTimes:"0; 0.1; 0.4; 0.6; 0.61; 1",dur:"3s",repeatCount:"indefinite"})]}),e.jsxs("g",{children:[e.jsx("path",{fill:a[1],stroke:a[1],d:"M168.986,156.219c2.576,2.568,6.789,2.568,9.363,0l34.576-34.489c2.574-2.568,1.707-4.67-1.932-4.67H136.34     c-3.637,0-4.506,2.102-1.932,4.67L168.986,156.219z"}),e.jsx("animate",{attributeName:"opacity",values:"1; 1; 0; 0; 1; 1",keyTimes:"0; 0.1; 0.4; 0.65; 0.66; 1",dur:"3s",repeatCount:"indefinite"})]})]})]}):null;export{C as $,j as a};
