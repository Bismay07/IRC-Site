import Ripple from "@/components/ui/ripple";

export function RippleDemo({text}) {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center rounded-lg overflow-hidden mt-20">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        {text}
      </p>
      <Ripple />
    </div>
  );
}
