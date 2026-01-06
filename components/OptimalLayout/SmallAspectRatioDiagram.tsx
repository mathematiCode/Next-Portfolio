import { ArrowBigDown, ArrowBigRight } from 'lucide-react';

function SmallAspectRatioDiagram({}) {
  return (
    <div className="grid lg:grid-cols-[1fr_70px_1fr] grid-cols-1 grid-rows-[auto_auto_70px_auto_auto] items-center lg:grid-rows-[auto_auto] gap-4">
      <div className="bg-surface/80 border-2 border-accent rounded-xl grid grid-rows-subgrid items-center row-span-2 justify-self-center overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 bg-accent text-accent-text font-semibold text-lg px-5 py-3 rounded-t-lg z-10">
          Hard Question
        </div>
        <figcaption className="text-lg px-5 pt-14">
          How many items do we need per row to evenly space 60 items in this
          rectangle?
        </figcaption>
        <div className="flex flex-col items-center gap-4 pb-5">
          <span className="text-2xl font-bold "> 60 Items </span>
          <ArrowBigDown className="" />
          <div className="relative px-9 pb-8">
            <div className="relative w-[100px] h-[200px] border-2">
              <span className="absolute top-[200px] left-[30px]">100px</span>
              <span className="absolute top-[100px] right-[-53px]">200px</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:row-start-2 lg:col-start-2 flex flex-col items-center">
        <span className="font-semibold text-xl"> X 0.5 </span>
        <ArrowBigRight
          size={45}
          strokeWidth={1.25}
          className="hidden lg:block"
        />
        <ArrowBigDown
          size={45}
          strokeWidth={1.25}
          className="block lg:hidden"
        />
      </div>
      <div className="bg-surface/80 border-2 border-accent rounded-xl grid grid-rows-subgrid row-span-2 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 bg-accent text-accent-text font-semibold text-lg px-5 py-3 rounded-t-lg z-10">
          Easier Question
        </div>
        <figcaption className="text-lg px-5 pt-14">
          How many items do we need per row to evenly space 30 items in this
          square?
        </figcaption>
        <div className="flex flex-col items-center gap-4 pb-5">
          <span className="text-2xl font-bold "> 30 Items </span>
          <ArrowBigDown className="" />
          <div className="relative pb-8 px-9">
            <div className="w-[100px] h-[100px] border-2 relative justify-self-center">
              <span className="absolute top-[100px] left-[30px]">100px</span>
              <span className="absolute top-[45px] right-[-53px]">100px</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallAspectRatioDiagram;
