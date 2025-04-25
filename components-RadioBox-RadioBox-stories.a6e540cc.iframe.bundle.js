"use strict";(self.webpackChunk_kanddo_ui_react=self.webpackChunk_kanddo_ui_react||[]).push([[385],{"./src/components/RadioBox/RadioBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithHint:()=>WithHint,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RadioBox_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("../core/dist/index.js");const Component={Wrapper:styled_components_browser_esm.Ay.div`
        font-family: ${dist.Il.fontFamily};
        margin-bottom: ${dist.YK.large};
        color: ${dist.Tj.text.default};
        width: 100%;
    `,Options:styled_components_browser_esm.Ay.div`
        margin-top: ${dist.YK.xsmall};
        display: flex;
        flex-direction: column;
        gap: ${dist.YK.xsmall};
    `,Label:styled_components_browser_esm.Ay.label`
        display: flex;
        align-items: center;
        gap: ${dist.YK.small};
        cursor: pointer;
        font-size: ${dist.Il.sizes.small};
        transition: ${dist.bm.color};

        &:hover {
            color: ${dist.Tj.primary[700]};
        }
    `,Radio:styled_components_browser_esm.Ay.input`
        appearance: none;
        padding: ${dist.YK.xsmall};
        border: 1px solid black;
        border-radius: 50%;
        transition: ${dist.bm.color};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:checked {
            background-color: ${dist.Tj.primary[700]};
            border-color: ${dist.Tj.primary[700]};
        }
        &:checked::after {
            
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 0 1px ${dist.Tj.primary[400]};
        }
    `};var Typography=__webpack_require__("./src/components/Typography/Typography.tsx");const RadioBox=({label,value,options,onChange,hint})=>react.createElement(Component.Wrapper,null,react.createElement(Typography.o,{variant:"small"},label),react.createElement(Component.Options,null,options.map((option=>react.createElement(Component.Label,{key:option.value},react.createElement(Component.Radio,{type:"radio",name:label,value:option.value,checked:value===option.value,onChange:()=>onChange(option.value)}),option.label)))),hint&&react.createElement(Typography.o,{variant:"xxsmall"},hint));RadioBox.__docgenInfo={description:"",methods:[],displayName:"RadioBox",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"{ value: string; label: string }[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},hint:{required:!1,tsType:{name:"string"},description:""}}};const RadioBox_stories={title:"Components/RadioBox",component:RadioBox,parameters:{layout:"centered"}},Template=args=>{const[value,setValue]=(0,react.useState)(args.value||"");return react.createElement(RadioBox,{...args,value,onChange:setValue})},Default=Template.bind({});Default.args={label:"Select an option",value:"",hint:"",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]};const WithHint=Template.bind({});WithHint.args={label:"Favorite Fruit",value:"",hint:"Choose one of the options below",options:[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"}]};const __namedExportsOrder=["Default","WithHint"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value || '');\n  return <RadioBox {...args} value={value} onChange={setValue} />;\n}",...Default.parameters?.docs?.source}}},WithHint.parameters={...WithHint.parameters,docs:{...WithHint.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value || '');\n  return <RadioBox {...args} value={value} onChange={setValue} />;\n}",...WithHint.parameters?.docs?.source}}}},"../core/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Vq:()=>border_radius_borderRadius,Tj:()=>colors_colors,LR:()=>sizes,YK:()=>spacing_spacing,bm:()=>transitions,Il:()=>tokens_typography.I});const colors_colors={primary:{50:"#F2F2F2",100:"#E6E6E6",200:"#C9C9C9",300:"#B0B0B0",400:"#969696",500:"#7B7B7B",600:"#636363",700:"#4A4A4A",800:"#303030",900:"#1A1A1A",950:"#0D0D0D"},background:{default:"#ffffff",muted:"#f5f5f5",inverted:"#121212"},text:{default:"#121212",muted:"#4a4a4a",inverted:"#ffffff"}},spacing_spacing={none:"0px",small:"8px",medium:"16px",large:"32px",xsmall:"4px",xlarge:"64px",xxlarge:"128px"};var tokens_typography=__webpack_require__("../core/dist/tokens/typography.js");const rounded={none:"0px",small:"4px",medium:"8px",large:"16px",xsmall:"2px",xlarge:"24px",xxlarge:"32px"},sizes={none:"none",small:"small",medium:"medium",large:"large",xsmall:"xsmall",xlarge:"xlarge",xxlarge:"xxlarge"},transitions={button:"all 0.3s ease",color:"background-color 0.3s, opacity 0.3s"},border_radius_borderRadius=size=>rounded[size]},"../core/dist/tokens/typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>typography});const typography={fontFamily:"Montserrat, sans-serif",weight:{light:"300",regular:"400",medium:"500",semiBold:"600",bold:"700",extraBold:"800"},sizes:{xxsmall:"10px",xsmall:"12px",small:"14px",medium:"16px",large:"18px",xlarge:"20px",xxlarge:"24px",xxxlarge:"28px",xxxxlarge:"32px"}}},"./src/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Typography});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("../core/dist/index.js");const typographyStyles={xxxxlarge:{fontSize:dist.Il.sizes.xxxxlarge,fontWeight:dist.Il.weight.bold},xxxlarge:{fontSize:dist.Il.sizes.xxxlarge,fontWeight:dist.Il.weight.semiBold},xxlarge:{fontSize:dist.Il.sizes.xxlarge,fontWeight:dist.Il.weight.medium},xlarge:{fontSize:dist.Il.sizes.xlarge,fontWeight:dist.Il.weight.semiBold},large:{fontSize:dist.Il.sizes.large,fontWeight:dist.Il.weight.regular},medium:{fontSize:dist.Il.sizes.medium,fontWeight:dist.Il.weight.light},small:{fontSize:dist.Il.sizes.small,fontWeight:dist.Il.weight.regular},xsmall:{fontSize:dist.Il.sizes.xsmall,fontWeight:dist.Il.weight.light},xxsmall:{fontSize:dist.Il.sizes.xxsmall,fontWeight:dist.Il.weight.light}},Component=styled_components_browser_esm.Ay.span`
    font-family: ${dist.Il.fontFamily};
    color: ${dist.Tj.text.default};
    font-size: ${props=>typographyStyles[props.variant]?.fontSize||dist.Il.sizes.small};
    font-weight: ${props=>typographyStyles[props.variant]?.fontWeight||dist.Il.weight.regular};
`,Typography=({variant,children})=>react.createElement(Component,{variant},children);Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!0,tsType:{name:"CombinedSizes"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}}}]);
//# sourceMappingURL=components-RadioBox-RadioBox-stories.a6e540cc.iframe.bundle.js.map