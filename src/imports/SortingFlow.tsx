import svgPaths from "./svg-978hna2a62";

function Decision() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Decision">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Decision">
          <path d={svgPaths.pce2cc00} fill="var(--fill-0, #FFE9AC)" id="Vector" stroke="var(--stroke-0, #C97800)" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function IconDecision() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Decision">
      <Decision />
    </div>
  );
}

function ToolbarSubActionButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-start p-[2px] relative rounded-[2px] shrink-0" data-name="Toolbar sub / Action button">
      <IconDecision />
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2f3646] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Parameters (0)</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[16px] relative shrink-0 w-px">
      <div className="absolute bg-[#d9dbdd] inset-0" />
    </div>
  );
}

function ToolbarSubDivider() {
  return (
    <div className="content-stretch flex items-start py-[2px] relative shrink-0" data-name="Toolbar sub / Divider">
      <Frame16 />
    </div>
  );
}

function XRayIcon() {
  return (
    <div className="h-[20px] relative shrink-0 w-[31px]" data-name="x ray icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 20">
        <g id="x ray icon">
          <g id="Group 1734">
            <rect fill="var(--fill-0, white)" height="11" id="Rectangle 1660" width="12" x="9" y="4.62994" />
            <path d={svgPaths.p8ad9280} id="Rectangle 1" stroke="var(--stroke-0, #535965)" />
            <rect height="3" id="Rectangle 2" stroke="var(--stroke-0, #146FF4)" width="5" x="12.5" y="8.5" />
            <rect height="7" id="Rectangle 3" stroke="var(--stroke-0, #146FF4)" width="9" x="10.5" y="6.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[16px] relative shrink-0 w-px">
      <div className="absolute bg-[#d9dbdd] inset-0" />
    </div>
  );
}

function MenuNavigationThreeDotsMenuVertical() {
  return (
    <div className="absolute left-[3px] size-[12px] top-[4px]" data-name="Menu-Navigation / three-dots-menu-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Menu-Navigation / three-dots-menu-vertical">
          <g id="Vector">
            <path d={svgPaths.pce18720} fill="var(--fill-0, #2F3646)" />
            <path d={svgPaths.p24092800} fill="var(--fill-0, #2F3646)" />
            <path d={svgPaths.pb2d7b00} fill="var(--fill-0, #2F3646)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function KebabMenu() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-[18px]" data-name="kebab menu">
      <div className="-translate-x-1/2 absolute bg-[#f2f2f3] border border-[#c1c3c8] border-solid h-[20px] left-1/2 top-0 w-[17.916px]" data-name="bkg" />
      <MenuNavigationThreeDotsMenuVertical />
    </div>
  );
}

function ToolbarZone() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name=".Toolbar zone">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] relative size-full">
          <ToolbarSubActionButton />
          <ToolbarSubDivider />
          <XRayIcon />
          <Frame17 />
          <KebabMenu />
        </div>
      </div>
    </div>
  );
}

function LabelContentSwitcherLeft() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center px-[19px] py-[2px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-[81px]" data-name=".Label content switcher - Left">
      <div aria-hidden="true" className="absolute border-[#c1c3c8] border-b border-l border-solid border-t inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2f3646] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Structure mode</p>
      </div>
    </div>
  );
}

function LabelContentSwitcherRight() {
  return (
    <div className="bg-[#146ff4] content-stretch flex h-[20px] items-center justify-center px-[19px] py-[2px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0 w-[88px]" data-name=".Label content switcher - Right">
      <div aria-hidden="true" className="absolute border border-[#146ff4] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Design mode</p>
      </div>
    </div>
  );
}

function LabelContentSwitcher() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label content switcher">
      <LabelContentSwitcherLeft />
      <LabelContentSwitcherRight />
    </div>
  );
}

function ToolbarZone1() {
  return (
    <div className="content-stretch flex h-[28px] items-center px-[8px] relative shrink-0" data-name=".Toolbar zone">
      <LabelContentSwitcher />
    </div>
  );
}

function Primitive() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[482px] items-start min-h-px min-w-px relative w-[1352px]" data-name="Primitive">
      <ToolbarZone />
      <ToolbarZone1 />
    </div>
  );
}

