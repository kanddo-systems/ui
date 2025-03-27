"use strict";(self.webpackChunk_kanddo_ui_react=self.webpackChunk_kanddo_ui_react||[]).push([[674],{"./src/docs/Welcome/Welcome.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Welcome_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("../core/dist/index.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx");const Component={Wrapper:styled_components_browser_esm.Ay.div`
        font-family: ${dist.Il.fontFamily};
        padding: ${dist.YK.large};
        color: ${dist.Tj.text.default};
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
    `,SectionTitle:styled_components_browser_esm.Ay.h2`
        font-size: ${dist.Il.sizes.large};
        margin-top: ${dist.YK.medium};
        color: ${dist.Tj.text.default};
    `,List:styled_components_browser_esm.Ay.ul`
        list-style-type: none;
        padding: 0;
    `,ListItem:styled_components_browser_esm.Ay.li`
        font-size: ${dist.Il.sizes.medium};
        margin-bottom: ${dist.YK.small};
        a {
            color: ${dist.Tj.primary[400]};
            text-decoration: none;
            transition: ${dist.bm.color};
            &:hover {
                color: ${dist.Tj.primary[500]};
            }
        }
    `},Welcome=({title,description})=>react.createElement(Component.Wrapper,null,react.createElement(Typography.o,{variant:"xxxxlarge"},title),react.createElement(Typography.o,{variant:"small"},description),react.createElement(Component.SectionTitle,null,"Getting Started"),react.createElement(Component.List,null,react.createElement(Component.ListItem,null,"Install the package with ",react.createElement("code",null,"npm install ",react.createElement("b",null,"@kanddo-ui/react"))),react.createElement(Component.ListItem,null,"Explore the components in the sidebar."),react.createElement(Component.ListItem,null,"Customize the design tokens to fit your project needs.")),react.createElement(Button.$,{onClick:()=>window.open("https://github.com/kanddo-systems/ui","_blank")},"Get Started"));Welcome.__docgenInfo={description:"",methods:[],displayName:"Welcome",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""}}};const Welcome_stories={title:"Getting Started/Welcome",component:Welcome,parameters:{layout:"centered"}},Default=(args=>react.createElement(Welcome,args)).bind({});Default.args={title:"Welcome to Kanddo UI",description:"Kanddo UI is a design system created to help you build consistent and reusable interfaces."};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Welcome {...args} />",...Default.parameters?.docs?.source}}}},"../core/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Vq:()=>border_radius_borderRadius,Tj:()=>colors_colors,LR:()=>sizes,YK:()=>spacing_spacing,bm:()=>transitions,Il:()=>tokens_typography.I});const colors_colors={primary:{50:"#F2F2F2",100:"#E6E6E6",200:"#C9C9C9",300:"#B0B0B0",400:"#969696",500:"#7B7B7B",600:"#636363",700:"#4A4A4A",800:"#303030",900:"#1A1A1A",950:"#0D0D0D"},background:{default:"#ffffff",muted:"#f5f5f5",inverted:"#121212"},text:{default:"#121212",muted:"#4a4a4a",inverted:"#ffffff",subtle:"#777"}},spacing_spacing={none:"0px",small:"8px",medium:"16px",large:"32px",xsmall:"4px",xlarge:"64px",xxlarge:"128px"};var tokens_typography=__webpack_require__("../core/dist/tokens/typography.js");const rounded={none:"0px",small:"4px",medium:"8px",large:"16px",xsmall:"2px",xlarge:"24px",xxlarge:"32px"},sizes={none:"none",small:"small",medium:"medium",large:"large",xsmall:"xsmall",xlarge:"xlarge",xxlarge:"xxlarge"},transitions={button:"all 0.3s ease",color:"background-color 0.3s, opacity 0.3s"},border_radius_borderRadius=size=>rounded[size]},"../core/dist/tokens/typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>typography});const typography={fontFamily:'"Montserrat", sans-serif',weight:{light:"300",regular:"400",medium:"500",semiBold:"600",bold:"700",extraBold:"800"},sizes:{xxsmall:"10px",xsmall:"12px",small:"14px",medium:"16px",large:"18px",xlarge:"20px",xxlarge:"24px",xxxlarge:"28px",xxxxlarge:"32px"}}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("../core/dist/index.js");const Component=styled_components_browser_esm.Ay.button`
    padding: ${dist.YK.small} ${dist.YK.medium};
    font-size: ${dist.Il.sizes.xsmall};
    font-family: ${dist.Il.fontFamily};
    font-weight:${dist.Il.weight.semiBold};
    background-color: ${dist.Tj.primary[900]};
    color: ${dist.Tj.text.inverted};
    transition: ${dist.bm.color};
    cursor: ${({disabled})=>disabled?"not-allowed":"pointer"};
    opacity: ${({disabled})=>disabled?.6:1};
    border-radius: ${({rounded})=>(0,dist.Vq)(rounded||"medium")};
    border: none;
    width: 100%;
    line-height: 1rem;

    &:hover {
        background-color: ${dist.Tj.primary[700]};
    }
`,ButtonComponent=({children,onClick,rounded="medium",disabled=!1})=>react.createElement(Component,{rounded,onClick:disabled?void 0:onClick,disabled,"aria-disabled":disabled,role:"button"},children),Button=(0,react.memo)(ButtonComponent);ButtonComponent.__docgenInfo={description:"",methods:[],displayName:"ButtonComponent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rounded:{required:!1,tsType:{name:"RoundedSize"},description:"",defaultValue:{value:"'medium'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./src/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Typography});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("../core/dist/index.js");const typographyStyles={xxxxlarge:{fontSize:dist.Il.sizes.xxxxlarge,fontWeight:dist.Il.weight.bold},xxxlarge:{fontSize:dist.Il.sizes.xxxlarge,fontWeight:dist.Il.weight.semiBold},xxlarge:{fontSize:dist.Il.sizes.xxlarge,fontWeight:dist.Il.weight.medium},xlarge:{fontSize:dist.Il.sizes.xlarge,fontWeight:dist.Il.weight.semiBold},large:{fontSize:dist.Il.sizes.large,fontWeight:dist.Il.weight.regular},medium:{fontSize:dist.Il.sizes.medium,fontWeight:dist.Il.weight.light},small:{fontSize:dist.Il.sizes.small,fontWeight:dist.Il.weight.regular},xsmall:{fontSize:dist.Il.sizes.xsmall,fontWeight:dist.Il.weight.light},xxsmall:{fontSize:dist.Il.sizes.xxsmall,fontWeight:dist.Il.weight.light}},Component=styled_components_browser_esm.Ay.span`
    font-family: ${dist.Il.fontFamily};
    color: ${dist.Tj.text.default};
    font-size: ${props=>typographyStyles[props.variant]?.fontSize||dist.Il.sizes.small};
    font-weight: ${props=>typographyStyles[props.variant]?.fontWeight||dist.Il.weight.regular};
`,Typography=({variant,children})=>react.createElement(Component,{variant},children);Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!0,tsType:{name:"CombinedSizes"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}}}]);
//# sourceMappingURL=Welcome-Welcome-stories.cb444e01.iframe.bundle.js.map