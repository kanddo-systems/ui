"use strict";(self.webpackChunk_kanddo_ui_react=self.webpackChunk_kanddo_ui_react||[]).push([[607],{"./src/components/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultModal:()=>DefaultModal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("../core/dist/index.js");const Component={Overlay:styled_components_browser_esm.Ay.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    transition: background-color 0.3s ease;
    padding: ${dist.YK.medium};
  `,Content:styled_components_browser_esm.Ay.div`
    background-color: ${dist.Tj.background.default};
    padding: ${dist.YK.medium};
    border-radius: ${(0,dist.Vq)("small")};
    width: 100%;
    max-width: 600px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  `,Header:styled_components_browser_esm.Ay.div`
    font-size: ${dist.Il.sizes.large};
    font-family: ${dist.Il.fontFamily};
    font-weight: ${dist.Il.weight.bold};
    margin-bottom: ${dist.YK.small};
  `,Body:styled_components_browser_esm.Ay.div`
    font-size: ${dist.Il.sizes.medium};
    font-family: ${dist.Il.fontFamily};
    margin-bottom: ${dist.YK.medium};
    color: ${dist.Tj.text.default};
  `,Footer:styled_components_browser_esm.Ay.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${dist.YK.small};
  `};var Button=__webpack_require__("./src/components/Button/Button.tsx");const Modal=({isOpen,onClose,title,children})=>isOpen?react.createElement(Component.Overlay,{onClick:onClose},react.createElement(Component.Content,{onClick:e=>e.stopPropagation()},react.createElement(Component.Header,null,title),react.createElement(Component.Body,null,children),react.createElement(Component.Footer,null,react.createElement(Button.$,{onClick:onClose},"Close")))):null;Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Modal_stories={title:"Components/Modal",component:Modal,parameters:{layout:"centered"}},DefaultModal=(args=>{const[isOpen,setIsOpen]=(0,react.useState)(!1),toggleModal=()=>setIsOpen(!isOpen);return react.createElement(react.Fragment,null,react.createElement(Button.$,{onClick:toggleModal},"Open Modal"),react.createElement(Modal,{...args,isOpen,onClose:toggleModal}))}).bind({});DefaultModal.args={title:"Modal Title",children:"This is the content inside the modal."};const __namedExportsOrder=["DefaultModal"];DefaultModal.parameters={...DefaultModal.parameters,docs:{...DefaultModal.parameters?.docs,source:{originalSource:"args => {\n  const [isOpen, setIsOpen] = useState(false);\n  const toggleModal = () => setIsOpen(!isOpen);\n  return <>\n      <Button onClick={toggleModal}>Open Modal</Button>\n      <Modal {...args} isOpen={isOpen} onClose={toggleModal} />\n    </>;\n}",...DefaultModal.parameters?.docs?.source}}}},"../core/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Vq:()=>border_radius_borderRadius,Tj:()=>colors_colors,Eo:()=>shadows,LR:()=>sizes,YK:()=>spacing_spacing,bm:()=>transitions,Il:()=>tokens_typography.I});const colors_colors={primary:{50:"#fffbec",100:"#fff7d3",200:"#ffeba5",300:"#ffdb6d",400:"#ffbf32",500:"#ffa80a",600:"#ff9100",700:"#cc6b02",800:"#a1520b",900:"#82450c",950:"#462104"},background:{default:"#ffffff",muted:"#f5f5f5",inverted:"#121212"},text:{default:"#121212",muted:"#4a4a4a",inverted:"#ffffff",subtle:"#777"}},spacing_spacing={none:"0px",small:"8px",medium:"16px",large:"32px",xsmall:"4px",xlarge:"64px",xxlarge:"128px"};var tokens_typography=__webpack_require__("../core/dist/tokens/typography.js");const shadows={none:"none",small:"0 2px 4px rgba(0, 0, 0, 0.1)",medium:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",large:"0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",xsmall:"0 1px 2px rgba(0, 0, 0, 0.05)",xlarge:"0 15px 30px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",xxlarge:"0 20px 40px rgba(0, 0, 0, 0.3), 0 15px 15px rgba(0, 0, 0, 0.22)"},rounded={none:"0px",small:"4px",medium:"8px",large:"16px",xsmall:"2px",xlarge:"24px",xxlarge:"32px"},sizes={none:"none",small:"small",medium:"medium",large:"large",xsmall:"xsmall",xlarge:"xlarge",xxlarge:"xxlarge"},transitions={button:"all 0.3s ease",color:"background-color 0.3s, opacity 0.3s"},border_radius_borderRadius=size=>rounded[size]},"../core/dist/tokens/typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>typography});const typography={fontFamily:'"Montserrat", sans-serif',weight:{light:"300",regular:"400",medium:"500",semiBold:"600",bold:"700",extraBold:"800"},sizes:{xxsmall:"10px",xsmall:"12px",small:"14px",medium:"16px",large:"18px",xlarge:"20px",xxlarge:"24px",xxxlarge:"28px",xxxxlarge:"32px"}}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("../core/dist/index.js");const Component=styled_components_browser_esm.Ay.button`
    padding: ${dist.YK.small};
    font-size: ${dist.Il.sizes.small};
    font-family: ${dist.Il.fontFamily};
    background-color: ${dist.Tj.primary[500]};
    color: ${dist.Tj.text.inverted};
    transition: ${dist.bm.color};
    cursor: ${({disabled})=>disabled?"not-allowed":"pointer"};
    opacity: ${({disabled})=>disabled?.6:1};
    border-radius: ${({rounded})=>(0,dist.Vq)(rounded||"medium")};
    border: none;
    width: 100%;

    &:hover {
        background-color: ${dist.Tj.primary[400]};
    }
`,Button=({children,onClick,rounded="medium",disabled=!1})=>react.createElement(Component,{rounded,onClick:disabled?void 0:onClick,disabled},children);Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rounded:{required:!1,tsType:{name:"RoundedSize"},description:"",defaultValue:{value:"'medium'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}}}]);
//# sourceMappingURL=components-Modal-Modal-stories.eb0ee475.iframe.bundle.js.map