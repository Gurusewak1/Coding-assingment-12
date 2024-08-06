import{j as m}from"./jsx-runtime-QvZ8i92b.js";import{w as b,e as a}from"./index-Bs0Jk7rz.js";import{p as v}from"./styled-components.browser.esm-Bhz_kbKY.js";import"./index-uubelm5h.js";import"./index-jd2klTXJ.js";const S=v.label`
    display: ${({visible:e})=>e?"inline-block":"none"};
    padding: 0.5em 1em;
    background-color: ${({disabled:e,backgroundColor:t})=>e?t||"#CCCCCC":t||"#007BFF"};
    color: ${({disabled:e,color:t})=>e?"#888888":t||"white"};
    border-radius: 0.25em;
    font-family: Arial, sans-serif;
    cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
    opacity: ${({disabled:e})=>e?.6:1};
    font-size: ${({fontSize:e})=>e||"inherit"};
    font-weight: ${({fontWeight:e})=>e||"normal"};

    @media (max-width: 768px) {
        font-size: ${({fontSize:e})=>e||"14px"};
        padding: 0.4em 0.8em;
    }

    @media (max-width: 480px) {
        font-size: ${({fontSize:e})=>e||"12px"};
        padding: 0.3em 0.6em;
    }
`,g=({text:e,disabled:t,visible:o=!0,backgroundColor:f,color:x,fontSize:w,fontWeight:h})=>m.jsx(S,{disabled:t,visible:o,backgroundColor:f,color:x,fontSize:w,fontWeight:h,children:e}),u=g;g.__docgenInfo={description:"",methods:[],displayName:"Label",props:{text:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},fontWeight:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Components/Label",component:u,argTypes:{text:{control:"text"},disabled:{control:"boolean"},visible:{control:"boolean"},backgroundColor:{control:"color"},color:{control:"color"},fontSize:{control:"text"},fontWeight:{control:"text"}}},y=e=>m.jsx(u,{...e}),r=y.bind({});r.args={text:"Primary Label",disabled:!1,visible:!0,backgroundColor:"#007BFF",color:"white",fontSize:"16px",fontWeight:"normal"};r.play=async({canvasElement:e})=>{const o=b(e).getByText("Primary Label");await a(o).toBeInTheDocument(),await a(o).toHaveStyle({"background-color":"rgb(0, 123, 255)"}),await a(o).toHaveStyle({color:"rgb(255, 255, 255)"})};const s=y.bind({});s.args={text:"Disabled Label",disabled:!0,visible:!0,backgroundColor:"grey",color:"black",fontSize:"16px",fontWeight:"normal"};s.play=async({canvasElement:e})=>{const o=b(e).getByText("Disabled Label");await a(o).toBeInTheDocument(),await a(o).toHaveStyle({color:"rgb(136, 136, 136)"}),await a(o).toHaveStyle({"background-color":"rgb(128, 128, 128)"}),await a(o).toHaveStyle({opacity:"0.6"}),await a(o).toHaveStyle({cursor:"not-allowed"})};var i,n,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Label {...args} />",...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,d,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Label {...args} />",...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const z=["Primary","Disabled"];export{s as Disabled,r as Primary,z as __namedExportsOrder,q as default};
