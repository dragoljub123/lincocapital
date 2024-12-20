import Image from "next/image";
import Link from "next/link";

const AibanerC2 = () => {
  return (
    <div className="mx-auto">
      <div className="max-w-screen-xl flex justify-center ">
        {/* Leva strana */}
        <div className="md:p-12 lg:p-10 w-1/2 ">
          <h2 className="text-[#2c2937] md:text-2xl lg:text-4xl font-semibold  mb-1 ">
            CapitalRevo AI support
          </h2>
          <h3 className="text-[#2c2937] md:text-xl lg:text-2xl mb-1 font-semibold tracking-tighter  ">
            Leave out the guessing from your trading success!
          </h3>

          {/* Prvi paragraf */}
          <div className=" tracking-tighter">
            <div className="mb-1  ">
              <h3 className="text-[#2c2937] text-lg font-semibold ">
                Unmatched Processing Speed
              </h3>
              <p className="text-[18px] text-gray-600 leading-tight">
                AI trading bots handle vast amounts of market data in real-time,
                analyzing it faster than any human ever could. This
                lightning-fast speed ensures you&apos;re always one step ahead
                in making informed trading decisions.
              </p>
            </div>
            {/* Drugi paragraf */}
            <div className="mb-1">
              <h3 className="text-[#2c2937] text-lg font-semibold">
                Continuous Learning and Improvement
              </h3>
              <p className="text-[18px] text-gray-600 leading-tight">
                With built-in machine learning, these bots continuously evolve.
                They analyze every bit of data to deepen their understanding of
                market trends, enabling them to adapt and improve with each
                trade.
              </p>
            </div>
            {/* Treći paragraf */}
            <div className="mb-1">
              <h3 className="text-[#2c2937] text-lg font-semibold  ">
                Advanced Analytical Power
              </h3>
              <p className="text-[18px] text-gray-600 leading-tight">
                AI trading systems effortlessly perform complex technical
                analyses across multiple markets at once, identifying key price
                trends in seconds—work that would take humans hours to complete.
              </p>
            </div>
            {/* Četvrti paragraf */}
            <div className="mb-1">
              <h3 className="text-[#2c2937] text-lg font-semibold  ">
                Emotionless, Data-Driven Decisions
              </h3>
              <p className="text-[18px] text-gray-600 leading-tight">
                Powered solely by data, trading bots eliminate emotional
                decision-making, focusing purely on statistics. No fear or
                greed—just precise, rational moves to optimize your trading
                strategy.
              </p>
            </div>
            {/* Peti paragraf */}

            {/* Dugme Learn More */}
            <div className="mt-9 ">
              <Link href="/ai-support">
                <button className="bg-white text-[#2c2937] font-semibold px-4 py-2 gap-2 w-48 h-12  border border-gray-600 rounded shadow hover:bg-red-900 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Desna strana */}
        <div className="w-1/2 md:p-12 lg:p-[39px] lg:mt-5">
          <Image
            src="/HP AI Image-min.png" // zameni sa putanjom do tvoje slike
            alt="Opis slike"
            width={500} // prilagodi širinu
            height={500} // prilagodi visinu
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AibanerC2;
