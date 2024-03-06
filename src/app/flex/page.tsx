export default function Flex() {

  const GetRandomColor = (): string => {
    const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    // setRandom(randomColor);
    return randomColor
  };

  return (
    <div >
      <div className="flex flex-row">
        <div className="flex-auto w-64" style={{ backgroundColor: GetRandomColor() }}>011111111</div>
        <div className="flex-initial w-32" style={{ backgroundColor: GetRandomColor() }}>0222222222222</div>
        <div className="flex-none w-14" style={{ backgroundColor: GetRandomColor() }}>033333333333333</div>
      </div>

      <div className="h-4"></div>

      <div>
        <div className="flex flex-row">
          <div className="grow" style={{ backgroundColor: GetRandomColor() }}>011111111</div>
          <div className="grow-0" style={{ backgroundColor: GetRandomColor() }}>0222222222222</div>
          <div className="grow " style={{ backgroundColor: GetRandomColor() }}>033333333333333</div>
        </div>
      </div>

      <div className="h-4"></div>

      <div>
        <div className="flex flex-row">
          <div className="shrink" style={{ backgroundColor: GetRandomColor() }}>011111111</div>
          <div className="shrink-0" style={{ backgroundColor: GetRandomColor() }}>0222222222222</div>
          <div className="shrink " style={{ backgroundColor: GetRandomColor() }}>033333333333333</div>
        </div>
      </div>

      <div className="h-4"></div>

      <div>
        <div className="flex justify-between">
          <div className="" style={{ backgroundColor: GetRandomColor() }}>011111111</div>
          <div className="shrink-0" style={{ backgroundColor: GetRandomColor() }}>0222222222222</div>
          <div className="shrink " style={{ backgroundColor: GetRandomColor() }}>033333333333333</div>
        </div>
      </div>

      <div className="h-4"></div>

      <div>
        <div className="flex ">
          <div className="order-3" style={{ backgroundColor: GetRandomColor() }}>011111111</div>
          <div className="shrink-0" style={{ backgroundColor: GetRandomColor() }}>0222222222222</div>
          <div className="order " style={{ backgroundColor: GetRandomColor() }}>033333333333333</div>
        </div>
      </div>

      <div className="h-4"></div>

      <div>
        <div className="flex flex-wrap">
          <div className="flex-auto w-14" style={{ backgroundColor: GetRandomColor() }}>011111111</div>
          <div className="flex-auto w-14" style={{ backgroundColor: GetRandomColor() }}>0222222222222</div>
          <div className="flex-auto w-14" style={{ backgroundColor: GetRandomColor() }}>033333333333333</div>
        </div>
      </div>

      <div className="h-4"></div>

      <div>
        <div className="flex flex-wrap">
          <div className="sm:h-[40px]w-14-red md:w-32 lg:w-64" style={{ backgroundColor: GetRandomColor() }}>011111111</div>
          <div className="h-[96]" style={{ backgroundColor: GetRandomColor() }}>0222222222222</div>
          <div className="w-14" style={{ backgroundColor: GetRandomColor() }}>033333333333333</div>
        </div>
      </div>
    </div>

  )
}