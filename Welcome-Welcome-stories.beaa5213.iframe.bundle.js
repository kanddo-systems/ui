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
    `},Welcome=({title,description})=>react.createElement(Component.Wrapper,null,react.createElement(Typography.o,{variant:"h1"},title),react.createElement(Typography.o,{variant:"default"},description),react.createElement(Component.SectionTitle,null,"Getting Started"),react.createElement(Component.List,null,react.createElement(Component.ListItem,null,"Install the package with ",react.createElement("code",null,"npm install ",react.createElement("b",null,"@kanddo-ui/react"))),react.createElement(Component.ListItem,null,"Explore the components in the sidebar."),react.createElement(Component.ListItem,null,"Customize the design tokens to fit your project needs.")),react.createElement(Button.$,null,"Get Started"));Welcome.__docgenInfo={description:"",methods:[],displayName:"Welcome",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""}}};const Welcome_stories={title:"Getting Started/Welcome",component:Welcome,parameters:{layout:"centered"}},Default=(args=>react.createElement(Welcome,args)).bind({});Default.args={title:"Welcome to Kanddo UI",description:"Kanddo UI is a design system created to help you build consistent and reusable interfaces."};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Welcome {...args} />",...Default.parameters?.docs?.source}}}},"../core/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Vq:()=>border_radius_borderRadius,Tj:()=>colors_colors,Eo:()=>shadows,LR:()=>sizes,YK:()=>spacing_spacing,bm:()=>transitions,Il:()=>typography_typography});const colors_colors={primary:{50:"#fffbec",100:"#fff7d3",200:"#ffeba5",300:"#ffdb6d",400:"#ffbf32",500:"#ffa80a",600:"#ff9100",700:"#cc6b02",800:"#a1520b",900:"#82450c",950:"#462104"},background:{default:"#ffffff",muted:"#f5f5f5",inverted:"#121212"},text:{default:"#121212",muted:"#4a4a4a",inverted:"#ffffff",subtle:"#777"}},spacing_spacing={none:"0px",small:"8px",medium:"16px",large:"32px",xsmall:"4px",xlarge:"64px",xxlarge:"128px"},typography_typography={fontFamily:'"Montserrat", sans-serif',weight:{light:"300",regular:"400",medium:"500",semiBold:"600",bold:"700",extraBold:"800"},sizes:{xSmall:"12px",small:"14px",medium:"16px",large:"18px",xLarge:"20px",xxLarge:"24px",xxxLarge:"28px",xxxxLarge:"32px"}},shadows={small:"0 4px 8px rgba(0, 0, 0, 0.1)",medium:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",large:"0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"},rounded={none:"0px",small:"4px",medium:"8px",large:"16px",full:"9999px"},sizes={none:"none",small:"small",medium:"medium",large:"large",xsmall:"xsmall",xlarge:"xlarge",xxlarge:"xxlarge"},transitions={button:"all 0.3s ease",color:"background-color 0.3s, opacity 0.3s"},border_radius_borderRadius=size=>rounded[size]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("../core/dist/index.js");const Component=styled_components_browser_esm.Ay.button`
    padding: ${dist.YK.small};
    font-size: ${dist.Il.sizes.small};
    font-family: ${dist.Il.fontFamily};
    background-color: ${dist.Tj.primary[500]};
    color: ${dist.Tj.text.inverted};
    transition: ${dist.bm.color};
    cursor: ${({disabled})=>disabled?"not-allowed":"pointer"};
    opacity: ${({disabled})=>disabled?.6:1};
    border-radius: ${({rounded})=>(0,dist.Vq)(dist.LR[rounded||"medium"])};
    border: none;
    width: 100%;

    &:hover {
        background-color: ${dist.Tj.primary[400]};
    }
`,Button=({children,onClick,rounded="medium",disabled=!1})=>react.createElement(Component,{rounded,onClick:disabled?void 0:onClick,disabled},children);Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rounded:{required:!1,tsType:{name:"RoundedSize"},description:"",defaultValue:{value:"'medium'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./src/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Typography});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("../core/dist/index.js");const typographyStyles={h1:{fontSize:dist.Il.sizes.xxxxLarge,fontWeight:dist.Il.weight.bold},h2:{fontSize:dist.Il.sizes.xxxLarge,fontWeight:dist.Il.weight.semiBold},h3:{fontSize:dist.Il.sizes.xxLarge,fontWeight:dist.Il.weight.medium},h4:{fontSize:dist.Il.sizes.xLarge,fontWeight:dist.Il.weight.semiBold},h5:{fontSize:dist.Il.sizes.large,fontWeight:dist.Il.weight.regular},h6:{fontSize:dist.Il.sizes.medium,fontWeight:dist.Il.weight.light},default:{fontSize:dist.Il.sizes.small,fontWeight:dist.Il.weight.regular},bodySmall:{fontSize:dist.Il.sizes.xSmall,fontWeight:dist.Il.weight.light}},Component=styled_components_browser_esm.Ay.span`
    font-family: ${dist.Il.fontFamily};
    color: ${dist.Tj.text.default};
    font-size: ${props=>typographyStyles[props.variant].fontSize};
    font-weight: ${props=>typographyStyles[props.variant].fontWeight};
`,Typography=({variant,children})=>react.createElement(Component,{variant},children);Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!0,tsType:{name:"union",raw:"keyof typeof typographyStyles",elements:[{name:"literal",value:"h1"},{name:"literal",value:"h2"},{name:"literal",value:"h3"},{name:"literal",value:"h4"},{name:"literal",value:"h5"},{name:"literal",value:"h6"},{name:"literal",value:"default"},{name:"literal",value:"bodySmall"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}}}]);
//# sourceMappingURL=Welcome-Welcome-stories.beaa5213.iframe.bundle.js.map