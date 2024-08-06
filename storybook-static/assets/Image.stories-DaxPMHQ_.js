import{j as p}from"./jsx-runtime-QvZ8i92b.js";import{w as l,u as d}from"./index-Bs0Jk7rz.js";import{p as E}from"./styled-components.browser.esm-Bhz_kbKY.js";import"./index-uubelm5h.js";import"./index-jd2klTXJ.js";const j=E.div`
  display: ${e=>e.visible?"inline-block":"none"};
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"auto"};
  background-color: ${e=>e.backgroundColor||"transparent"};
  position: relative;
  opacity: ${e=>e.disabled?.5:1};
  cursor: ${e=>e.disabled?"not-allowed":"default"};
 
  @media (max-width: 1024px) {
    width: 80%;
    height: auto;
  }
 
  @media (max-width: 768px) {
    width: 70%;
    height: auto;
  }
 
  @media (max-width: 480px) {
    width: 60%;
    height: auto;
  }
`,A=E.img`
  width: 100%;
  height: 100%;
  display: block;
  opacity: ${e=>e.disabled?.5:1};
`,m=({src:e,alt:t,width:a,height:$,disabled:g,backgroundColor:D,visible:S=!0})=>p.jsx(j,{width:a,height:$,disabled:g,backgroundColor:D,visible:S,children:p.jsx(A,{src:e,alt:t,disabled:g})});m.__docgenInfo={description:"",methods:[],displayName:"Img",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const R={title:"Components/Img",component:m,argTypes:{src:{control:"text"},alt:{control:"text"},width:{control:"text"},height:{control:"text"},disabled:{control:"boolean"},backgroundColor:{control:"color"},visible:{control:"boolean"}}},n=e=>p.jsx(m,{...e}),r=n.bind({});r.args={src:"https://via.placeholder.com/150",alt:"Placeholder Image",width:"150px",height:"150px",disabled:!1,visible:!0,backgroundColor:"transparent"};r.play=async({canvasElement:e})=>{const a=await l(e).getByAltText("Placeholder Image");await d.hover(a)};const s=n.bind({});s.args={src:"https://via.placeholder.com/150",alt:"Placeholder Image",width:"150px",height:"150px",disabled:!0,visible:!0,backgroundColor:"transparent"};s.play=async({canvasElement:e})=>{const a=await l(e).getByAltText("Placeholder Image");await d.hover(a)};const o=n.bind({});o.args={src:"https://via.placeholder.com/150",alt:"Placeholder Image",width:"150px",height:"150px",disabled:!1,visible:!1,backgroundColor:"transparent"};o.play=async({canvasElement:e})=>{const a=await l(e).queryByAltText("Placeholder Image");a&&await d.hover(a)};const i=n.bind({});i.args={src:"https://via.placeholder.com/150",alt:"Placeholder Image",width:"150px",height:"150px",disabled:!1,visible:!0,backgroundColor:"blue"};i.play=async({canvasElement:e})=>{const a=await l(e).getByAltText("Placeholder Image");await d.hover(a)};const c=n.bind({});c.args={src:"https://via.placeholder.com/150",alt:"Placeholder Image",width:"150px",height:"150px",disabled:!0,visible:!0,backgroundColor:"blue"};c.play=async({canvasElement:e})=>{const a=await l(e).getByAltText("Placeholder Image");await d.hover(a)};var h,u,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Img {...args} />",...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,x,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Img {...args} />",...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var w,I,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:"args => <Img {...args} />",...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var k,T,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:"args => <Img {...args} />",...(C=(T=i.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var P,B,q;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:"args => <Img {...args} />",...(q=(B=c.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};const V=["Default","Disabled","Hidden","CustomBackground","DisabledWithCustomBackground"];export{i as CustomBackground,r as Default,s as Disabled,c as DisabledWithCustomBackground,o as Hidden,V as __namedExportsOrder,R as default};
