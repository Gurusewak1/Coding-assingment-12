import{j as B}from"./jsx-runtime-QvZ8i92b.js";import{w as i,e as n,u as d}from"./index-Bs0Jk7rz.js";import{p as E}from"./styled-components.browser.esm-Bhz_kbKY.js";import"./index-uubelm5h.js";import"./index-jd2klTXJ.js";const H=E.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: ${e=>e.disabled?"#cccccc":e.backgroundColor||"#007bff"};
  border: none;
  border-radius: 4px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.disabled?.5:1};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${e=>!e.disabled&&(e.hoverColor||"#0056b3")};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`,w=({label:e,disabled:c=!1,backgroundColor:o,hoverColor:S,visible:q=!0})=>q?B.jsx(H,{disabled:c,backgroundColor:o,hoverColor:S,children:e}):null,T=w;w.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},hoverColor:{required:!1,tsType:{name:"string"},description:""},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"Components/Button",component:T,argTypes:{backgroundColor:{control:"color"},hoverColor:{control:"color"},visible:{control:"boolean"},size:{control:"text"}}},l=e=>B.jsx(T,{...e}),a=l.bind({});a.args={label:"Click me",disabled:!1,backgroundColor:"#007bff",hoverColor:"#0056b3",visible:!0};a.play=async({canvasElement:e})=>{const o=i(e).getByText("Click me");await n(o).toBeInTheDocument(),await n(o).toHaveStyle("background-color: #007bff")};const r=l.bind({});r.args={label:"Click me",disabled:!0,backgroundColor:"#cccccc",hoverColor:"#aaaaaa",visible:!0};r.play=async({canvasElement:e})=>{const o=i(e).getByText("Click me");await n(o).toBeInTheDocument(),await n(o).toHaveStyle("background-color: #cccccc")};const t=l.bind({});t.args={label:"Click me",disabled:!1,backgroundColor:"#007bff",hoverColor:"#0056b3",visible:!0,size:"large"};t.play=async({canvasElement:e})=>{const o=await i(e).getByText("Click me");await d.hover(o),await d.click(o)};const s=l.bind({});s.args={label:"Hover me",disabled:!1,backgroundColor:"#007bff",hoverColor:"#007bff",visible:!0};s.play=async({canvasElement:e})=>{const o=i(e).getByText("Hover me");await n(o).toBeInTheDocument(),await d.hover(o),await n(o).toHaveStyle("background-color: rgb(0, 123, 255)")};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Button {...args} />",...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,g,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Button {...args} />",...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,y,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Button {...args} />",...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,k,h;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:"args => <Button {...args} />",...(h=(k=s.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const L=["Primary","Disabled","Large","Hover"];export{r as Disabled,s as Hover,t as Large,a as Primary,L as __namedExportsOrder,I as default};
