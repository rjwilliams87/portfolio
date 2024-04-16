export function Footer() {
  return (
    <div className="relative w-full bg-[#202020] h-[19rem] z-[1]" id="contact">
      <div className="w-full h-[19rem] flex flex-col justify-end fixed bottom-0 left-0 right-0 -z-10">
        <footer className="px-10 w-full mx-auto flex flex-col justify-between py-8">
          <div className="border-b border-floral-white pb-6 flex justify-between items-end">
            <div>Logo</div>
            <div className="flex gap-4 items-center">
              <div>logo</div>
              <div>logo</div>
            </div>
          </div>
          <div className="flex items-end justify-between py-8">
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col gap-4 items-start">
                <div className="text-lg">hello</div>
                <div className="text-lg">worlds</div>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <div className="text-lg">hello</div>
                <div className="text-lg">world</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
