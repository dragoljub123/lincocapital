import Image from "next/image";
import Link from "next/link";

const AibanerM2 = () => {
  return (
    <div className="mx-auto p-5 md:p-10 text-gray-700">
      {/* Naslov */}
      <h2 className="text-2xl font-semibold  md:flex md:justify-center">
        CapitalRevo AI support
      </h2>

      {/* Podnaslov */}
      <h3 className=" mb-2 font-bold md:flex md:justify-center leading-tight">
        Leave out the guessing from your trading success!
      </h3>

      {/* Slika */}
      <div className="w-full md:flex justify-center mb-4 pr-2 md:pr-0">
        <Image
          src="/HP AI Image-min.png" // zameni sa putanjom do tvoje slike
          alt="Opis slike"
          width={500} // prilagodi širinu
          height={500} // prilagodi visinu
          className="w-full md:w-[80%]"
        />
      </div>

      {/* Prvi paragraf */}
      <div className="mb-4 md:text-center">
        <h3 className="md:text-lg font-semibold text-[#2c2937] ">
          Unmatched Processing Speed
        </h3>
        <p className="text-sm">
          AI trading bots handle vast amounts of market data in real-time,
          analyzing it faster than any human ever could. This lightning-fast
          speed ensures you&apos;re always one step ahead in making informed
          trading decisions.
        </p>
      </div>

      {/* Drugi paragraf */}
      <div className="mb-4 md:text-center">
        <h3 className="md:text-lg font-semibold text-[#2c2937] ">
          Continuous Learning and Improvement
        </h3>
        <p className="text-sm">
          With built-in machine learning, these bots continuously evolve. They
          analyze every bit of data to deepen their understanding of market
          trends, enabling them to adapt and improve with each trade.
        </p>
      </div>

      {/* Treći paragraf */}

      {/* Četvrti paragraf */}
      <div className="mb-3 md:text-center">
        <h3 className="md:text-lg font-semibold text-[#2c2937] ">
          Emotionless, Data-Driven Decisions
        </h3>
        <p className="text-sm">
          Powered solely by data, trading bots eliminate emotional
          decision-making, focusing purely on statistics. No fear or greed—just
          precise, rational moves to optimize your trading strategy.
        </p>
      </div>

      {/* Peti paragraf */}
      <div className="mb-3 md:text-center">
        <h3 className="md:text-lg font-semibold text-[#2c2937] ">
          Market Access For Everyone
        </h3>
        <p className="text-sm">
          AI trading bots make high-level market expertise accessible to
          everyone, regardless of financial background, investment size, or time
          commitment. You can tap into expert-level trading without needing to
          be an expert yourself.
        </p>
      </div>

      {/* Dugme Learn More */}
      <div className="mt-3 flex justify-center">
        <Link href="/ai-support">
          <button className="bg-white text-navcolor border border-gray-600 font-bold py-2 px-4 w-48 h-12 rounded shadow transition hover:bg-[#b22028]">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AibanerM2;
