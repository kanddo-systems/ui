"use strict";(self.webpackChunk_kanddo_ui_react=self.webpackChunk_kanddo_ui_react||[]).push([[889],{"./src/components/Pagination/Pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomMaxVisible:()=>CustomMaxVisible,Default:()=>Default,FewPages:()=>FewPages,ManyPages:()=>ManyPages,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pagination_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("../core/dist/index.js");const Component={Wrapper:styled_components_browser_esm.Ay.div`
    font-family: ${dist.Il.fontFamily};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${dist.YK.medium} 0;
  `,PageList:styled_components_browser_esm.Ay.div`
    display: flex;
    align-items: center;
    margin: 0 ${dist.YK.small};
  `,PageItem:styled_components_browser_esm.Ay.button`
    min-width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 ${dist.YK.xsmall};
    border-radius: ${(0,dist.Vq)("small")};
    border: 1px solid ${dist.Tj.background.muted};
    background: ${dist.Tj.background.default};
    cursor: pointer;
    transition: ${dist.bm.color};
    padding: 0 ${dist.YK.small};
    outline: none;

    &:hover {
      background: ${dist.Tj.background.muted};
    }

    ${props=>props.isActive&&styled_components_browser_esm.AH`
        background: ${dist.Tj.primary[700]};
        border-color: ${dist.Tj.primary[700]};

        & > * {
          color: ${dist.Tj.text.inverted};
        }
        &:hover {
          background: ${dist.Tj.primary[800]};
        }
      `}

    ${props=>props.isEllipsis&&styled_components_browser_esm.AH`
        border: none;
        cursor: default;

        &:hover {
          background: transparent;
        }
      `}
  `,Button:styled_components_browser_esm.Ay.button`
    padding: ${dist.YK.xsmall} ${dist.YK.small};
    border-radius: ${(0,dist.Vq)("small")};
    border: 1px solid ${dist.Tj.background.muted};
    background: ${dist.Tj.background.default};
    cursor: pointer;
    transition: ${dist.bm.color};
    outline: none;

    &:hover {
      background: ${dist.Tj.background.muted};
    }

    ${props=>props.disabled&&styled_components_browser_esm.AH`
        opacity: 0.5;
        cursor: not-allowed;

        &:hover {
          background: ${dist.Tj.background.default};
        }
      `}
  `};var Typography=__webpack_require__("./src/components/Typography/Typography.tsx");const Pagination=({currentPage,totalPages,onPageChange,maxVisiblePages=5})=>{const pageNumbers=(()=>{const pages=[];if(totalPages<=maxVisiblePages)for(let i=1;i<=totalPages;i++)pages.push(i);else{pages.push(1);let startPage=Math.max(2,currentPage-Math.floor(maxVisiblePages/2)),endPage=Math.min(totalPages-1,startPage+maxVisiblePages-3);endPage===totalPages-1&&(startPage=Math.max(2,endPage-(maxVisiblePages-3))),startPage>2&&pages.push("...");for(let i=startPage;i<=endPage;i++)pages.push(i);endPage<totalPages-1&&pages.push("..."),totalPages>1&&pages.push(totalPages)}return pages})();return react.createElement(Component.Wrapper,null,react.createElement(Component.Button,{onClick:()=>{currentPage>1&&onPageChange(currentPage-1)},disabled:1===currentPage},react.createElement(Typography.o,{variant:"small"},"Previous")),react.createElement(Component.PageList,null,pageNumbers.map(((page,index)=>react.createElement(Component.PageItem,{key:`${page}-${index}`,isActive:page===currentPage,isEllipsis:"..."===page,onClick:()=>(page=>{"number"==typeof page&&onPageChange(page)})(page)},react.createElement(Typography.o,{variant:"small"},page))))),react.createElement(Component.Button,{onClick:()=>{currentPage<totalPages&&onPageChange(currentPage+1)},disabled:currentPage===totalPages},react.createElement(Typography.o,{variant:"small"},"Next")))};Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},maxVisiblePages:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}}}};const Pagination_stories={title:"Components/Pagination",component:Pagination,parameters:{layout:"centered"}},Template=args=>{const[currentPage,setCurrentPage]=(0,react.useState)(args.currentPage);return react.createElement(Pagination,{...args,currentPage,onPageChange:page=>{setCurrentPage(page),args.onPageChange?.(page)}})},Default=Template.bind({});Default.args={currentPage:1,totalPages:10,onPageChange:page=>console.log(`Page changed to ${page}`)};const ManyPages=Template.bind({});ManyPages.args={currentPage:5,totalPages:20,onPageChange:page=>console.log(`Page changed to ${page}`)};const FewPages=Template.bind({});FewPages.args={currentPage:2,totalPages:3,onPageChange:page=>console.log(`Page changed to ${page}`)};const CustomMaxVisible=Template.bind({});CustomMaxVisible.args={currentPage:5,totalPages:20,maxVisiblePages:7,onPageChange:page=>console.log(`Page changed to ${page}`)};const __namedExportsOrder=["Default","ManyPages","FewPages","CustomMaxVisible"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [currentPage, setCurrentPage] = useState(args.currentPage);\n  return <Pagination {...args} currentPage={currentPage} onPageChange={page => {\n    setCurrentPage(page);\n    args.onPageChange?.(page);\n  }} />;\n}",...Default.parameters?.docs?.source}}},ManyPages.parameters={...ManyPages.parameters,docs:{...ManyPages.parameters?.docs,source:{originalSource:"args => {\n  const [currentPage, setCurrentPage] = useState(args.currentPage);\n  return <Pagination {...args} currentPage={currentPage} onPageChange={page => {\n    setCurrentPage(page);\n    args.onPageChange?.(page);\n  }} />;\n}",...ManyPages.parameters?.docs?.source}}},FewPages.parameters={...FewPages.parameters,docs:{...FewPages.parameters?.docs,source:{originalSource:"args => {\n  const [currentPage, setCurrentPage] = useState(args.currentPage);\n  return <Pagination {...args} currentPage={currentPage} onPageChange={page => {\n    setCurrentPage(page);\n    args.onPageChange?.(page);\n  }} />;\n}",...FewPages.parameters?.docs?.source}}},CustomMaxVisible.parameters={...CustomMaxVisible.parameters,docs:{...CustomMaxVisible.parameters?.docs,source:{originalSource:"args => {\n  const [currentPage, setCurrentPage] = useState(args.currentPage);\n  return <Pagination {...args} currentPage={currentPage} onPageChange={page => {\n    setCurrentPage(page);\n    args.onPageChange?.(page);\n  }} />;\n}",...CustomMaxVisible.parameters?.docs?.source}}}},"../core/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Vq:()=>border_radius_borderRadius,fi:()=>breakpoints,Tj:()=>colors_colors,Wf:()=>rounded,Eo:()=>shadows,LR:()=>sizes,YK:()=>spacing_spacing,bm:()=>transitions,Il:()=>tokens_typography.I});const colors_colors={primary:{50:"#F2F2F2",100:"#E6E6E6",200:"#C9C9C9",300:"#B0B0B0",400:"#969696",500:"#7B7B7B",600:"#636363",700:"#4A4A4A",800:"#303030",900:"#1A1A1A",950:"#0D0D0D"},background:{default:"#ffffff",muted:"#f5f5f5",inverted:"#121212"},text:{default:"#121212",muted:"#4a4a4a",inverted:"#ffffff"}},spacing_spacing={none:"0px",small:"8px",medium:"16px",large:"32px",xsmall:"4px",xlarge:"64px",xxlarge:"128px"};var tokens_typography=__webpack_require__("../core/dist/tokens/typography.js");const shadows={none:"none",small:"0 2px 4px rgba(0, 0, 0, 0.1)",medium:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",large:"0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",xsmall:"0 1px 2px rgba(0, 0, 0, 0.05)",xlarge:"0 15px 30px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",xxlarge:"0 20px 40px rgba(0, 0, 0, 0.3), 0 15px 15px rgba(0, 0, 0, 0.22)"},breakpoints={none:"0px",xsmall:"360px",small:"480px",medium:"768px",large:"1024px",xlarge:"1280px",xxlarge:"1536px"},rounded={none:"0px",small:"4px",medium:"8px",large:"16px",xsmall:"2px",xlarge:"24px",xxlarge:"32px"},sizes={none:"none",small:"small",medium:"medium",large:"large",xsmall:"xsmall",xlarge:"xlarge",xxlarge:"xxlarge"},transitions=(rounded.none,rounded.small,rounded.medium,rounded.large,rounded.xsmall,rounded.xlarge,rounded.xxlarge,{button:"all 0.3s ease",color:"background-color 0.3s, opacity 0.3s"}),border_radius_borderRadius=size=>rounded[size]},"../core/dist/tokens/typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>typography});const typography={fontFamily:"Montserrat, sans-serif",weight:{light:"300",regular:"400",medium:"500",semiBold:"600",bold:"700",extraBold:"800"},sizes:{xxsmall:"10px",xsmall:"12px",small:"14px",medium:"16px",large:"18px",xlarge:"20px",xxlarge:"24px",xxxlarge:"28px",xxxxlarge:"32px"}}},"./src/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Typography});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("../core/dist/index.js");const typographyStyles={xxxxlarge:{fontSize:dist.Il.sizes.xxxxlarge,fontWeight:dist.Il.weight.bold},xxxlarge:{fontSize:dist.Il.sizes.xxxlarge,fontWeight:dist.Il.weight.semiBold},xxlarge:{fontSize:dist.Il.sizes.xxlarge,fontWeight:dist.Il.weight.medium},xlarge:{fontSize:dist.Il.sizes.xlarge,fontWeight:dist.Il.weight.semiBold},large:{fontSize:dist.Il.sizes.large,fontWeight:dist.Il.weight.regular},medium:{fontSize:dist.Il.sizes.medium,fontWeight:dist.Il.weight.light},small:{fontSize:dist.Il.sizes.small,fontWeight:dist.Il.weight.regular},xsmall:{fontSize:dist.Il.sizes.xsmall,fontWeight:dist.Il.weight.light},xxsmall:{fontSize:dist.Il.sizes.xxsmall,fontWeight:dist.Il.weight.light}},Component=styled_components_browser_esm.Ay.span`
    font-family: ${dist.Il.fontFamily};
    color: ${dist.Tj.text.default};
    font-size: ${props=>typographyStyles[props.variant]?.fontSize||dist.Il.sizes.small};
    font-weight: ${props=>typographyStyles[props.variant]?.fontWeight||dist.Il.weight.regular};
`,Typography=({variant,children})=>react.createElement(Component,{variant},children);Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!0,tsType:{name:"CombinedSizes"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}}}]);
//# sourceMappingURL=components-Pagination-Pagination-stories.8bc3957b.iframe.bundle.js.map