function HorizontalScrollbar() {
  return (
    <div className="absolute bottom-0 content-stretch flex h-[17px] items-start right-0" data-name="Horizontal scrollbar">
      <div className="shrink-0 size-[17px]" />
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="▲">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="â²">
          <rect fill="var(--fill-0, #E7E7E9)" height="17" id="Background" width="17" />
          <path clipRule="evenodd" d={svgPaths.p1cce6580} fill="var(--fill-0, #535965)" fillRule="evenodd" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function AdjustableTopTrack() {
  return (
    <div className="bg-[#e7e7e9] content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-[17px]" data-name="Adjustable top track">
      <div className="shrink-0 size-[0.001px]" data-name="End point" />
      <div className="shrink-0 size-[0.001px]" data-name="End point" />
    </div>
  );
}

function AdjustableThumb() {
  return (
    <div className="bg-[#d9dbdd] content-stretch flex flex-[1_0_0] flex-col gap-[156px] items-start max-h-[156px] min-h-[54px] min-w-px relative w-[17px]" data-name=".Adjustable Thumb">
      <div className="shrink-0 size-[0.001px]" data-name="End point" />
      <div className="shrink-0 size-[0.001px]" data-name="End point" />
    </div>
  );
}

function Arrow() {
  return (
    <div className="relative size-[17px]" data-name=".Arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id=".Arrow">
          <rect fill="var(--fill-0, #E7E7E9)" height="17" id="Background" width="17" />
          <path clipRule="evenodd" d={svgPaths.p1cce6580} fill="var(--fill-0, #535965)" fillRule="evenodd" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function VerticalScrollbar() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[0.14%] content-stretch flex flex-col items-start left-[calc(50%+667.5px)] top-0" data-name="Vertical Scrollbar">
      <Component />
      <AdjustableTopTrack />
      <AdjustableThumb />
      <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
        <div className="flex-none h-full rotate-180">
          <div className="bg-[#e7e7e9] h-full w-[17px]" data-name="Bottom track" />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Arrow />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[106px] not-italic top-[110px]">
      <p className="absolute font-['Open_Sans:Semibold',sans-serif] leading-[20px] left-[106px] text-[19px] text-black top-[110px]">Home</p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] leading-[21px] left-[108px] text-[#6c7180] text-[12px] top-[132px]">This is a dg2 with a kebab menu</p>
    </div>
  );
}

function HoverDown1() {
  return (
    <div className="absolute contents left-[70px] top-[230.93px]" data-name="hover down 2">
      <div className="absolute bg-[#f7f7f7] h-[425.072px] left-[70px] top-[230.93px] w-[6.835px]" />
      <div className="absolute bg-[#f7f7f7] h-[425.072px] left-[1308.16px] top-[230.93px] w-[6.835px]" />
    </div>
  );
}

function HoverDown() {
  return (
    <div className="absolute contents left-[55px] top-[215px]" data-name="hover down">
      <div className="absolute bg-[#f7f7f7] h-[458px] left-[55px] top-[215px] w-[7px]" />
      <div className="absolute bg-[#f7f7f7] h-[458px] left-[1323px] top-[215px] w-[7px]" />
    </div>
  );
}

function Frame10() {
  return <div className="absolute bg-[#f7f7f7] h-[397px] left-[82px] top-[239px] w-[16px]" />;
}

function Frame11() {
  return <div className="absolute bg-[#f7f7f7] h-[397px] left-[1287px] top-[239px] w-[16px]" />;
}

function Hovers() {
  return (
    <div className="absolute contents left-[82px] top-[239px]" data-name="hovers">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function OutlinedButtons() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[10px] h-[38px] items-center justify-center left-[106px] p-[10px] rounded-[4px] top-[179px]" data-name="Outlined Buttons">
      <div aria-hidden="true" className="absolute border border-[#264ae5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Open_Sans:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#264ae5] text-[14px]">Save configuration</p>
    </div>
  );
}

function Dragger() {
  return <div className="h-[34px] shrink-0 w-[12.879px]" data-name="dragger" />;
}

function Dragger2() {
  return <div className="h-[34px] shrink-0 w-[12.879px]" data-name="dragger" />;
}

function Dragger1() {
  return (
    <div className="content-stretch flex items-center mr-[-12.879px] relative shrink-0" data-name="dragger">
      <Dragger2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mr-[-12.879px] relative" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[4px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] leading-[14px] min-h-px min-w-px not-italic relative text-[12px] text-black whitespace-pre-wrap">Name</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center pr-[12.879px] relative shrink-0 w-[108px]" data-name="content">
      <Dragger1 />
      <Content1 />
    </div>
  );
}

function Active() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[223px]" data-name="active">
      <Content />
    </div>
  );
}

