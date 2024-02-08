"use strict";(self.webpackChunkq_01_docs=self.webpackChunkq_01_docs||[]).push([[752],{7552:(e,t,s)=>{s.r(t),s.d(t,{default:()=>be});var a=s(1504),n=s(5756),i=s(1100),l=s(7624);const o=a.createContext(null);function c(e){let{children:t,content:s}=e;const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,l.jsx)(o.Provider,{value:n,children:t})}function r(){const e=(0,a.useContext)(o);if(null===e)throw new i.AH("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=r();return(0,l.jsx)(n.U7,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var u=s(5456),h=s(1432),m=s(4357),p=s(867);function b(e){const{permalink:t,title:s,subLabel:a,isNext:n}=e;return(0,l.jsxs)(p.c,{className:(0,u.c)("pagination-nav__link",n?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}function x(e){const{previous:t,next:s}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(b,{...t,subLabel:(0,l.jsx)(m.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,l.jsx)(b,{...s,subLabel:(0,l.jsx)(m.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function j(){const{metadata:e}=r();return(0,l.jsx)(x,{previous:e.previous,next:e.next})}var v=s(8264),g=s(2840),f=s(5864),_=s(4592),N=s(9920);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(m.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(m.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const t=L[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function T(e){let{versionLabel:t,to:s,onClick:a}=e;return(0,l.jsx)(m.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(p.c,{to:s,onClick:a,children:(0,l.jsx)(m.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function U(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:a}}=(0,v.c)(),{pluginId:n}=(0,g.UF)({failfast:!0}),{savePreferredVersionName:i}=(0,_.iy)(n),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,g.i8)(n),r=o??(d=c).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.c)(t,f.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(C,{siteTitle:a,versionMetadata:s})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(T,{versionLabel:c.label,to:r.path,onClick:()=>i(c.name)})})]})}function k(e){let{className:t}=e;const s=(0,N.E)();return s.banner?(0,l.jsx)(U,{className:t,versionMetadata:s}):null}function w(e){let{className:t}=e;const s=(0,N.E)();return s.badge?(0,l.jsx)("span",{className:(0,u.c)(t,f.W.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(m.c,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s}=e;return(0,l.jsx)(m.c,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:s})})},children:" on {date}"})}function A(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(m.c,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function M(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,l.jsxs)("span",{className:f.W.common.lastUpdated,children:[(0,l.jsx)(m.c,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&s?(0,l.jsx)(y,{lastUpdatedAt:t,formattedLastUpdatedAt:s}):"",byUser:a?(0,l.jsx)(A,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const B={iconEdit:"iconEdit_Z9Sw"};function E(e){let{className:t,...s}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.c)(B.iconEdit,t),"aria-hidden":"true",...s,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function I(e){let{editUrl:t}=e;return(0,l.jsxs)(p.c,{to:t,className:f.W.common.editThisPage,children:[(0,l.jsx)(E,{}),(0,l.jsx)(m.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const H={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function V(e){let{permalink:t,label:s,count:a}=e;return(0,l.jsxs)(p.c,{href:t,className:(0,u.c)(H.tag,a?H.tagWithCount:H.tagRegular),children:[s,a&&(0,l.jsx)("span",{children:a})]})}const W={tags:"tags_jXut",tag:"tag_QGVx"};function P(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(m.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.c)(W.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,l.jsx)("li",{className:W.tag,children:(0,l.jsx)(V,{label:t,permalink:s})},s)}))})]})}const D={lastUpdated:"lastUpdated_vwxv"};function S(e){return(0,l.jsx)("div",{className:(0,u.c)(f.W.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(P,{...e})})})}function F(e){let{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a,formattedLastUpdatedAt:n}=e;return(0,l.jsxs)("div",{className:(0,u.c)(f.W.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(I,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.c)("col",D.lastUpdated),children:(s||a)&&(0,l.jsx)(M,{lastUpdatedAt:s,formattedLastUpdatedAt:n,lastUpdatedBy:a})})]})}function R(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:s,formattedLastUpdatedAt:a,lastUpdatedBy:n,tags:i}=e,o=i.length>0,c=!!(t||s||n);return o||c?(0,l.jsxs)("footer",{className:(0,u.c)(f.W.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(S,{tags:i}),c&&(0,l.jsx)(F,{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,formattedLastUpdatedAt:a})]}):null}var O=s(8448),z=s(3088);const G={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function q(e){let{collapsed:t,...s}=e;return(0,l.jsx)("button",{type:"button",...s,className:(0,u.c)("clean-btn",G.tocCollapsibleButton,!t&&G.tocCollapsibleButtonExpanded,s.className),children:(0,l.jsx)(m.c,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const Y={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function Z(e){let{toc:t,className:s,minHeadingLevel:a,maxHeadingLevel:n}=e;const{collapsed:i,toggleCollapsed:o}=(0,O.a)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.c)(Y.tocCollapsible,!i&&Y.tocCollapsibleExpanded,s),children:[(0,l.jsx)(q,{collapsed:i,onClick:o}),(0,l.jsx)(O.U,{lazy:!0,className:Y.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(z.c,{toc:t,minHeadingLevel:a,maxHeadingLevel:n})})]})}const Q={tocMobile:"tocMobile_ITEo"};function X(){const{toc:e,frontMatter:t}=r();return(0,l.jsx)(Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.c)(f.W.docs.docTocMobile,Q.tocMobile)})}var $=s(5124);function J(){const{toc:e,frontMatter:t}=r();return(0,l.jsx)($.c,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.W.docs.docTocDesktop})}var K=s(6448),ee=s(9444);function te(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=r();return t.hide_title||void 0!==s?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.c)(f.W.docs.docMarkdown,"markdown"),children:[s&&(0,l.jsx)("header",{children:(0,l.jsx)(K.c,{as:"h1",children:s})}),(0,l.jsx)(ee.c,{children:t})]})}var se=s(9940),ae=s(3376),ne=s(964);function ie(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const le={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function oe(){const e=(0,ne.c)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(p.c,{"aria-label":(0,m.G)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(ie,{className:le.breadcrumbHomeIcon})})})}const ce={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function re(e){let{children:t,href:s,isLast:a}=e;const n="breadcrumbs__link";return a?(0,l.jsx)("span",{className:n,itemProp:"name",children:t}):s?(0,l.jsx)(p.c,{className:n,href:s,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:n,children:t})}function de(e){let{children:t,active:s,index:a,addMicrodata:n}=e;return(0,l.jsxs)("li",{...n&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.c)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function ue(){const e=(0,se.js)(),t=(0,ae.Y5)();return e?(0,l.jsx)("nav",{className:(0,u.c)(f.W.docs.docBreadcrumbs,ce.breadcrumbsContainer),"aria-label":(0,m.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(oe,{}),e.map(((t,s)=>{const a=s===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(de,{active:a,index:s,addMicrodata:!!n,children:(0,l.jsx)(re,{href:n,isLast:a,children:t.label})},s)}))]})}):null}var he=s(1528);const me={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function pe(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=r(),s=(0,h.U)(),a=e.hide_table_of_contents,n=!a&&t.length>0;return{hidden:a,mobile:n?(0,l.jsx)(X,{}):void 0,desktop:!n||"desktop"!==s&&"ssr"!==s?void 0:(0,l.jsx)(J,{})}}(),{metadata:{unlisted:a}}=r();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.c)("col",!s.hidden&&me.docItemCol),children:[a&&(0,l.jsx)(he.c,{}),(0,l.jsx)(k,{}),(0,l.jsxs)("div",{className:me.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(ue,{}),(0,l.jsx)(w,{}),s.mobile,(0,l.jsx)(te,{children:t}),(0,l.jsx)(R,{})]}),(0,l.jsx)(j,{})]})]}),s.desktop&&(0,l.jsx)("div",{className:"col col--3",children:s.desktop})]})}function be(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,l.jsx)(c,{content:e.content,children:(0,l.jsxs)(n.cr,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(pe,{children:(0,l.jsx)(s,{})})]})})}}}]);