var O=Object.defineProperty;var o=(e,t)=>O(e,"name",{value:t,configurable:!0});import{r as h}from"./index-c337a0e8.js";import"./iframe-578e748f.js";var R={},I={get exports(){return R},set exports(e){R=e}},b={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L=h,N=Symbol.for("react.element"),T=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,H=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function W(e,t,i){var s,c={},n=null,l=null;i!==void 0&&(n=""+i),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(l=t.ref);for(s in t)C.call(t,s)&&!k.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:N,type:e,key:n,ref:l,props:c,_owner:H.current}}o(W,"q");b.Fragment=T;b.jsx=W;b.jsxs=W;(function(e){e.exports=b})(I);const v=R.Fragment,a=R.jsx,E=R.jsxs,B={width:1/0,height:1/0},q=o((e,t)=>{const{axis:i="both"}=t,[s,c]=h.useState({x:1/0,y:1/0}),[n,l]=h.useState(B),[p,m]=h.useState(B),[z,y]=h.useState(!1),g=h.useCallback((r=1/0,d=1/0)=>{e.current&&(i==="horizontal"?(e.current.style.width=r+"px",m({height:n.height,width:r})):i==="vertical"?(e.current.style.height=d+"px",m({width:n.width,height:d})):(e.current.style.width=r+"px",e.current.style.height=d+"px",m({width:r,height:d})))},[i,n.height,n.width,e]),u=o(r=>({width:w(n.width+r.clientX-s.x,t),height:w(n.height+r.clientY-s.y,t)}),"getDimensions"),f=h.useCallback((r,d)=>{const S=j(r,t),_=M(d,t);switch(!0){case(i==="both"&&(S||_)):case(i==="horizontal"&&S):case(i==="vertical"&&_):break;default:g(r,d)}},[i,t,g]);return{coords:s,setCoords:c,initialSize:n,setInitialSize:l,size:p,setSize:g,isResizing:z,setIsResizing:y,getDimensions:u,updateSizeWhenWithinBounds:f}},"useResizerStates"),j=o((e,{maxWidth:t=1/0,minWidth:i=0})=>e>t||e<i,"isWidthOutOfBounds"),M=o((e,{maxHeight:t=1/0,minHeight:i=0})=>e>t||e<i,"isHeightOutOfBounds"),w=o((e,{step:t=1})=>Math.ceil(e/t)*t,"getSize"),V=o((e,t)=>{const{setCoords:i,setInitialSize:s,size:c,setSize:n,isResizing:l,setIsResizing:p,getDimensions:m,updateSizeWhenWithinBounds:z}=q(e,t),y=o(u=>{if(!e.current)return;u.preventDefault(),i({x:u.clientX,y:u.clientY});const{width:f,height:r}=window.getComputedStyle(e.current);s({width:parseInt(f,10),height:parseInt(r,10)}),p(!0)},"initResize"),g=o(()=>n(t.initialWidth,t.initialHeight),"resetSize");return h.useEffect(()=>{const u=o(r=>{if(!e.current||!l)return;const{width:d,height:S}=m(r);z(d,S)},"doDrag"),f=o(()=>{p(!1),document.removeEventListener("mousemove",u,!1),document.removeEventListener("mouseup",f,!1)},"stopDrag");return document.addEventListener("mousemove",u,!1),document.addEventListener("mouseup",f,!1),()=>{document.removeEventListener("mousemove",u,!1),document.removeEventListener("mouseup",f,!1)}},[m,l,e,p,z]),{resetSize:g,initResize:y,isResizing:l,size:c}},"useResizer");const x=o(e=>{const t=h.useRef(null),{initResize:i,isResizing:s,resetSize:c,size:n}=V(t,e),l=s&&n.height!==1/0&&n.width!==1/0,p=e.initialHeight||e.initialWidth,m=E(v,{children:[e.direction==="west"&&a("div",{className:"resize-bar-west",onMouseDown:i}),e.direction==="north"&&a("div",{className:"resize-bar-north",onMouseDown:i})]}),z=E(v,{children:[(e.direction==="east"||e.direction==="south-east")&&a("div",{className:`resize-bar-east ${e.direction==="south-east"?"cursor-nswse":"cursor-ew"}`,onMouseDown:i}),(e.direction==="south"||e.direction==="south-east")&&a("div",{className:`resize-bar-south ${e.direction==="south-east"?"cursor-nswse":"cursor-ns"}`,onMouseDown:i}),a("div",{className:"corner"})]}),y=a(v,{children:E("div",{ref:t,className:"box",children:[m,a("div",{className:"size-info",children:l&&`${n.height}px x ${n.width}px`}),z]})});return a("div",{className:"container",children:E(v,{children:[a("div",{className:"fix-left-edge",children:y}),p&&a("button",{className:"reset-button",onClick:c,children:"Reset Box"})]})})},"Box");try{x.displayName="Box",x.__docgenInfo={description:"",displayName:"Box",props:{step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},axis:{defaultValue:null,description:"",name:"axis",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"both"'}]}},initialWidth:{defaultValue:null,description:"",name:"initialWidth",required:!1,type:{name:"number"}},initialHeight:{defaultValue:null,description:"",name:"initialHeight",required:!1,type:{name:"number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"west"'},{value:'"east"'},{value:'"east-west"'},{value:'"north"'},{value:'"south"'},{value:'"north-south"'},{value:'"south-east"'}]}}}}}catch{}const Z={parameters:{storySource:{source:`import type { ComponentMeta } from "@storybook/react";\r
import type { ComponentStory } from "@storybook/react";\r
import { Box } from "./box";\r
import type { Options } from "../types";\r
\r
export default {\r
  title: "Resizing Examples",\r
  component: Box,\r
} as ComponentMeta<typeof Box>;\r
\r
const dimensionArgs = {\r
  minHeight: 300,\r
  minWidth: 300,\r
  maxHeight: 900,\r
  maxWidth: 900,\r
};\r
\r
const EastDirectionResizeTemplate: ComponentStory<typeof Box> = (\r
  args: Partial<Options>\r
) => <Box axis="horizontal" direction="east" {...args} />;\r
export const EastDirectionResize = EastDirectionResizeTemplate.bind({});\r
EastDirectionResize.args = {\r
  ...dimensionArgs,\r
};\r
\r
const SouthDirectionResizeTemplate: ComponentStory<typeof Box> = (\r
  args: Partial<Options>\r
) => <Box axis="vertical" direction="south" {...args} />;\r
export const SouthDirectionResize = SouthDirectionResizeTemplate.bind({});\r
SouthDirectionResize.args = {\r
  ...dimensionArgs,\r
};\r
\r
const SouthEastDirectionResizeTemplate: ComponentStory<typeof Box> = (\r
  args: Partial<Options>\r
) => <Box axis="both" direction="south-east" {...args} />;\r
export const SouthEastDirectionResize = SouthEastDirectionResizeTemplate.bind(\r
  {}\r
);\r
SouthEastDirectionResize.args = {\r
  ...dimensionArgs,\r
};\r
\r
const SouthEastDirectionResizeWithResetTemplate: ComponentStory<typeof Box> = (\r
  args: Partial<Options>\r
) => <Box axis="both" direction="south-east" {...args} />;\r
export const SouthEastDirectionResizeWithReset =\r
  SouthEastDirectionResizeWithResetTemplate.bind({});\r
SouthEastDirectionResizeWithReset.args = {\r
  initialHeight: 500,\r
  initialWidth: 500,\r
  ...dimensionArgs,\r
};\r
`,locationsMap:{"east-direction-resize":{startLoc:{col:64,line:18},endLoc:{col:57,line:20},startBody:{col:64,line:18},endBody:{col:57,line:20}},"south-direction-resize":{startLoc:{col:65,line:26},endLoc:{col:56,line:28},startBody:{col:65,line:26},endBody:{col:56,line:28}},"south-east-direction-resize":{startLoc:{col:69,line:34},endLoc:{col:57,line:36},startBody:{col:69,line:34},endBody:{col:57,line:36}},"south-east-direction-resize-with-reset":{startLoc:{col:78,line:44},endLoc:{col:57,line:46},startBody:{col:78,line:44},endBody:{col:57,line:46}}}}},title:"Resizing Examples",component:x},D={minHeight:300,minWidth:300,maxHeight:900,maxWidth:900},A=o(e=>a(x,{axis:"horizontal",direction:"east",...e}),"EastDirectionResizeTemplate"),P=A.bind({});P.args={...D};const $=o(e=>a(x,{axis:"vertical",direction:"south",...e}),"SouthDirectionResizeTemplate"),F=$.bind({});F.args={...D};const U=o(e=>a(x,{axis:"both",direction:"south-east",...e}),"SouthEastDirectionResizeTemplate"),Y=U.bind({});Y.args={...D};const X=o(e=>a(x,{axis:"both",direction:"south-east",...e}),"SouthEastDirectionResizeWithResetTemplate"),J=X.bind({});J.args={initialHeight:500,initialWidth:500,...D};const ee=["EastDirectionResize","SouthDirectionResize","SouthEastDirectionResize","SouthEastDirectionResizeWithReset"];export{P as EastDirectionResize,F as SouthDirectionResize,Y as SouthEastDirectionResize,J as SouthEastDirectionResizeWithReset,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=Resize.stories-6f1205e5.js.map
