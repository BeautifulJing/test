import girl from '../../assets/girl.png'

export default function Hero() {
  return (
    <div className="hero min-h-fit bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={girl} className="max-w-80 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-center">Box Office News!</h1>
          <p className="p-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex justify-center">
            <div className="flex flex-wrap">
              <button className="btn mt-4  ml-4 btn-primary rounded-full">
                Get Started
              </button>
              <button className="btn mt-4 ml-4 btn-primary rounded-full">
                Get Started
              </button>
              <button className="btn mt-4 ml-4 btn-primary rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