function Dg2Topbar() {
  return (
    <div className="bg-white content-stretch flex items-center mb-[-1px] relative shrink-0 w-[236.2px]" data-name="dg2Topbar">
      <Dragger />
      <Active />
    </div>
  );
}

function InputFields() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields1() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields2() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields3() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields4() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full">
      <Dg2Topbar />
      <InputFields />
      <InputFields1 />
      <InputFields2 />
      <InputFields3 />
      <InputFields4 />
    </div>
  );
}

function Dg() {
  return (
    <div className="absolute content-stretch flex flex-col h-[299px] items-start justify-center left-0 top-0 w-[236.2px]" data-name="dg2">
      <Frame3 />
    </div>
  );
}

function Dragger3() {
  return <div className="h-[34px] shrink-0 w-[12.879px]" data-name="dragger" />;
}

function Dragger5() {
  return <div className="h-[34px] shrink-0 w-[12.879px]" data-name="dragger" />;
}

function Dragger4() {
  return (
    <div className="content-stretch flex items-center mr-[-12.879px] relative shrink-0" data-name="dragger">
      <Dragger5 />
    </div>
  );
}

function Content3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mr-[-12.879px] relative" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[4px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] leading-[14px] min-h-px min-w-px not-italic relative text-[12px] text-black whitespace-pre-wrap">Status</p>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center pr-[12.879px] relative shrink-0 w-[108px]" data-name="content">
      <Dragger4 />
      <Content3 />
    </div>
  );
}

function Active1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[223px]" data-name="active">
      <Content2 />
    </div>
  );
}

function Dg2Topbar1() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-0 top-0 w-[236.2px]" data-name="dg2Topbar">
      <Dragger3 />
      <Active1 />
    </div>
  );
}

function InputFields5() {
  return (
    <div className="absolute bg-white content-stretch flex h-[54px] items-center justify-between left-0 px-[10px] py-[12px] top-[33px] w-[236.2px]" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
    </div>
  );
}

function InputFields6() {
  return (
    <div className="absolute bg-white content-stretch flex h-[54px] items-center justify-between left-0 px-[10px] py-[12px] top-[86px] w-[236.2px]" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
    </div>
  );
}

function InputFields7() {
  return (
    <div className="absolute bg-white content-stretch flex h-[54px] items-center justify-between left-0 px-[10px] py-[12px] top-[139px] w-[236.2px]" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
    </div>
  );
}

function InputFields8() {
  return (
    <div className="absolute bg-white content-stretch flex h-[54px] items-center justify-between left-0 px-[10px] py-[12px] top-[192px] w-[236.2px]" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
    </div>
  );
}

function InputFields9() {
  return (
    <div className="absolute bg-white content-stretch flex h-[54px] items-center justify-between left-0 px-[10px] py-[12px] top-[245px] w-[236.2px]" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[299px] left-0 top-0 w-[236.2px]">
      <Dg2Topbar1 />
      <InputFields5 />
      <InputFields6 />
      <InputFields7 />
      <InputFields8 />
      <InputFields9 />
    </div>
  );
}

function Dg1() {
  return (
    <div className="absolute h-[299px] left-[472.4px] top-0 w-[236.2px]" data-name="dg2">
      <Frame4 />
    </div>
  );
}

function Dragger6() {
  return <div className="h-[34px] shrink-0 w-[12.879px]" data-name="dragger" />;
}

function Dragger8() {
  return <div className="h-[34px] shrink-0 w-[12.879px]" data-name="dragger" />;
}

function Dragger7() {
  return (
    <div className="content-stretch flex items-center mr-[-12.879px] relative shrink-0" data-name="dragger">
      <Dragger8 />
    </div>
  );
}

function Content5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mr-[-12.879px] relative" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[4px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] leading-[14px] min-h-px min-w-px not-italic relative text-[12px] text-black whitespace-pre-wrap">Email</p>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-center pr-[12.879px] relative shrink-0 w-[108px]" data-name="content">
      <Dragger7 />
      <Content5 />
    </div>
  );
}

function Active2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[223px]" data-name="active">
      <Content4 />
    </div>
  );
}

