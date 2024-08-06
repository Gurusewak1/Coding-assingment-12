import{j as l}from"./jsx-runtime-QvZ8i92b.js";import{w as v}from"./index-y_88NuZT.js";import{e as o}from"./index-Bs0Jk7rz.js";import{p}from"./styled-components.browser.esm-Bhz_kbKY.js";import"./index-uubelm5h.js";import"./index-DrFu-skq.js";import"./index-jd2klTXJ.js";const H=p.div`
  width: 100%;
  background-color: ${e=>e.backgroundColor||"transparent"};
  opacity: ${e=>e.disabled?.5:1};
  display: inline-block;
  position: relative;
 
  ${e=>e.disabled&&`
    cursor: not-allowed;
  `}
`,k=p.img`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"auto"};
  ${e=>e.disabled&&`
    pointer-events: none;
  `}
 
  @media (max-width: 768px) {
    width: ${e=>e.width||"75%"};
    height: auto;
  }
 
  @media (max-width: 480px) {
    width: ${e=>e.width||"50%"};
    height: auto;
  }
`,C=p.div`
  display: ${e=>e.disabled?"block":"none"};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
`,w=({src:e,alt:s,width:t="100%",height:a="auto",backgroundColor:d,visible:c=!0,disabled:n=!1})=>c?l.jsxs(H,{backgroundColor:d,disabled:n,children:[l.jsx(k,{src:e,alt:s,width:t,height:a,disabled:n}),l.jsx(C,{disabled:n})]}):null,f=w;w.__docgenInfo={description:"",methods:[],displayName:"HeroImage",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'100%'",computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'auto'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const D={title:"Components/HeroImage",component:f,argTypes:{src:{control:"text"},alt:{control:"text"},width:{control:"text"},height:{control:"text"},backgroundColor:{control:"color"},disabled:{control:"boolean"}}},x=({src:e,alt:s,width:t,height:a,backgroundColor:d,visible:c,disabled:n})=>l.jsx(f,{src:e,alt:s,width:t,height:a,backgroundColor:d,visible:c,disabled:n}),r=x.bind({});r.args={src:"/path/to/hero-image.jpg",alt:"Hero Image",width:"100px",height:"100px",backgroundColor:"grey",disabled:!1,visible:!0};r.play=async({canvasElement:e})=>{const t=await v(e).findByAltText("Hero Image");o(t).toBeInTheDocument(),o(t).toHaveAttribute("src","/path/to/hero-image.jpg"),o(t).toHaveStyle({width:"100px"}),o(t).toHaveStyle({height:"100px"});const a=t.parentElement;o(a).toHaveStyle({backgroundColor:"rgb(128, 128, 128)"}),o(a).not.toHaveStyle({opacity:"0.5"})};const i=x.bind({});i.args={src:"/path/to/hero-image.jpg",alt:"Hero Image",width:"100%",height:"auto",backgroundColor:"grey",visible:!0,disabled:!0};i.play=async({canvasElement:e})=>{const t=await v(e).findByAltText("Hero Image");o(t).toBeInTheDocument(),o(t).toHaveAttribute("src","/path/to/hero-image.jpg"),console.log("Computed height:",window.getComputedStyle(t).height),o(t).toHaveStyle({height:"0px"});const a=t.parentElement;o(a).toHaveStyle({backgroundColor:"rgb(128, 128, 128)"}),o(a).toHaveStyle({opacity:"0.5"})};var g,m,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`({
  src,
  alt,
  width,
  height,
  backgroundColor,
  visible,
  disabled
}) => <HeroImage src={src} alt={alt} width={width} height={height} backgroundColor={backgroundColor} visible={visible} disabled={disabled} />`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,b,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`({
  src,
  alt,
  width,
  height,
  backgroundColor,
  visible,
  disabled
}) => <HeroImage src={src} alt={alt} width={width} height={height} backgroundColor={backgroundColor} visible={visible} disabled={disabled} />`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const _=["Primary","Disabled"];export{i as Disabled,r as Primary,_ as __namedExportsOrder,D as default};
