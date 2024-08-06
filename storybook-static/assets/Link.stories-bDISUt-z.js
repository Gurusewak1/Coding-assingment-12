import{j as k}from"./jsx-runtime-QvZ8i92b.js";import{p as w}from"./styled-components.browser.esm-Bhz_kbKY.js";import{w as n,u as D}from"./index-y_88NuZT.js";import{e as l}from"./index-Bs0Jk7rz.js";import"./index-uubelm5h.js";import"./index-DrFu-skq.js";import"./index-jd2klTXJ.js";const S=w.a`
  color: ${e=>e.color||"#007bff"};
  text-decoration: none;
  font-weight: ${e=>e.bold?"bold":"normal"};
  font-style: ${e=>e.italic?"italic":"normal"};
  background-color: ${e=>e.backgroundColor||"transparent"};
  cursor: pointer;
  opacity: ${e=>e.disabled?.5:1};
  pointer-events: ${e=>e.disabled?"none":"auto"};

  &:hover {
    text-decoration: underline;
  }
`,v=({href:e,label:s,color:o,bold:C,italic:L,visible:h=!0,disabled:T=!1,backgroundColor:q})=>h?k.jsx(S,{href:e,color:o,bold:C,italic:L,disabled:T,backgroundColor:q,children:s}):null,x=v;v.__docgenInfo={description:"",methods:[],displayName:"Link",props:{href:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},bold:{required:!1,tsType:{name:"boolean"},description:""},italic:{required:!1,tsType:{name:"boolean"},description:""},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"Components/Link",component:x,argTypes:{label:{control:"text"},href:{control:"text"},color:{control:"color"},bold:{control:"boolean"},italic:{control:"boolean"},visible:{control:"boolean"},disabled:{control:"boolean"},backgroundColor:{control:"color"}}},i=e=>k.jsx(x,{...e}),a=i.bind({});a.args={label:"Default Link",href:"https://example.com",color:"#007bff",bold:!1,italic:!1,visible:!0,disabled:!1,backgroundColor:"transparent"};const r=i.bind({});r.args={label:"Disabled Link",href:"https://example.com",color:"#007bff",bold:!1,italic:!1,visible:!0,disabled:!0,backgroundColor:"transparent"};const t=i.bind({});t.args={label:"Custom Color Link",href:"https://example.com",color:"#ff5733",bold:!1,italic:!1,visible:!0,disabled:!1,backgroundColor:"transparent"};a.play=async({canvasElement:e})=>{const o=n(e).getByText("Default Link");await D.hover(o),await l(o).toHaveStyle("color: #007bff")};r.play=async({canvasElement:e})=>{const o=n(e).getByText("Disabled Link");await l(o).toHaveStyle("pointer-events: none"),await l(o).toHaveStyle("opacity: 0.5")};t.play=async({canvasElement:e})=>{const o=n(e).getByText("Custom Color Link");await l(o).toHaveStyle("color: #ff5733")};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Link {...args} />",...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Link {...args} />",...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,g,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Link {...args} />",...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const N=["Default","Disabled","CustomColor"];export{t as CustomColor,a as Default,r as Disabled,N as __namedExportsOrder,I as default};