function Dg2Topbar2() {
  return (
    <div className="bg-white content-stretch flex items-center mb-[-1px] relative shrink-0 w-[236.2px]" data-name="dg2Topbar">
      <Dragger6 />
      <Active2 />
    </div>
  );
}

function InputFields10() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields11() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields12() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields13() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields14() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full">
      <Dg2Topbar2 />
      <InputFields10 />
      <InputFields11 />
      <InputFields12 />
      <InputFields13 />
      <InputFields14 />
    </div>
  );
}

function Dg2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[299px] items-start justify-center left-[708.6px] top-0 w-[236.2px]" data-name="dg2">
      <Frame5 />
    </div>
  );
}

function Dragger9() {
  return <div className="h-[34px] shrink-0 w-[12.879px]" data-name="dragger" />;
}

function Dragger11() {
  return <div className="h-[34px] shrink-0 w-[12.879px]" data-name="dragger" />;
}

function Dragger10() {
  return (
    <div className="content-stretch flex items-center mr-[-12.879px] relative shrink-0" data-name="dragger">
      <Dragger11 />
    </div>
  );
}

function Content7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mr-[-12.879px] relative" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[4px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] leading-[14px] min-h-px min-w-px not-italic relative text-[12px] text-black whitespace-pre-wrap">Last name</p>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex items-center pr-[12.879px] relative shrink-0 w-[108px]" data-name="content">
      <Dragger10 />
      <Content7 />
    </div>
  );
}

function Active3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[223px]" data-name="active">
      <Content6 />
    </div>
  );
}

function Dg2Topbar3() {
  return (
    <div className="bg-white content-stretch flex items-center mb-[-1px] relative shrink-0 w-[236.2px]" data-name="dg2Topbar">
      <Dragger9 />
      <Active3 />
    </div>
  );
}

function InputFields15() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields16() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields17() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields18() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields19() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full">
      <Dg2Topbar3 />
      <InputFields15 />
      <InputFields16 />
      <InputFields17 />
      <InputFields18 />
      <InputFields19 />
    </div>
  );
}

function Dg3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[299px] items-start justify-center left-[944.8px] top-0 w-[236.2px]" data-name="dg2">
      <Frame6 />
    </div>
  );
}

function Dragger12() {
  return <div className="h-[34px] shrink-0 w-[12.879px]" data-name="dragger" />;
}

function Dragger14() {
  return <div className="h-[34px] shrink-0 w-[12.879px]" data-name="dragger" />;
}

function Dragger13() {
  return (
    <div className="content-stretch flex items-center mr-[-12.879px] relative shrink-0" data-name="dragger">
      <Dragger14 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex items-center mr-[-12.879px] pr-[4px] py-[10px] relative shrink-0 w-[85px]" data-name="content">
      <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] leading-[14px] min-h-px min-w-px not-italic relative text-[12px] text-black whitespace-pre-wrap">Last name</p>
    </div>
  );
}

function Sorting1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="sorting">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="sortASC">
          <path d={svgPaths.p28b49b00} fill="var(--fill-0, #6C7180)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Sorting() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[4px] p-[3px] rounded-[9px] top-[8px]" data-name="sorting">
      <Sorting1 />
    </div>
  );
}

function Sort() {
  return (
    <div className="h-[34px] relative shrink-0 w-[26px]" data-name="sort">
      <Sorting />
    </div>
  );
}

function FilterSortFilter() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Filter-Sort / filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Filter-Sort / filter">
          <path d={svgPaths.p2a5cbd00} fill="var(--fill-0, #6C7180)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Sorting2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[3px] relative rounded-[9px] shrink-0" data-name="sorting">
      <FilterSortFilter />
    </div>
  );
}

function Sort1() {
  return (
    <div className="content-stretch flex items-center px-[4px] py-[8px] relative shrink-0" data-name="sort">
      <Sorting2 />
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px mr-[-12.879px] relative" data-name="Icons">
      <Sort />
      <Sort1 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px pr-[12.879px] relative" data-name="content">
      <Dragger13 />
      <Content9 />
      <Icons />
    </div>
  );
}

