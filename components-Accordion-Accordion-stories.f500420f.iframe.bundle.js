"use strict";(self.webpackChunk_kanddo_ui_react=self.webpackChunk_kanddo_ui_react||[]).push([[851],{"./src/components/Accordion/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});var react=__webpack_require__("../../node_modules/react/index.js"),dist=__webpack_require__("../core/dist/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const Component={Wrapper:styled_components_browser_esm.Ay.div`
    font-family: ${dist.Il.fontFamily};
    width: 100%;
    border: 1px solid ${dist.Tj.background.muted};
    border-radius: ${(0,dist.Vq)("small")};
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
    background: ${({isOpen})=>isOpen?dist.Tj.primary[800]:dist.Tj.background.default};
    cursor: pointer;
    outline: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: ${(0,dist.Vq)("xsmall")};
    transition: ${dist.bm.color}, background 0.2s ease-in-out;

    & > * {
      color: ${({isOpen})=>isOpen?dist.Tj.text.inverted:dist.Tj.text.default};
    }
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
  `};var Typography=__webpack_require__("./src/components/Typography/Typography.tsx");const Accordion=({items})=>{const[openIndex,setOpenIndex]=(0,react.useState)(null),toggleAccordion=(0,react.useCallback)((id=>{setOpenIndex((prev=>prev===id?null:id))}),[]);return react.createElement(Component.Wrapper,null,items.map((({id,title,content})=>react.createElement(MemoizedAccordionItem,{key:id,id,title,content,isOpen:openIndex===id,onToggle:toggleAccordion}))))},AccordionItemComponent=({id,title,content,isOpen,onToggle})=>react.createElement(Component.Item,null,react.createElement(Component.Header,{isOpen,onClick:()=>onToggle(id),role:"button","aria-expanded":isOpen},react.createElement(Typography.o,{variant:"small"},title)),react.createElement(Component.Content,{isOpen,"aria-hidden":!isOpen},content)),MemoizedAccordionItem=(0,react.memo)(AccordionItemComponent);Accordion.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:""}}};const Accordion_stories={title:"Components/Accordion",component:Accordion,parameters:{layout:"centered"}},Default=(args=>react.createElement("div",{style:{minWidth:400}},react.createElement(Accordion,args))).bind({});Default.args={items:[{id:1,title:"Is it accessible?",content:"Content for section 1"},{id:2,title:"Is it styled?",content:"Content for section 2"},{id:3,title:"Is it animated?",content:"Content for section 3"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <div style={{\n  minWidth: 400\n}}>\n    <Accordion {...args} />\n  </div>",...Default.parameters?.docs?.source}}}},"../core/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Vq:()=>border_radius_borderRadius,Tj:()=>colors_colors,LR:()=>sizes,YK:()=>spacing_spacing,bm:()=>transitions,Il:()=>tokens_typography.I});const colors_colors={primary:{50:"#F2F2F2",100:"#E6E6E6",200:"#C9C9C9",300:"#B0B0B0",400:"#969696",500:"#7B7B7B",600:"#636363",700:"#4A4A4A",800:"#303030",900:"#1A1A1A",950:"#0D0D0D"},background:{default:"#ffffff",muted:"#f5f5f5",inverted:"#121212"},text:{default:"#121212",muted:"#4a4a4a",inverted:"#ffffff",subtle:"#777"}},spacing_spacing={none:"0px",small:"8px",medium:"16px",large:"32px",xsmall:"4px",xlarge:"64px",xxlarge:"128px"};var tokens_typography=__webpack_require__("../core/dist/tokens/typography.js");const rounded={none:"0px",small:"4px",medium:"8px",large:"16px",xsmall:"2px",xlarge:"24px",xxlarge:"32px"},sizes={none:"none",small:"small",medium:"medium",large:"large",xsmall:"xsmall",xlarge:"xlarge",xxlarge:"xxlarge"},transitions={button:"all 0.3s ease",color:"background-color 0.3s, opacity 0.3s"},border_radius_borderRadius=size=>rounded[size]},"../core/dist/tokens/typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>typography});const typography={fontFamily:'"Montserrat", sans-serif',weight:{light:"300",regular:"400",medium:"500",semiBold:"600",bold:"700",extraBold:"800"},sizes:{xxsmall:"10px",xsmall:"12px",small:"14px",medium:"16px",large:"18px",xlarge:"20px",xxlarge:"24px",xxxlarge:"28px",xxxxlarge:"32px"}}},"./src/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Typography});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("../core/dist/index.js");const typographyStyles={xxxxlarge:{fontSize:dist.Il.sizes.xxxxlarge,fontWeight:dist.Il.weight.bold},xxxlarge:{fontSize:dist.Il.sizes.xxxlarge,fontWeight:dist.Il.weight.semiBold},xxlarge:{fontSize:dist.Il.sizes.xxlarge,fontWeight:dist.Il.weight.medium},xlarge:{fontSize:dist.Il.sizes.xlarge,fontWeight:dist.Il.weight.semiBold},large:{fontSize:dist.Il.sizes.large,fontWeight:dist.Il.weight.regular},medium:{fontSize:dist.Il.sizes.medium,fontWeight:dist.Il.weight.light},small:{fontSize:dist.Il.sizes.small,fontWeight:dist.Il.weight.regular},xsmall:{fontSize:dist.Il.sizes.xsmall,fontWeight:dist.Il.weight.light},xxsmall:{fontSize:dist.Il.sizes.xxsmall,fontWeight:dist.Il.weight.light}},Component=styled_components_browser_esm.Ay.span`
    font-family: ${dist.Il.fontFamily};
    color: ${dist.Tj.text.default};
    font-size: ${props=>typographyStyles[props.variant]?.fontSize||dist.Il.sizes.small};
    font-weight: ${props=>typographyStyles[props.variant]?.fontWeight||dist.Il.weight.regular};
`,Typography=({variant,children})=>react.createElement(Component,{variant},children);Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!0,tsType:{name:"CombinedSizes"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}}}]);
//# sourceMappingURL=components-Accordion-Accordion-stories.f500420f.iframe.bundle.js.map