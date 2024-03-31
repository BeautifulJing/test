export default function Body() {
  // throw new Error()
  const arr = new Array(6).fill(0).map((num, index) => index)
  return (
    <div className="flex flex-wrap">
      {arr.map((item) => (
        <div key={item} className="w-2/6 min-w-80 p-4 flex-1">
          <div className="card w-full bg-base-100 shadow-xl">
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className=" w-10 ml-10 mt-10"
            />
            <div className="card-body">
              <p className="">Shoes!</p>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