function Group8() {
  return (
    <div className="h-[10px] relative shrink-0 w-[2px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 10">
        <g id="Group 1800">
          <path d={svgPaths.p15bb1c30} fill="var(--fill-0, #6C7180)" id="Vector" />
          <path d={svgPaths.p6e7fd40} fill="var(--fill-0, #6C7180)" id="Vector_2" />
          <path d={svgPaths.p31858b40} fill="var(--fill-0, #6C7180)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Kebab2() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[5px] py-px relative shrink-0" data-name="kebab">
      <Group8 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[12px]">
      <Kebab2 />
    </div>
  );
}

function Kebab1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[3px] relative rounded-[9px] shrink-0" data-name="kebab">
      <div className="flex flex-row items-center self-stretch">
        <Frame18 />
      </div>
    </div>
  );
}

function Kebab() {
  return (
    <div className="content-stretch flex h-[34px] items-center justify-center p-[4px] relative shrink-0" data-name="kebab">
      <Kebab1 />
    </div>
  );
}

function Active4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="active">
      <Content8 />
      <Kebab />
    </div>
  );
}

function Dg2Topbar4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between mb-[-1px] relative shrink-0 w-[236px]" data-name="dg2Topbar">
      <Dragger12 />
      <Active4 />
    </div>
  );
}

function InputFields20() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields21() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields22() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields23() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function InputFields24() {
  return (
    <div className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full" data-name="Input Fields">
      <div aria-hidden="true" className="absolute border-[#ced0d3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">[No attribute selected]</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full">
      <Dg2Topbar4 />
      <InputFields20 />
      <InputFields21 />
      <InputFields22 />
      <InputFields23 />
      <InputFields24 />
    </div>
  );
}

function Dg4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[299px] items-start justify-center left-[236.2px] top-0 w-[236.2px]" data-name="dg2">
      <Frame7 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[299px] relative shrink-0 w-[1181px]" data-name="Table">
      <Dg />
      <Dg1 />
      <Dg2 />
      <Dg3 />
      <Dg4 />
    </div>
  );
}

function DataGridCollumns() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1181px]" data-name="DataGrid.Collumns">
      <Table />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[299px] relative shrink-0 w-full">
      <DataGridCollumns />
    </div>
  );
}

