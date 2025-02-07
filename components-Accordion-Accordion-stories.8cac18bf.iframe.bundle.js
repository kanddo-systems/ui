"use strict";(self.webpackChunk_kanddo_ui_react=self.webpackChunk_kanddo_ui_react||[]).push([[851],{"./src/components/Accordion/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});var react=__webpack_require__("../../node_modules/react/index.js"),dist=__webpack_require__("../core/dist/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const Component={Wrapper:styled_components_browser_esm.Ay.div`
    font-family: ${dist.Il.fontFamily};
    width: 100%;
    border: 1px solid ${dist.Tj.background.muted};
    border-radius: ${(0,dist.Vq)(dist.LR.small)};
    overflow: hidden;
    background: ${dist.Tj.background.default};
  `,Item:styled_components_browser_esm.Ay.div`
    border-bottom: 1px solid ${dist.Tj.background.muted};
    &:last-child {
      border-bottom: none;
    }
  `,Header:styled_components_browser_esm.Ay.button`
    width: 100%;
    padding: ${dist.YK.small};
    font-size: ${dist.Il.sizes.small};
    border: none;
    text-align: left;
    background: ${({isOpen})=>isOpen?dist.Tj.primary[200]:dist.Tj.background.default};
    cursor: pointer;
    outline: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: ${(0,dist.Vq)(dist.LR.xsmall)};
    transition: ${dist.bm.color}, background 0.2s ease-in-out;
  `,Content:styled_components_browser_esm.Ay.div`
    max-height: ${({isOpen})=>isOpen?"500px":"0"};
    overflow: hidden;
    padding: ${dist.YK.small};
    background: ${dist.Tj.background.default};
    font-size: ${dist.Il.sizes.small};
    color: ${dist.Tj.text.default};
    opacity: ${({isOpen})=>isOpen?1:0};
    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out, padding 0.3s ease-in-out;
    ${({isOpen})=>isOpen?"":"padding-top: 0; padding-bottom: 0;"}
  `};var Typography=__webpack_require__("./src/components/Typography/Typography.tsx");const Accordion=({items})=>{const[openIndex,setOpenIndex]=(0,react.useState)(null);return react.createElement(Component.Wrapper,null,items.map(((item,index)=>react.createElement(Component.Item,{key:index},react.createElement(Component.Header,{isOpen:openIndex===index,onClick:()=>(index=>{setOpenIndex(openIndex===index?null:index)})(index)},react.createElement(Typography.o,{variant:"default"},item.title),react.createElement("span",null,openIndex===index?"▲":"▼")),react.createElement(Component.Content,{isOpen:openIndex===index},item.content)))))};Accordion.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:""}}};const Accordion_stories={title:"Components/Accordion",component:Accordion,parameters:{layout:"centered"}},Default=(args=>react.createElement(Accordion,args)).bind({});Default.args={items:[{title:"Section 1",content:"Content for section 1"},{title:"Section 2",content:"Content for section 2"},{title:"Section 3",content:"Content for section 3"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Accordion {...args} />",...Default.parameters?.docs?.source}}}},"../core/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Vq:()=>border_radius_borderRadius,Tj:()=>colors_colors,Eo:()=>shadows,LR:()=>sizes,YK:()=>spacing_spacing,bm:()=>transitions,Il:()=>typography_typography});const colors_colors={primary:{50:"#fffbec",100:"#fff7d3",200:"#ffeba5",300:"#ffdb6d",400:"#ffbf32",500:"#ffa80a",600:"#ff9100",700:"#cc6b02",800:"#a1520b",900:"#82450c",950:"#462104"},background:{default:"#ffffff",muted:"#f5f5f5",inverted:"#121212"},text:{default:"#121212",muted:"#4a4a4a",inverted:"#ffffff",subtle:"#777"}},spacing_spacing={none:"0px",small:"8px",medium:"16px",large:"32px",xsmall:"4px",xlarge:"64px",xxlarge:"128px"},typography_typography={fontFamily:'"Montserrat", sans-serif',weight:{light:"300",regular:"400",medium:"500",semiBold:"600",bold:"700",extraBold:"800"},sizes:{xSmall:"12px",small:"14px",medium:"16px",large:"18px",xLarge:"20px",xxLarge:"24px",xxxLarge:"28px",xxxxLarge:"32px"}},shadows={small:"0 4px 8px rgba(0, 0, 0, 0.1)",medium:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",large:"0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"},rounded={none:"0px",small:"4px",medium:"8px",large:"16px",full:"9999px"},sizes={none:"none",small:"small",medium:"medium",large:"large",xsmall:"xsmall",xlarge:"xlarge",xxlarge:"xxlarge"},transitions={button:"all 0.3s ease",color:"background-color 0.3s, opacity 0.3s"},border_radius_borderRadius=size=>rounded[size]},"./src/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Typography});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("../core/dist/index.js");const typographyStyles={h1:{fontSize:dist.Il.sizes.xxxxLarge,fontWeight:dist.Il.weight.bold},h2:{fontSize:dist.Il.sizes.xxxLarge,fontWeight:dist.Il.weight.semiBold},h3:{fontSize:dist.Il.sizes.xxLarge,fontWeight:dist.Il.weight.medium},h4:{fontSize:dist.Il.sizes.xLarge,fontWeight:dist.Il.weight.semiBold},h5:{fontSize:dist.Il.sizes.large,fontWeight:dist.Il.weight.regular},h6:{fontSize:dist.Il.sizes.medium,fontWeight:dist.Il.weight.light},default:{fontSize:dist.Il.sizes.small,fontWeight:dist.Il.weight.regular},bodySmall:{fontSize:dist.Il.sizes.xSmall,fontWeight:dist.Il.weight.light}},Component=styled_components_browser_esm.Ay.span`
    font-family: ${dist.Il.fontFamily};
    color: ${dist.Tj.text.default};
    font-size: ${props=>typographyStyles[props.variant].fontSize};
    font-weight: ${props=>typographyStyles[props.variant].fontWeight};
`,Typography=({variant,children})=>react.createElement(Component,{variant},children);Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!0,tsType:{name:"union",raw:"keyof typeof typographyStyles",elements:[{name:"literal",value:"h1"},{name:"literal",value:"h2"},{name:"literal",value:"h3"},{name:"literal",value:"h4"},{name:"literal",value:"h5"},{name:"literal",value:"h6"},{name:"literal",value:"default"},{name:"literal",value:"bodySmall"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}}}]);
//# sourceMappingURL=components-Accordion-Accordion-stories.8cac18bf.iframe.bundle.js.map