function Pagination() {
  return <div className="bg-white h-[46px] rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-name="pagination" />;
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 rounded-[4px] shadow-[0px_4px_6.3px_0px_rgba(0,0,0,0.15)] top-0 w-[1181px]">
      <Frame14 />
      <Pagination />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[345px] left-[106px] top-[240px] w-[1181px]">
      <Frame13 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[18.75%_18.36%_15.63%_18.75%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0625 10.5">
        <g id="Group 2">
          <path d={svgPaths.p3892d700} fill="var(--fill-0, #787D87)" id="Vector" />
          <rect fill="var(--fill-0, #787D87)" height="10.5" id="Rectangle 1524" transform="matrix(1 0 0 -1 0 10.5)" width="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Arrows() {
  return (
    <div className="absolute left-[6px] overflow-clip size-[16px] top-[9px]" data-name="Arrows">
      <Group1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[34px] relative shrink-0 w-[28px]">
      <div className="absolute h-[51px] left-0 top-0 w-[40px]" />
      <Arrows />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[18.75%_12.5%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
        <g id="Group 1">
          <path d={svgPaths.p3e206c00} fill="var(--fill-0, #787D87)" id="Vector" />
          <path d={svgPaths.p1cdb6b00} fill="var(--fill-0, #787D87)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Arrows1() {
  return (
    <div className="absolute left-[6px] overflow-clip size-[16px] top-[9px]" data-name="Arrows">
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[34px] relative shrink-0 w-[28px]">
      <div className="absolute h-[51px] left-0 top-0 w-[40px]" />
      <Arrows1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#787d87] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">1 to 1 of 1</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[18.75%_12.5%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
        <g id="Group 1">
          <path d={svgPaths.p3e206c00} fill="var(--fill-0, #787D87)" id="Vector" />
          <path d={svgPaths.p1cdb6b00} fill="var(--fill-0, #787D87)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Arrows2() {
  return (
    <div className="absolute left-[6px] overflow-clip size-[16px] top-[9px]" data-name="Arrows">
      <Group2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[34px] relative w-[28px]">
      <div className="absolute h-[51px] left-0 top-0 w-[40px]" />
      <Arrows2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[18.75%_18.36%_15.63%_18.75%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0625 10.5">
        <g id="Group 2">
          <path d={svgPaths.p3892d700} fill="var(--fill-0, #787D87)" id="Vector" />
          <rect fill="var(--fill-0, #787D87)" height="10.5" id="Rectangle 1524" transform="matrix(1 0 0 -1 0 10.5)" width="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Arrows3() {
  return (
    <div className="absolute left-[6px] overflow-clip size-[16px] top-[9px]" data-name="Arrows">
      <Group3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[34px] relative w-[28px]">
      <div className="absolute h-[51px] left-0 top-0 w-[40px]" />
      <Arrows3 />
    </div>
  );
}

function Pagination1() {
  return (
    <div className="absolute content-stretch flex items-center left-[1077px] top-[544px] w-[191.811px]" data-name="Pagination">
      <Frame />
      <Frame1 />
      <Frame2 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Frame8 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[106px] top-[240px]">
      <Frame15 />
      <Pagination1 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[106px] top-[179px]">
      <OutlinedButtons />
      <Group9 />
    </div>
  );
}

function Canvas() {
  return (
    <div className="absolute bg-[#f7f7f7] h-[728px] left-px top-0 w-[1352px]" data-name="Canvas">
      <HorizontalScrollbar />
      <VerticalScrollbar />
      <Group4 />
      <HoverDown1 />
      <HoverDown />
      <Hovers />
      <Group7 />
      <div className="absolute bg-[#f7f7f7] h-[116px] left-[68px] top-[617px] w-[1267px]" />
    </div>
  );
}

function Sidebar1() {
  return <div className="bg-[#21205d] flex-[1_0_0] min-h-px min-w-px w-full" data-name="Sidebar" />;
}

function MenuNavigation() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Menu-Navigation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Menu-Navigation / home">
          <path d={svgPaths.p4e2cb00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="content-stretch flex flex-col items-start p-[4px] relative shrink-0" data-name="home">
      <MenuNavigation />
    </div>
  );
}

function Icons1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[64px] items-start left-[10px] top-[8px]" data-name="icons">
      <Home />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute content-stretch flex flex-col h-[728px] items-start justify-center left-px top-0 w-[52px]" data-name="Sidebar">
      <Sidebar1 />
      <Icons1 />
    </div>
  );
}

function MenuNavigation1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Menu-Navigation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Menu-Navigation / navigation-menu">
          <path d={svgPaths.p239a3c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="menu">
      <MenuNavigation1 />
    </div>
  );
}

function MendixLogoMark() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Mendix Logo Mark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_3124)" id="Mendix-Brandmark-Digital-Fill-MX Small-White">
          <path d={svgPaths.p919c900} fill="var(--fill-0, white)" id="Subtract" />
        </g>
        <defs>
          <clipPath id="clip0_1_3124">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MxLogo() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="mx.logo">
      <MendixLogoMark />
    </div>
  );
}

function TopbarElements() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="topbar.elements">
      <Menu />
      <MxLogo />
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-down">
          <path d={svgPaths.pf738c00} id="Shape" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Trigger() {
  return (
    <div className="absolute content-stretch flex gap-[4px] inset-0 items-center justify-center rounded-[4px] shadow-[0px_2px_20px_0px_rgba(10,19,37,0.05)]" data-name="Trigger">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Select language
      </p>
      <ArrowDown />
    </div>
  );
}

function LanguageSelector1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="LanguageSelector">
      <Trigger />
    </div>
  );
}

function LanguageSelector() {
  return (
    <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0 w-[136px]" data-name="language.selector">
      <LanguageSelector1 />
    </div>
  );
}

function Topbar() {
  return (
    <div className="absolute bg-[#2c2c7b] content-stretch flex gap-[1112px] items-center justify-center left-0 px-[10px] py-[16px] top-0 w-[1336px]" data-name="Topbar">
      <TopbarElements />
      <LanguageSelector />
    </div>
  );
}

function TopSideMenu() {
  return (
    <div className="absolute contents left-0 top-0" data-name="top/side menu">
      <Sidebar />
      <Topbar />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-0">
      <Canvas />
      <TopSideMenu />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[728px] relative shrink-0 w-[1353px]">
      <Group6 />
    </div>
  );
}

function Editor() {
  return (
    <div className="absolute bg-[#f7f7f7] h-[728px] left-0 top-0 w-[1352px]" data-name="Editor">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Primitive />
        <Frame12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c1c3c8] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

export default function SortingFlow() {
  return (
    <div className="relative size-full" data-name="Sorting flow">
      <Editor />
    </div>
  );
}